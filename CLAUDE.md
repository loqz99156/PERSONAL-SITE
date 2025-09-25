# Tech Portfolio - 项目架构文档

## 概述
基于“罗里叭说”作品集设计的现代化个人网站，采用组件化与响应式架构，集中展示 AI 布道师、连续创业者与智能化规划师的个人品牌、项目成果、技术文章以及联络方式。站点已完成中文本地化，并针对移动端浏览优化了阅读宽度与交互体验。

## 设计原则

### 视觉风格
- **配色方案**：支持深浅色主题切换，主色调为 `#1173d4`
- **字体系统**：Inter 字体 400/500/700/900 字重，配合系统中文无衬线后备字体
- **圆角体系**：默认 `0.25rem`，`lg` 使用 `0.5rem`，`xl` 使用 `0.75rem`，全圆角 `9999px`
- **间距体系**：基于 8px 的间距刻度，版块常用 `py-12` / `md:py-24` / `lg:py-32`
- **容器宽度**：核心内容最大宽度 832px，移动端保持自然边距

### 响应式断点
- **移动端**：`< 640px`，默认布局与字体
- **平板端**：`≥ 640px` 且 `< 768px` (`sm:`)，启用双列布局与更大边距
- **桌面端**：`≥ 768px` (含 `md:`、`lg:`)，呈现完整导航、网格和装饰

### 交互体验
- 导航随滚动固定，确保关键入口可见
- 所有互动元素提供 hover/active 态与触摸友好区域
- 深浅色主题切换在首次渲染前同步系统偏好，避免闪烁

## 组件结构

### Header 组件
```tsx
// 功能：展示 Logo、主导航与主题切换器
// 布局：sticky 定位，桌面端水平导航，移动端抽屉菜单
```
**实现要点**
- 使用 `sticky top-0 z-10` 固定顶部
- 桌面端 `hidden md:flex` 显示完整菜单，移动端使用菜单按钮
- 应用 `backdrop-blur-sm` 与半透明背景提升可读性
- 深色主题背景：`dark:bg-background-dark/80`

### Hero 组件
```tsx
// 功能：介绍个人身份，包含头像、姓名、职位与定位信息
// 布局：在桌面端采用两列网格，移动端垂直排列
```
**数据结构**
```json
{
  "name": "罗里叭说",
  "title": "18 年智能化规划师 | 连续创业者 | AI 布道师\n经济学爱好者 | AI 产品经理",
  "location": "中国",
  "avatar": "/2025-09-24_180029_221.png"
}
```
**实现要点**
- 桌面端使用 `md:grid-cols-2` 分列
- `rounded-full` 生成圆形头像，`object-cover` 保证裁剪
- 文本 `text-center md:text-left`，配合 `py-12 md:py-24 lg:py-32` 控制间距

### FeaturedProjects 组件
```tsx
// 功能：以卡片网格展示重点项目
// 布局：移动单列、平板双列、桌面三列，伴随悬停动画
```
**数据结构**
```jsonc
{
  "projects": [
    {
      "id": "project-1",
      "imageUrl": "https://example.com/project-1.png",
      "title": "项目标题",
      "description": "简要介绍项目亮点与价值",
      "tags": ["React", "TypeScript", "Tailwind CSS"]
    }
  ]
}
```
**实现要点**
- 使用 `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` 构建响应式网格
- 固定卡片封面高度为 `h-60`
- `overflow-hidden rounded-lg shadow-lg` 定义卡片外观
- 通过 `group` 容器与 `group-hover:translate-y-1` 等效果强化交互

### PaidExclusives 组件
```tsx
// 功能：展示付费专享内容与产品
// 布局：双列卡片，对称呈现权益说明
```
**数据结构**
```jsonc
{
  "exclusives": [
    {
      "id": "exclusive-1",
      "badge": "专享访问",
      "title": "解锁优质内容",
      "description": "获取深度文章、视频课程与实时问答服务。",
      "imageUrl": "https://example.com/exclusive.png",
      "cta": {
        "text": "立即加入",
        "url": "#"
      }
    }
  ]
}
```
**实现要点**
- 卡片使用 `flex flex-col` 垂直布局，图片高度 `h-48`
- `hover:scale-105 transition-transform` 带来悬停反馈
- CTA 区域与徽章颜色遵循主色系

