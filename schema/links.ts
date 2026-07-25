import type { SocialLink } from './profile';

export interface LinksPage {
  name: string;
  avatar: string;
  tagline: string;
  items: SocialLink[];
}
