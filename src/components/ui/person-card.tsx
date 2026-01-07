import * as React from 'react'
import { Link } from '@/components/ui/link'
import AvatarComponent from '@/components/ui/avatar'
import { SocialIcons } from '@/components/ui/social-icons'
import { cn, getAvatarSrc } from '@/lib/utils'
import type { SocialLink } from '@/types'

interface PersonData {
  name: string
  avatar?: string | { src: string }
  title?: string
  email?: string
  website?: string
  github?: string
  linkedin?: string
  scholar?: string
  isPastMember?: boolean
}

interface PersonCardProps {
  person: {
    id: string
    data: PersonData
  }
  isPersonPage?: boolean
  className?: string
}

export function PersonCard({
  person,
  isPersonPage = false,
  className,
}: PersonCardProps) {
  const {
    name,
    avatar,
    title,
    email,
    website,
    github,
    linkedin,
    scholar,
    isPastMember,
  } = person.data

  const socialLinks: SocialLink[] = [
    website && { href: website, label: 'Website' },
    github && { href: github, label: 'GitHub' },
    linkedin && { href: linkedin, label: 'LinkedIn' },
    scholar && { href: scholar, label: 'Scholar' },
    email && { href: `mailto:${email}`, label: 'Email' },
  ].filter(Boolean) as SocialLink[]

  const handleSocialClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Link
      href={`/people/${person.id}`}
      className={cn('block', isPersonPage && 'pointer-events-none', className)}
    >
      <div className="bg-background overflow-hidden rounded-xl border p-4 transition-shadow duration-300 ease-in-out hover:cursor-pointer hover:ring-2">
        <div className="flex flex-wrap gap-4">
          <AvatarComponent
            src={getAvatarSrc(avatar) || '/static/avatar-fallback.png'}
            alt={`Avatar of ${name}`}
            fallback={name[0]}
            className={cn(
              'size-32 rounded-md [&>[data-slot="avatar-fallback"]]:rounded-md',
              !isPersonPage &&
                'hover:ring-primary transition-shadow duration-300 hover:cursor-pointer hover:ring-2',
            )}
          />

          <div className="flex grow flex-col justify-between gap-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-x-2">
                <h3 className="text-lg font-medium">{name}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {isPastMember ? `${title} (Past Member)` : title}
              </p>
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div onClick={handleSocialClick}>
              <SocialIcons links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
