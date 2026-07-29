export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'laurus-foods',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/laurus-foods.png',
    link: '#',
    featured: true,
  },
  {
    id: 'sayyid-shaykh',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/sayyid-shaykh.png',
    link: '#',
    featured: true,
  },
  {
    id: 'sindh-education-dashboard',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/sindh-education-dashboard.png',
    link: '#',
    featured: true,
  },
  {
    id: 'emergent-enterprise',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/emergent-enterprise.png',
    link: '#',
  },
  {
    id: 'yaarhaulage-limited',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/yaarhaulage-limited.png',
    link: '#',
  },
  {
    id: 'ai-solution-academy',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/ai-solution-academy.png',
    link: '#',
  },
  {
    id: 'ajwa-tutors',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/ajwa-tutors.png',
    link: '#',
  },
  {
    id: 'innox',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/innox.png',
    link: '#',
  },
    {
    id: 'typing-test-pk',
    title: '[WILL BE FILLED BY YOU]',
    category: '[WILL BE FILLED BY YOU]',
    description:
      '[WILL BE FILLED BY YOU]',
    image: '/our-work/typing-test-pk.png',
    link: '#',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