### LatestArticles 组件
```tsx
// 功能：展示最新文章并支持分页浏览
// 布局：文章卡片网格 + 底部分页控制
```
**数据结构**
```jsonc
{
  "articles": [
    {
      "id": "article-1",
      "category": "技术洞察",
      "title": "AI 在软件开发中的未来趋势",
      "description": "探索人工智能如何改变软件交付、测试与迭代节奏。",
      "imageUrl": "https://example.com/article.png",
      "publishedAt": "2024-01-15"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "itemsPerPage": 2
  }
}
```
**实现要点**
- 网格使用 `gap-8 sm:grid-cols-2` 控制间距与列数
- 通过 `sm:order-last` 实现图文交错布局
- 保持卡片最小高度 `min-h-[280px]` 保证一致性

### ContactSection 组件
```tsx
// 功能：提供邮箱与个人微信等联系渠道
// 布局：两列卡片，图标与文案结合
```
**数据结构**
```jsonc
{
  "contact": {
    "email": {
      "icon": "mail",
      "title": "发送邮件",
      "description": "欢迎就合作、演讲或咨询事宜与我沟通。",
      "address": "hello@example.com"
    },
    "meeting": {
      "icon": "wechat",
      "title": "个人微信",
      "description": "有关付费、合作可预约",
      "cta": {
        "text": "点击复制",
        "url": "#"
      }
    }
  }
}
```
**实现要点**
- 使用 `md:grid-cols-2` 建立两列布局
- 图标容器 `h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center`
- 深色主题下调整文字与背景对比度

### Pagination 组件
```tsx
// 功能：分页导航，包含页码与前后跳转按钮
// 布局：水平排列，移动端自动换行
```
**数据结构**
```json
{
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "hasPrevious": false,
    "hasNext": true
  }
}
```
**实现要点**
- 使用 `flex items-center gap-2` 布局
- 按钮尺寸 `h-8 w-8 rounded-full`，当前页 `bg-primary text-white`
- 通过 `aria-label` 与 `aria-current` 提升可访问性

## 技术实现

### Tailwind CSS 配置
```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1173d4",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "text-primary": "#1B1C26",
        "text-secondary": "#4b5563"
      },
      fontFamily: {
        display: ["Inter"]
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "96": "24rem",
        "128": "32rem"
      },
      maxWidth: {
        "832": "52rem"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};

export default config;
```

### 深色主题实现
```html
<html class="dark" lang="zh-CN" suppressHydrationWarning>
  <body class="bg-background-light text-text-primary dark:bg-background-dark dark:text-gray-200">
    <!-- App -->
  </body>
</html>
```
- 初次渲染前读取系统 `prefers-color-scheme`，并以 JS 预设 `classList`，避免闪烁
- 组件内使用 `dark:` 前缀同步切换背景、文字与边框色

### 响应式设计模型
1. **移动优先**：基础样式针对 `<640px` 编写，再逐级增强
2. **渐进增强**：利用 `sm:`、`md:`、`lg:`、`xl:` 断点调整布局与排版
3. **容器适配**：使用 `container mx-auto max-w-832 px-4 md:px-6` 控制行宽
4. **网格响应**：大量使用 `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` 等组合
5. **宽度控制**：对文章与卡片设置最大宽度与最小高度，保证图片比例

