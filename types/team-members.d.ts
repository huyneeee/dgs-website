type MemberGoup =
  | 'advisory-board'
  | 'senior-leadership-team'
  | 'high-school'
  | 'middle-school'
  | 'college-counseling';
interface TeamMember {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  locale: string;
  role: string;
  summary?: string;
  order?: number;
  department: MemberGoup[];
  avatar: {
    url: string;
  };
  qualification: string;
}
