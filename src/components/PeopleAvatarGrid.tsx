import * as React from 'react'
import { Tooltip } from '@/components/ui/tooltip'
import AvatarComponent from '@/components/ui/avatar'
import { Link } from '@/components/ui/link'
import { cn } from '@/lib/utils'

interface Person {
  id: string
  data: {
    name: string
    avatar?: string
  }
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

interface PeopleAvatarGridProps {
  people: Person[]
  className?: string
  shuffle?: boolean
}

export function PeopleAvatarGrid({
  people: _people,
  className,
  shuffle,
}: PeopleAvatarGridProps) {
  const people = React.useMemo(() => {
    if (shuffle) {
      return shuffleArray(_people)
    }
    return _people
  }, [_people, shuffle])
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [showTopBlur, setShowTopBlur] = React.useState(false)
  const [showBottomBlur, setShowBottomBlur] = React.useState(false)

  React.useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const updateScrollIndicators = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      setShowTopBlur(scrollTop > 0)
      setShowBottomBlur(scrollTop + clientHeight < scrollHeight - 1)
    }

    // Initial check
    updateScrollIndicators()

    container.addEventListener('scroll', updateScrollIndicators)
    // Also check on resize in case content reflows
    const resizeObserver = new ResizeObserver(updateScrollIndicators)
    resizeObserver.observe(container)

    return () => {
      container.removeEventListener('scroll', updateScrollIndicators)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className={cn('relative -m-1 flex flex-col', className)}>
      {' '}
      {/* -m-1 to offset the p-1 from the scroll area, allowing ring hover to show properly */}
      {/* Top blur indicator */}
      <div
        className={cn(
          'from-muted pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b to-transparent transition-opacity duration-200',
          showTopBlur ? 'opacity-100' : 'opacity-0',
        )}
      />
      <div
        ref={scrollRef}
        className="flex flex-1 flex-wrap gap-4 overflow-auto p-1"
      >
        {people.map((person) => (
          <Tooltip key={person.id} content={person.data.name}>
            <Link href={`/people/${person.id}`} className="block">
              <AvatarComponent
                src={person.data.avatar || '/static/avatar-fallback.png'}
                alt={`Avatar of ${person.data.name}`}
                fallback={person.data.name[0]}
                className={cn(
                  'size-16 rounded-md shadow-md [&>[data-slot="avatar-fallback"]]:rounded-md',
                  'hover:ring-primary transition-shadow duration-300 hover:cursor-pointer hover:ring-2',
                )}
              />
            </Link>
          </Tooltip>
        ))}
      </div>
      {/* Bottom blur indicator */}
      <div
        className={cn(
          'from-muted pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t to-transparent transition-opacity duration-200',
          showBottomBlur ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  )
}
