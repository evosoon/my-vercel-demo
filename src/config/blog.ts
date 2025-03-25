export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'micro-frontend',
    title: '微前端概述',
    description: '探讨微前端架构的概念、优势及实现方案',
    date: '2024-03-25',
    url: 'https://li817u2en50.feishu.cn/docx/GfV8diStjowz59xyBTfcoJQEncf?from=from_copylink',
    category: '架构设计',
    tags: ['微前端', 'Architecture', 'Frontend']
  },
  {
    id: 'frontend-patterns',
    title: '前端设计模式',
    description: '深入解析前端常用设计模式及其实践应用',
    date: '2024-03-25',
    url: 'https://li817u2en50.feishu.cn/docx/LuOqd0oP6oE24oxammHc8kdLnde?from=from_copylink',
    category: '最佳实践',
    tags: ['设计模式', 'JavaScript', '代码质量']
  },
  {
    id: 'typescript-quick-start',
    title: 'TypeScript快速入门',
    description: 'TypeScript核心概念和实践指南',
    date: '2024-03-25',
    url: 'https://li817u2en50.feishu.cn/docx/VsoTdvyfYoXfGtxidj4c6QzInEf?from=from_copylink',
    category: '编程语言',
    tags: ['TypeScript', '教程', '前端开发']
  }
];
