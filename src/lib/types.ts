// Portfolio types definition

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  avatar: string;
}

export interface ProjectData {
  id: string;
  imageUrl: string;
  title?: string;
  description?: string;
  tags?: string[];
}

export interface ExclusiveData {
  id: string;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  cta: {
    text: string;
    url: string;
  };
}

export interface ArticleData {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
}

export interface ContactMethod {
  icon?: string;
  title: string;
  description: string;
  address?: string;
  cta?: {
    text: string;
    url: string;
  };
}

export interface ContactData {
  email: ContactMethod;
  meeting: ContactMethod;
}

export interface PaginationData {
  currentPage: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface SocialMediaData {
  id: string;
  platformName: string;
  accountName: string;
  iconUrl: string;
}

