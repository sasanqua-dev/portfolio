export interface TechStackItem {
  key: string;
  label: string;
}

export interface TechStackCategory {
  category: string;
  items: TechStackItem[];
}
