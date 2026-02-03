
export type CategoryType = 'Social Media & Content' | 'Language & Writing' | 'Study & Student';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: CategoryType;
  icon: string;
  placeholder: string;
  systemPrompt: string;
}

export interface NavItem {
  label: string;
  path: string;
}
