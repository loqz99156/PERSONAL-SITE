# 个人技术作品集

基于 Next.js 15 和 TypeScript 构建的现代化个人网站，支持深浅色主题切换和完整的中文本地化。

## ✨ 功能特性

- 🎨 **现代UI设计** - 采用 Tailwind CSS 4.x，支持响应式布局
- 🌓 **深浅色主题** - 自动检测系统偏好，支持手动切换
- 📱 **移动优先** - 完全响应式设计，优化移动端体验
- 🌏 **中文本地化** - 完整的中文界面和内容
- 📝 **MDX文章系统** - 基于 Fumadocs 的文档管理
- ⚡ **性能优化** - Next.js 15 App Router，静态生成
- 🎯 **SEO友好** - 完整的元数据和结构化数据

## 🛠️ 技术栈

### 前端框架
- **Next.js 15** - React 全栈框架
- **TypeScript 5** - 类型安全的 JavaScript
- **React 18** - 用户界面库

### 样式和UI
- **Tailwind CSS 4** - 原子化 CSS 框架
- **@tailwindcss/typography** - 文章样式插件
- **CSS Variables** - 主题切换支持

### 内容管理
- **Fumadocs** - MDX 文档系统
- **MDX** - Markdown + JSX

### 开发工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 处理工具
- **Autoprefixer** - CSS 前缀自动添加

## 🚀 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

### 代码检查

```bash
npm run lint
```

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── articles/          # 文章页面
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── layout/           # 布局组件
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # 页面区块
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── PaidExclusives.tsx
│   │   ├── LatestArticles.tsx
│   │   └── ContactSection.tsx
│   ├── ui/              # 通用UI组件
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ThemeProvider.tsx
│   └── docs/            # 文档相关组件
├── lib/                 # 工具库和数据
│   ├── data.ts         # 网站数据
│   ├── types.ts        # TypeScript 类型定义
│   └── docs/           # 文档配置
└── styles/             # 样式文件
    └── globals.css
```

## 🎨 设计系统

### 配色方案
- **主色调**: `#1173d4`
- **浅色主题**: `#f6f7f8` 背景，`#1B1C26` 文字
- **深色主题**: `#101922` 背景，`#e5e7eb` 文字

### 响应式断点
- **移动端**: `< 640px`
- **平板端**: `≥ 640px` (sm:)
- **桌面端**: `≥ 768px` (md:)

### 组件设计
- **圆角**: 默认 0.25rem，lg 0.5rem，xl 0.75rem
- **间距**: 基于 8px 网格系统
- **容器**: 最大宽度 832px

## 📝 内容管理

### 文章系统
文章使用 MDX 格式存储在 `content/docs/` 目录下：

```markdown
---
title: "文章标题"
description: "文章描述"
---

# Markdown 内容
```

### 数据配置
网站数据存储在 `src/lib/data.ts` 中，包括：
- 个人信息
- 项目展示
- 付费专栏
- 联系方式

## 🌓 主题系统

### 主题切换
- 自动检测系统偏好
- 支持手动切换
- 主题状态持久化

### 自定义主题
在 `tailwind.config.ts` 中配置：

```typescript
theme: {
  extend: {
    colors: {
      primary: "#1173d4",
      "background-light": "#f6f7f8",
      "background-dark": "#101922",
    }
  }
}
```

## 🚀 部署

### Vercel (推荐)
1. 推送代码到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署

### 其他平台
支持所有兼容 Next.js 的部署平台：
- Netlify
- Railway
- Digital Ocean
- AWS

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- **邮箱**: [your-email@example.com](mailto:your-email@example.com)
- **微信**: [your-wechat-id](#)
- **GitHub**: [你的GitHub地址](https://github.com/yourusername)

---

构建于 ❤️ 使用 Next.js + TypeScript + Tailwind CSS