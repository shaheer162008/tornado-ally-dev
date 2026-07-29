export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'abc',
    name: 'ABC',
    role: 'Example Role',
    description: 'This is an example team member.',
    image: '/team/example.png',
    linkedin: '#',
  }
];
