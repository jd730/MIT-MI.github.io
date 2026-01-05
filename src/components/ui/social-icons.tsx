import * as React from 'react'
import { Link } from '@/components/ui/link'
import { buttonVariants } from '@/components/ui/button'
import type { SocialLink } from '@/types'
import {
  Globe,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Rss,
  BookOpen,
  MessageCircleQuestion,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ICON_COMPONENTS: Record<string, React.ElementType> = {
  Website: Globe,
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
  RSS: Rss,
  Scholar: BookOpen,
}

interface SocialIconsProps {
  links: SocialLink[]
  className?: string
}

export function SocialIcons({ links, className }: SocialIconsProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)} role="list">
      {links.map(({ href, label }) => {
        const IconComponent = ICON_COMPONENTS[label] || MessageCircleQuestion
        return (
          <li key={href}>
            <Link
              href={href}
              aria-label={label}
              title={label}
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
              external
            >
              <IconComponent className="size-4" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

