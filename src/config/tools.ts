export interface QuickTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
}

export const tools: QuickTool[] = [
  {
    id: 'github',
    name: 'GitHub',
    description: 'My open source projects',
    url: 'https://github.com/evosoon',
    icon: '🚀'
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'Personal tech blog',
    url: '/blog',
    icon: '📝'
  },
  {
    id: 'tools',
    name: 'Dev Tools',
    description: 'Useful development tools',
    url: '/tools',
    icon: '🛠️'
  }
];
