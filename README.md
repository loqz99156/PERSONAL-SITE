# Personal Tech Portfolio / 个人技术作品集

A modern personal website for Luoliba Shuo, built with Next.js 15 and TypeScript. It showcases projects, long-form MDX articles, and contact channels with a responsive, theme-aware UI.

面向「罗里叭说」的现代化个人站点，基于 Next.js 15 与 TypeScript 构建，用于展示项目案例、长篇文章以及多种联系方式，支持响应式布局与智能主题切换。

## Highlights / 核心特性

- Modern UI powered by Tailwind CSS 4 and custom CSS variables  
  采用 Tailwind CSS 4 与自定义 CSS 变量打造现代界面
- Adaptive light/dark theme with manual override  
  深浅色主题自动适配并支持手动切换
- Modular theme tokens covering page canvas, sections, and cards  
  模块化主题令牌统一管理页面背景、区块背景与卡片表面
- Mobile-first responsive layout, progressively enhanced for desktop  
  移动优先的响应式布局，并为桌面端逐步增强
- Full Simplified Chinese copywriting across the site  
  全站中文化文案与内容
- MDX knowledge base powered by Fumadocs under `/articles`  
  基于 Fumadocs 的 `/articles` 文档子站
- Next.js 15 App Router with static export support  
  使用 Next.js 15 App Router 并支持静态导出
- SEO-ready metadata and structured data  
  预置 SEO 元数据与结构化信息

## Tech Stack / 技术栈

### Framework / 框架
- Next.js 15
- React 18
- TypeScript 5

### Styling & UI / 样式与界面
- Tailwind CSS 4
- @tailwindcss/typography
- CSS custom properties for theming  
  使用 CSS 自定义属性驱动主题

### Content / 内容管理
- Fumadocs
- MDX

### Tooling / 开发工具
- ESLint
- PostCSS
- Autoprefixer

## Getting Started / 快速开始

### Requirements / 环境要求
- Node.js 18+
- npm 或 pnpm

### Install dependencies / 安装依赖
```bash
npm install
```

### Start the dev server / 启动开发服务器
```bash
npm run dev
```
Visit http://localhost:3000 to view the site.  
访问 http://localhost:3000 查看站点。

### Production build / 构建生产版本
```bash
npm run build
npm start
```

### Linting / 代码检查
```bash
npm run lint
```

## Project Structure / 项目结构
```
src/
├── app/
│   ├── articles/          # MDX documentation hub (Fumadocs) / Fumadocs 文档子站
│   ├── layout.tsx         # Root layout / 根布局
│   └── page.tsx           # Home page entry / 首页入口
├── components/
│   ├── ArticlePagination.tsx
│   ├── ContactSection.tsx
│   ├── ErrorBoundary.tsx
│   ├── FeaturedProjects.tsx
│   ├── Hero.tsx
│   ├── LatestArticles.tsx
│   ├── PaidExclusives.tsx
│   ├── SocialMedia.tsx
│   ├── ThemeProvider.tsx  # Global theme management and toggle / 全局主题管理
│   └── docs/              # Fumadocs adapters / Fumadocs 适配层
├── lib/
│   ├── data.ts            # Display data / 展示数据
│   ├── docs/              # MDX source wiring / 文档数据源
│   └── types.ts           # Shared types / 类型定义
└── app/globals.css        # Global styles and theme tokens / 全局样式与主题令牌
```

## Design System / 设计系统

### Theme Tokens / 主题令牌
| Token | Light | Dark | Description | 说明 |
| --- | --- | --- | --- | --- |
| --background | #f6f7f8 | #101922 | Page canvas | 页面背景 |
| --module-background | #e9ecf1 | #0b121c | Section background | 区块背景 |
| --surface | #ffffff | #ffffff | Card surface | 卡片表面 |
| --text-primary | #1B1C26 | #f7f9fc | Primary text | 主文字 |
| --text-secondary | #4b5563 | #9aa6bf | Secondary text | 次文字 |
| --surface-border | #d8dee6 | rgba(216,222,230,0.35) | Card border | 卡片描边 |

