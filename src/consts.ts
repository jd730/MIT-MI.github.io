import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  name: 'Multisensory Intelligence',
  title: 'Multisensory Intelligence',
  description:
    'The Multisensory Intelligence research group studies the foundations of multisensory artificial intelligence to create human-AI symbiosis across scales and sensory mediums. ',
  href: 'https://mit-mi.github.io/',
  author: 'Multisensory Intelligence',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/people',
    label: 'people',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/MIT-MI/',
    label: 'GitHub',
  },
  // {
  //   href: 'https://twitter.com/enscry',
  //   label: 'Twitter',
  // },
  {
    href: 'mailto:ppliang@mit.edu',
    label: 'Email',
  },
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
