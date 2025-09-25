import {
  ArticleData,
  ContactData,
  ExclusiveData,
  PaginationData,
  ProfileData,
  ProjectData,
  SocialMediaData
} from './types';

export const profileData: ProfileData = {
  name: "罗里叭说",
  title: "18 年智能化规划师 | 连续创业者 | AI 布道师 \n经济学爱好者 | AI 产品经理",
  location: "中国",
  avatar: "/2025-09-24_180029_221.png"
};
0

export const projectsData: ProjectData[] = [
  {
    id: "project-1",
    title: "电商平台重构",
    description: "使用 React 和 Node.js 重构大型电商平台，提升性能和用户体验",
    tags: ["React", "Node.js", "MongoDB", "性能优化"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAsvWtaxlCjJ6UqAcsqAP0WALX-QtASHQKLQkaxoabHqJlBT4XUTWg6ZOewwwexKkWdjKRnSZTxHiON7thzQaJgOrTw30f1tt93ZquKQttn1KBGXYLIgu6muE1lVWbvB6nVlYr69D9UqO_7Z4q5xOO7Ucfk-6bzbbOdLjDSKAShvqzAfXBrF9s8ls184aD100z_ZY_aACp-n2q77xqmTPSRkKr3HNeCksipkIxD6I_CmKUjPtbTrxf9CwHYiZ6cE9OWD7bagtIDbE"
  },
  {
    id: "project-2",
    title: "AI 聊天应用",
    description: "基于 ChatGPT API 开发的智能聊天应用，支持多轮对话和上下文理解",
    tags: ["OpenAI", "Next.js", "WebSocket", "人工智能"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuALTc3KdymdBItI6nRee1HWtGw7khwEwC7YYcDR1Ti7zvExhIbAI_L9hySMaVUj_E1rLAGp0PR6eGawhZR54hml7q7lZ_KCF05CPLSXLqrDO9eyV28xBXIZ3BcpF5iPrP8gOnIA8h2D8HrscH9ie9-JwpyKLfJ2VIVkKmuYYJKmNVQIJjI1T--_Qm6i9_KMDFwdrhWEh93YZ5CPWE3zLpJweOr9vr9jQbD43liCHUnUDYVoonOlWi8Lexh-ceoWQmkdKDAGkIgORSQ"
  },
  {
    id: "project-3",
    title: "数据可视化平台",
    description: "企业级数据可视化平台，支持实时数据监控和交互式图表",
    tags: ["D3.js", "TypeScript", "数据分析", "可视化"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuByHn2NCPVVpzPv9kxjKnHj2qGujFIrW_jd1x40sSczzhOo2Ouik52NJEgkKyIxvi3Dueu5I_rPvP1FF4RyAaGvr1c7ZG9RlvFATuEv0XpqCsqwTPJy4AhaMkuOr7iJEKM9f_UaxuTnXfDClo8gkJUoiaRILeua85GDVrwDVOW3ino1JvJgQ1IwV7odx2MC2DKonUVNdiL8vhkRCAOKWwTKhCqjmJ7yEorFLNWFo_uV-tdnq6JBwiA8lZ2h6Re7nY90yc62ryvKU08"
  },
  {
    id: "project-4",
    title: "移动端社交应用",
    description: "跨平台移动社交应用，支持实时消息、动态分享和位置服务",
    tags: ["React Native", "Firebase", "推送通知", "社交网络"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu0p94iQK0u8FDtBNH-d4XacmU-Fyi2FgCrSs0VhrT0xdEr7EI5VIalw_ZHA9huvq5BJ0FzrwDEfx_RZkeVwXuku5tfDN4B-M-IO4zi4WoyIxh-jI66gpYYtZ818JaSXDAXmEtHhLrGkzU0oSBr5zx7LDCNl_benWD2M_JwjN30BWjAYCPlCSiON147INzVb229cv6FaMAXn9sRcHCpa_61y3ti-5TFtG8NcUoOxj-UAqKr-fpBOcs9VedgEyA_egQG2cqSRdLOhc"
  }
];

export const exclusivesData: ExclusiveData[] = [
  {
    id: "exclusive-1",
    badge: "专享访问",
    title: "解锁高级内容",
    description: "成为高级会员，获取独家文章、教程和专业资源，提升技术水平。",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW_KV0JoJe4fWH5lqdGU_aOFxyOEojKMiy3IORbEbBXaE-cTvo10-kwH7PS5O3Hxw3qX5FqHH7xew1qbtR_VQGXM48FW_V0mMIkGsgBfkyqTCINFu28h9_J71ZBoqNs30p6CZFN2Dxwpx-lki7wUsVIvD1XWxDnhFACwb4fJr5piAAx_KMeFK4hepIgfmfZqZo41OedSXxX-zBIvfC-ZQN1Lzbx5DFbqGAfaMQO_8C_8NHrAxR3tXywvxcAutuPgi5zN3Yq2dvPYA",
    cta: {
      text: "立即加入",
      url: "#"
    }
  },
  {
    id: "exclusive-2",
    badge: "专享访问",
    title: "高级技术深度解析",
    description: "深入探索前沿技术话题，会员专享精心策划的专业内容和技术洞察。",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAsvWtaxlCjJ6UqAcsqAP0WALX-QtASHQKLQkaxoabHqJlBT4XUTWg6ZOewwwexKkWdjKRnSZTxHiON7thzQaJgOrTw30f1tt93ZquKQttn1KBGXYLIgu6muE1lVWbvB6nVlYr69D9UqO_7Z4q5xOO7Ucfk-6bzbbOdLjDSKAShvqzAfXBrF9s8ls184aD100z_ZY_aACp-n2q77xqmTPSRkKr3HNeCksipkIxD6I_CmKUjPtbTrxf9CwHYiZ6cE9OWD7bagtIDbE",
    cta: {
      text: "合作咨询",
      url: "#"
    }
  }
];

export const articlesData: ArticleData[] = [
  {
    id: "article-1",
    category: "技术洞察",
    title: "人工智能在软件开发中的未来",
    description: "探索人工智能如何重塑软件工程领域，以及对行业的潜在影响和未来发展机遇。",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_2EsbOfc_ZuUBSHzAkWpIRKhEMBDzGO9WtQtxi_2ZLc9glIPFf9XeCSYaIosJ14tVeXDFm62jPZpHJeL2chZi0TXyt_eBNGCAmBPOwAYJkHknwGLDu9BXqaSVlYYdTq-7teOfWJMOP4nW6xztGUKlyT86ylaIYw0bVbv4bAs3AWYvdxPSduvRc_gVU6yj_xclODrjucPrNfYGy8maG5ehigXRYDy91cYEDCr7ImpY15wBB37cwEsZ0_esnXsPhpT5w5VoQnbePFQ",
    publishedAt: "2024-01-15"
  },
  {
    id: "article-2",
    category: "职业建议",
    title: "打造强力作品集：初级开发者指南",
    description: "学习创建引人注目的作品集的关键策略，有效展示你的技能和项目经验。",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4aJmakpVLco89SJdPvT9LAlkmzxAVjSvXj9Z02MPGaEOSM4PoFZ_vm6v61AusWbxNchf9OunL-QltADaMB4xpI6gxyuyd7Wzctvo9uTv5pMYebBAlJK3TkU852hGogOgRASLKGfhc3yZz-VICFlpjUyKcXGeG0OcbzDMy_6FqWZp4noFiNtG8Rp5RIhCHmuktvRO21GLs57uwx1_W1AA-BDQx5h5FhZHpCSxfQOfOEyzffIiGVuv3JgYAPaqOWdpWhqWFqaS7bO8",
    publishedAt: "2024-01-10"
  },
  {
    id: "article-3",
    category: "工具评测",
    title: "Next.js 15 vs React 19：前端框架选择指南",
    description: "深入比较 Next.js 15 和 React 19 的特性差异，帮助开发者选择适合项目的技术栈。",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuByHn2NCPVVpzPv9kxjKnHj2qGujFIrW_jd1x40sSczzhOo2Ouik52NJEgkKyIxvi3Dueu5I_rPvP1FF4RyAaGvr1c7ZG9RlvFATuEv0XpqCsqwTPJy4AhaMkuOr7iJEKM9f_UaxuTnXfDClo8gkJUoiaRILeua85GDVrwDVOW3ino1JvJgQ1IwV7odx2MC2DKonUVNdiL8vhkRCAOKWwTKhCqjmJ7yEorFLNWFo_uV-tdnq6JBwiA8lZ2h6Re7nY90yc62ryvKU08",
    publishedAt: "2024-01-05"
  }
];

export const paginationData: PaginationData = {
  currentPage: 1,
  totalPages: 3,
  hasPrevious: false,
  hasNext: true
};

export const socialMediaData: SocialMediaData[] = [
  {
    id: "social-1",
    platformName: "X",
    accountName: "@Loqz99156",
    iconUrl: "/918b20dc0aa716e09fd0a58f9dd8e720.jpg"
  },
  {
    id: "social-2",
    platformName: "微信公众号",
    accountName: "罗里叭说",
    iconUrl: "/12131313.png"
  },
  {
    id: "social-3",
    platformName: "视频号",
    accountName: "罗里叭说 AI",
    iconUrl: "/a697a07488e44c8c8c06bebbaeb5ef46.png"
  }
];

export const contactData: ContactData = {
  email: {
    title: "发送邮件",
    description: "有问题或想要合作？请给我发送邮件。",
    address: "loqz99156@gmail.com"
  },
  meeting: {
    icon: "event",
    title: "个人微信",
    description: "有关付费、合作可预约。",
    cta: {
      text: "点击复制",
      url: "#"
    }
  }
};