### Breakpoints / 响应式断点
- Mobile `< 640px` / 移动端 `< 640px`
- Tablet `≥ 640px` / 平板端 `≥ 640px`
- Desktop `≥ 768px` / 桌面端 `≥ 768px`

### Component Baseline / 组件基线
- Border radius: base 0.25rem / lg 0.5rem / xl 0.75rem / full 9999px  
  圆角：基础 0.25rem / lg 0.5rem / xl 0.75rem / full 9999px
- Spacing: 8px modular scale  
  间距：8px 模块化网格
- Container width: 832px max  
  容器最大宽度：832px

## Content Management / 内容管理

### MDX Content / 文章内容
MDX files live under `content/docs/`：
```markdown
---
title: "Article title"
description: "Article description"
---
# Markdown body
```
MDX 文件位于 `content/docs/`，通过 Frontmatter 定义标题与描述。

### Data Sources / 数据来源
`src/lib/data.ts` stores all showcased data (projects, paid exclusives, social channels, contact info, etc.).  
`src/lib/data.ts` 维护站点数据，包括项目、专栏、社交渠道与联系方式。

### Fumadocs Hub / 文档子站
- Served at `/articles`
- Uses `DocsLayout`
- `themeSwitch` is disabled so the global top-right toggle remains the single source of truth
- Inherits the global CSS variables for consistent dark-mode visuals
- 位于 `/articles`，禁用 Fumadocs 自带主题开关，仅使用全局右上角切换按钮
- 继承全局 CSS 变量，确保深色模式下的区块与卡片呈现一致

## Theme System / 主题系统

### User Experience / 使用体验
- Follows system preference by default; no hydration flash  
  默认跟随系统偏好，避免水合闪烁
- Persists choice in `localStorage`  
  将选择持久化到 `localStorage`
- Twin-icon switch (sun/moon) fixed at top-right  
  右上角使用太阳/月亮双图标开关
- `ThemeProvider` writes `data-theme` to `<body>` and toggles the `dark` class on `<html>`  
  `ThemeProvider` 在 `<body>` 上写入 `data-theme`，并在 `<html>` 上切换 `dark` 类

### Customization / 自定义
Main tokens are defined in `src/app/globals.css`：
```css
:root {
  --background-light: #f6f7f8;
  --background-dark: #101922;
  --module-background-light: #e9ecf1;
  --module-background-dark: #0b121c;
  --surface: #ffffff;
  --surface-border-light: #d8dee6;
  --surface-border-dark: rgba(216, 222, 230, 0.35);
  --text-primary-light: #1B1C26;
  --text-primary-dark: #f7f9fc;
  --text-secondary-light: #4b5563;
  --text-secondary-dark: #9aa6bf;
}
```
自定义品牌配色时，可调节上述变量。

## Deployment / 部署

### Vercel (recommended) / 推荐使用 Vercel
1. Push the repo to GitHub / 将代码推送到 GitHub
2. Import the project in Vercel / 在 Vercel 中导入项目
3. Trigger automatic builds and previews / 自动部署并生成预览环境

### Other platforms / 其他平台
Compatible with Netlify, Railway, DigitalOcean, AWS, or any provider that supports Next.js 15.  
兼容 Netlify、Railway、DigitalOcean、AWS 等支持 Next.js 15 的平台。

## License / 许可证
MIT License (see LICENSE for details).  
MIT 许可证（详情参见 LICENSE 文件）。

## Contributing / 贡献
Issues and pull requests are welcome.  
欢迎提交 Issue 与 Pull Request。

## Contact / 联系方式
- Email: your-email@example.com
- WeChat: your-wechat-id
- GitHub: https://github.com/yourusername

---

Crafted with Next.js, TypeScript, and Tailwind CSS.  
使用 Next.js、TypeScript 与 Tailwind CSS 打造。
