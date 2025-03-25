import React from 'react';
import './Tools.css';

interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
}

const devTools: Tool[] = [
  {
    id: 'json-formatter',
    name: 'JSON 格式化工具',
    description: '在线JSON格式化、校验工具',
    url: 'https://jsonformatter.org/',
    icon: '🔧',
    category: '格式化'
  },
  {
    id: 'base64',
    name: 'Base64 转换',
    description: '在线Base64编码解码工具',
    url: 'https://base64.guru/',
    icon: '🔄',
    category: '编码转换'
  },
  {
    id: 'timestamp',
    name: '时间戳转换',
    description: '时间戳与日期格式转换工具',
    url: 'https://tool.lu/timestamp/',
    icon: '⏰',
    category: '时间工具'
  },
  {
    id: 'regex',
    name: '正则表达式测试',
    description: '在线正则表达式测试工具',
    url: 'https://regex101.com/',
    icon: '🎯',
    category: '开发工具'
  },
  {
    id: 'markdown',
    name: 'Markdown 编辑器',
    description: '在线Markdown编辑预览工具',
    url: 'https://stackedit.io/app',
    icon: '📝',
    category: '编辑器'
  },
  {
    id: 'color-picker',
    name: '颜色选择器',
    description: '颜色代码转换与选择工具',
    url: 'https://colorhunt.co/',
    icon: '🎨',
    category: '设计工具'
  },
  {
    id: 'cron',
    name: 'Cron 表达式',
    description: 'Cron表达式生成与测试',
    url: 'https://crontab.guru/',
    icon: '⚡',
    category: '开发工具'
  },
  {
    id: 'jwt',
    name: 'JWT 解码器',
    description: 'JWT Token解析工具',
    url: 'https://jwt.io/',
    icon: '🔑',
    category: '开发工具'
  },
  {
    id: 'diff',
    name: '文本对比工具',
    description: '在线文本差异对比',
    url: 'https://www.diffchecker.com/',
    icon: '📊',
    category: '开发工具'
  },
  {
    id: 'minify',
    name: '代码压缩',
    description: 'JS/CSS代码压缩工具',
    url: 'https://www.toptal.com/developers/javascript-minifier',
    icon: '📦',
    category: '格式化'
  },
  {
    id: 'svg-editor',
    name: 'SVG 编辑器',
    description: '在线SVG编辑与优化',
    url: 'https://boxy-svg.com/app',
    icon: '🎨',
    category: '设计工具'
  },
  {
    id: 'css-gradient',
    name: 'CSS渐变生成器',
    description: '在线CSS渐变配置工具',
    url: 'https://cssgradient.io/',
    icon: '🌈',
    category: '设计工具'
  }
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-card">
      <span className="tool-icon">{tool.icon}</span>
      <div className="tool-content">
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
        <span className="tool-category">{tool.category}</span>
      </div>
    </a>
  );
}

function Tools() {
  const categories = [...new Set(devTools.map(tool => tool.category))];

  return (
    <div className="tools-page">
      <header className="tools-header">
        <h1>开发工具箱</h1>
        <p>提高开发效率的实用工具集</p>
      </header>

      {categories.map(category => (
        <section key={category} className="tools-section">
          <h2>{category}</h2>
          <div className="tools-grid">
            {devTools
              .filter(tool => tool.category === category)
              .map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Tools;
