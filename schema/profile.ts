export interface SocialLink {
  type: string;
  label: string;
  sublabel: string;
  url: string;
}

export interface Profile {
  name: string;
  avatar: string;
  tagline: string;
  affiliations: string[];
  socials: SocialLink[];
}
