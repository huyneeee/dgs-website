import React from 'react';

const JobDescription = ({
  jobName,
  jobDescription,
  workType,
  location,
  quantity,
  department,
  endDate,
}: Job) => {
  return (
    <section className="lg:w-3/5 flex flex-col">
      <div className="mb-10">
        <h3 className="heading-3">{jobName}</h3>
        <p>{department}</p>
      </div>

      <div className="flex items-center gap-10 py-5 border-y border-gray-300 mb-5">
        {location && (
          <div>
            <p className="font-semibold max-sm:text-sm">Location</p>
            <p className="max-sm:text-sm">{location}</p>
          </div>
        )}

        {workType && (
          <div>
            <p className="font-semibold max-sm:text-sm">Contract Type</p>
            <p className="max-sm:text-sm">{workType}</p>
          </div>
        )}

        {quantity && (
          <div>
            <p className="font-semibold max-sm:text-sm">Quantity</p>
            <p className="max-sm:text-sm">{quantity}</p>
          </div>
        )}

        {endDate && (
          <div>
            <p className="font-semibold max-sm:text-sm">End Date</p>
            <p className="max-sm:text-sm">{endDate}</p>
          </div>
        )}
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: jobDescription,
        }}
      />
    </section>
  );
};

export default JobDescription;
