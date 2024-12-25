type MemberGoup =
  | 'advisory-board'
  | 'senior-leadership-team'
  | 'high-school'
  | 'middle-school';
interface TeamMember {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  locale: string;
  title: string;
  desc?: string;
  order?: number;
  group: MemberGoup[];
  avatar: {
    url: string;
  };
}
