'use client';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { jobAPI } from '@/services/jobs';
import { Loader } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Form from 'next/form';
import { useActionState, useEffect, useRef, useState } from 'react';
import UploadFile from './UploadFile';

const Input = ({
  name,
  label,
  placeholder,
  required,
  error,
  defaultValue,
}: {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  error?: string;
  defaultValue?: string;
}) => {
  const t = useTranslations('Careers');
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="outline-none border border-gray-300 px-4 py-2 rounded-sm text-sm"
      />
      {error && (
        <span className="text-xs text-red-600 mt-[-5px]">
          {t('pleaseEnterYourField', {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            name: t(error as any),
          })}
        </span>
      )}
    </div>
  );
};

const FormApply = () => {
  const [file, setFile] = useState<File | null>(null);
  const t = useTranslations('Careers');
  const btnForm = useRef<HTMLButtonElement>(null);
  const [state, formAction, isPending] = useActionState(
    (_: Record<string, unknown>, formData: FormData) =>
      jobAPI.applyJob(formData, file),
    {
      message: '',
      isSuccess: false,
    },
  );
  const { toast } = useToast();

  useEffect(() => {
    if (state.isSuccess) {
      toast({
        description: 'Your information has been sent!',
      });
    }
  }, [state.isSuccess]);

  useEffect(() => {
    if (!state.isSuccess && state.isSuccess) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }
  }, [state.isSuccess, state.message]);

  return (
    <div className="lg:w-2/5 flex flex-col gap-5 lg:pl-10">
      <Form action={formAction} className="flex flex-col gap-5">
        <Input
          name="fullName"
          required
          label={t('fullName')}
          placeholder={t('placeholder', {
            name: t('fullName'),
          })}
          error={state.error?.fullName}
          defaultValue={state.defaultValues?.fullName}
        />
        <Input
          name="phoneNumber"
          required
          label={t('phoneNumber')}
          placeholder={t('placeholder', {
            name: t('phoneNumber'),
          })}
          error={state.error?.phoneNumber}
          defaultValue={state.defaultValues?.phoneNumber}
        />
        <Input
          name="email"
          required
          label={t('email')}
          placeholder={t('placeholder', {
            name: t('email'),
          })}
          error={state.error?.email}
          defaultValue={state.defaultValues?.email}
        />
        <Button className="hidden" type="submit" ref={btnForm}>
          a
        </Button>
      </Form>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-sm">
          {t('resume')} <span className="text-red-600">*</span>
        </label>
        <UploadFile file={file} setFile={setFile} error={state.error?.file} />
      </div>
      <Button disabled={isPending} onClick={() => btnForm.current?.click()}>
        {t('apply')}
        {isPending && <Loader className="animate-spin" />}
      </Button>
      <Toaster />
    </div>
  );
};

export default FormApply;
