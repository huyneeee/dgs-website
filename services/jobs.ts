import { regexEmail } from '@/configs/regex';
import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import qs from 'qs';

const getAllJobs = async (locale: string) => {
  const query = qs.stringify(
    {
      locale,
      pagination: {
        page: 1,
        pageSize: 99999,
      },
      fields: [
        'jobName',
        'quantity',
        'block',
        'location',
        'workType',
        'locationType',
        'shortJobDescription',
        'department',
      ],
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/jobs?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.jobs],
      },
      cache: 'force-cache',
    },
  );
  const data = await res.json();
  return data as ResponseStrapi<Job[]>;
};

const getDetailJob = async (locale: string, id: string) => {
  const query = qs.stringify(
    {
      locale,
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/jobs/${id}?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.jobs],
      },
      cache: 'force-cache',
    },
  );
  const data = await res.json();
  return data as ResponseStrapi<Job>;
};

function isAllowedFileType(fileName: string) {
  const allowedExtensions = ['.pdf', '.txt', '.docx', '.xlsx'];
  return allowedExtensions.includes(fileName);
}

const applyJob = async (formData: FormData, file: File | null) => {
  const fullName = (formData.get('fullName') || '') as string;
  const email = (formData.get('email') || '') as string;
  const phoneNumber = (formData.get('phoneNumber') || '') as string;
  const defaultValues = {
    fullName,
    email,
    phoneNumber,
  };

  if (fullName.length === 0)
    return {
      error: {
        fullName: 'fullName',
      },
      defaultValues,
    };

  if (phoneNumber.length === 0)
    return {
      error: {
        phoneNumber: 'phoneNumber',
      },
      defaultValues,
    };

  if (!regexEmail.test(email))
    return {
      error: {
        email: 'email',
      },
      defaultValues,
    };

  if (!file)
    return {
      error: {
        file: 'requiredFile',
      },
      defaultValues,
    };

  const fileName = file.name;
  const fileExtension = '.' + fileName?.split('.')?.pop()?.toLowerCase();
  if (!isAllowedFileType(fileExtension || ''))
    return {
      error: {
        file: 'allowedFiles',
      },
      defaultValues,
    };

  if (file && file?.size > 15 * 1024 * 1024)
    return {
      error: {
        file: 'exceedsLimit',
      },
      defaultValues,
    };

  const bodyData = new FormData();
  bodyData.append('files', file!);

  try {
    const fileUploadRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`,
      {
        method: 'POST',
        body: bodyData,
      },
    );

    const fileInfo = await fileUploadRes.json();
    const resume = fileInfo[0];
    delete resume['documentId'];

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cadidates`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            ...defaultValues,
            resume,
          },
        }),
      },
    );
    await result.json();
    return {
      message: 'success',
      isSuccess: true,
    };
  } catch (error) {
    return {
      message: error,
      isSuccess: false,
    };
  }
};

export const jobAPI = Object.freeze({
  getAllJobs,
  getDetailJob,
  applyJob,
});
