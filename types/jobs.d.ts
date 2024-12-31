type Job = {
  id: number;
  documentId: string;
  jobName: string;
  jobDescription: string;
  quantity: number;
  block: 'Middle School' | 'High School' | 'All School Administration';
  startDate: string;
  endDate: null | string;
  location: 'Ha Noi';
  workType: 'Full Time' | 'Part Time';
  locationType: 'On-site' | 'Hybird' | 'Remote';
  shortJobDescription: string;
  department: string;
};