## 内容数据结构
### 文档子站（Fumadocs）
- 新增 `/articles` 子页面，使用 Fumadocs UI `DocsLayout` 与 MDX 内容渲染文章正文。
- Docs 内容保存在 `content/docs/*.mdx`，构建时由 `source.config.ts` 注册并输出 `.source/index.ts` 供运行时读取。
- `src/lib/docs/source.ts` 封装文档加载器，提供 `getArticlePage/getArticleTree/generateArticleParams` 等方法。
- 在 `src/app/articles/` 下实现 Fumadocs 布局与动态路由，可静态导出并与站点主题保持一致。
- `LatestArticles` 列表与 CTA 会跳转到对应文章页面，维持站内导航一致性。
```jsonc
{
  "header": {
    "logo": {
      "text": "技术作品集",
      "icon": "/logo.svg"
    },
    "navigation": [
      { "text": "首页", "url": "#home", "active": true },
      { "text": "项目", "url": "#projects", "active": false },
      { "text": "文章", "url": "#articles", "active": false },
      { "text": "联系", "url": "#contact", "active": false }
    ]
  },
  "hero": { /* 参考 Hero 组件数据结构 */ },
  "featuredProjects": {
    "title": "Vibe coding 作品",
    "projects": []
  },
  "paidExclusives": {
    "title": "付费专栏",
    "exclusives": []
  },
  "latestArticles": {
    "title": "最新文章",
    "articles": [],
    "pagination": {}
  },
  "contact": {
    "title": "联系方式",
    "methods": {}
  }
}
```

## 开发规范

### 命名规范
- **组件文件**：PascalCase，例如 `Hero.tsx`
- **样式类名**：kebab-case，例如 `bg-background-light`
- **数据字段**：camelCase，例如 `imageUrl`

### 代码组织
```
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      FeaturedProjects.tsx
      PaidExclusives.tsx
      LatestArticles.tsx
      ContactSection.tsx
      SocialMedia.tsx
      ArticlePagination.tsx
    ui/
      Button.tsx
      Card.tsx
      ThemeProvider.tsx
      ErrorBoundary.tsx
  lib/
    types.ts
    data.ts
  styles/
    globals.css
```

### 国际化支持
- 所有界面文本使用中文描述，必要时提供英文别名
- 通过 `Intl.DateTimeFormat("zh-CN")` 处理日期
- 对第三方字体增加中文后备，避免字形缺失

### 性能优化
- `next/image` 处理图片懒加载与自适应
- 按需动态导入体积较大的组件
- Tailwind CSS 启用 JIT 与产线裁剪
- 使用 `next/font` 嵌入字体并控制字重

### 可访问性
- 使用语义化 HTML 标签和 `aria-*` 属性标记交互元素
- 确保键盘可访问性，包括跳转链接与控件聚焦状态
- 保持 WCAG 推荐的颜色对比度

## 开发工作流

### 本地开发
```bash
npm install
npm run dev
npm run build
npm run lint
```

### 内容更新流程
1. 在 `src/lib/data.ts` 更新对应数据结构
2. 运行 `npm run dev` 进行实时预览
3. PR 或主干合并前自行检查 lint 与构建
4. 推送代码并在 CI/CD 上完成部署

### 组件开发流程
1. 新建组件 `src/components/sections/ComponentName.tsx`
2. 在 `src/lib/types.ts` 定义或扩展类型
3. 在 `src/lib/data.ts` 填充示例数据
4. 在页面组合组件并验证在深浅色与移动端下的表现
5. 添加必要的单元或截图测试（若适用）

## 部署配置

### 环境要求
- Node.js 18.x 或以上
- Next.js 15.x
- React 18.x
- TypeScript 5.x
- Tailwind CSS 4.x

### 构建要求
- 支持静态生成与按需增量静态生成
- 启用 Next.js 图片优化与 CSS 代码分割
- 深色主题在服务器端预渲染，配合 hydration 防止闪烁
- 按 832px 宽度进行内容适配
- 完整中文本地化

### 部署要点
- 推荐使用 Vercel 或同类平台，自动处理 Edge 缓存
- 配置环境变量存放分析工具与第三方服务密钥
- 利用 ISR 或 On-Demand Revalidation 更新文章列表

---

*文档版本：1.0.0*  
*最后更新：2025-09-25*  
*维护者：开发团队*

