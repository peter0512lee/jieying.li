import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import EvercastLogo from '../images/logos/evercast.svg';
import Consultly from '../images/logos/consultly.svg';
import MISLabLogo from '../images/logos/mislab.png';
import NeuinXLogo from '../images/logos/neuinx.jpeg';
import TSMCLogo from '../images/logos/tsmc.png';
import OmniEyesLogo from '../images/logos/omnieyes.png';

export const Name = 'Jie-Ying Li';

export const About = (
  <>
    {`If you'd like to get in touch,`}{' '}
    <ExternalLink href="mailto:peter0512lee@gmail.com">send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `...`;

export const SocialMedia = [
  { name: 'Github', link: 'https://github.com/peter0512lee', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jie-ying-li', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'OmniEyes',
    title: 'AI Algorithn Engineer',
    logo: OmniEyesLogo,
    start: '2024.03',
    end: 'Present',
  },
  {
    company: 'TSMC',
    title: 'Software Engineer',
    logo: TSMCLogo,
    start: '2023.11',
    end: '2024.03',
  },
  {
    company: 'NeuinX',
    title: 'Software Engineer',
    logo: NeuinXLogo,
    start: '2023.09',
    end: '2023.11',
  },
  {
    company: 'MISLab',
    title: 'Research Assistant',
    logo: MISLabLogo,
    start: '2021.04',
    end: '2023.08',
  },
] as const;

export const Tools = {
  Workstation: [
    {
      title: '13” MacBook Pro, Intel, 16GB RAM (2020)',
      description: "",
      href: 'https://amzn.to/3XkWxhF',
    },
    {
      title: 'Keychron K8 Pro',
      description: "",
      href: 'https://keychron.com.tw/kpro/',
    },
    {
      title: 'Logitech MX 720',
      description: "",
      href: 'https://a.co/d/1WqIsr4',
    },
  ],
  Software: [
    {
      title: 'Visual Studio Code',
      description: ``,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'iTerm2',
      description: ``,
      href: 'https://iterm2.com/',
    },
    {
      title: 'Raycast',
      description: ``,
      href: 'https://www.raycast.com/',
    },
    {
      title: 'Notion',
      description: ``,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Notion Calendar',
      description: ``,
      href: 'https://www.notion.so/product/calendar',
    },
  ],
} as const;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'Consultly',
    techStack: ['Side Project', 'TypeScript', 'Next.js', 'WebRTC'],
    description: 'A platform to build and grow your online business.',
    logo: Consultly,
    link: {
      label: 'consultly.com',
      href: 'https://consultly.com',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'Evercast',
    techStack: [
      'Lead Frontend Developer',
      'From scratch',
      'TypeScript',
      'React',
      'Node.js',
      'GraphQL',
    ],
    description:
      'Creative collaboration platform that combines video conferencing and HD media streaming.',
    logo: EvercastLogo,
    link: {
      label: 'evercast.us',
      href: 'https://www.evercast.us/',
    },
  },
];

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
] as const;

export const Books = [
  {
    name: 'Shoe Dog: A Memoir by the Creator of Nike by Phil Knight',
    link: 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Steve Jobs 2005 Stanford Commencement Address',
    link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
] as const;

export const Podcasts = [
  {
    name: 'Lex Fridman Podcast',
    link: 'https://www.youtube.com/@lexfridman',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Andrew Wilkinson',
    link: 'https://twitter.com/awilkinson',
  },
] as const;

export const Blogs = [
  {
    name: 'Wait but why',
    link: 'https://waitbutwhy.com/',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
] as const;

