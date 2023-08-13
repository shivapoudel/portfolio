export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@iamshivapoudel',
  site: 'shivapoudel.com',
  calendly: 'https://calendly.com/shivapoudel',
  links: {
    github: 'https://github.com/iamshivapoudel',
    linkedin: 'https://linkedin.com/in/iamshivapoudel',
    twitter: 'https://twitter.com/iamshivapoudel',
    email: 'mailto:contact@shivapoudel.com',
    buymeacoffee: 'https://www.buymeacoffee.com/shivapoudel',
  },
};
