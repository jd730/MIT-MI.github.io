import * as React from 'react'
import { PersonCard } from '@/components/ui/person-card'
import { cn, shuffleArray } from '@/lib/utils'

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

interface Person {
  id: string
  data: PersonData
}

interface PeopleListProps {
  people: Person[]
  shuffle?: boolean
  className?: string
}

export function PeopleList({
  people: _people,
  shuffle = false,
  className,
}: PeopleListProps) {
  const people = React.useMemo(() => {
    if (shuffle) {
      return shuffleArray(_people)
    }
    return _people
  }, [_people, shuffle])

  if (people.length === 0) {
    return (
      <p className="text-muted-foreground text-center">No people found.</p>
    )
  }

  return (
    <ul className={cn('flex flex-col gap-4', className)}>
      {people.map((person) => (
        <li key={person.id}>
          <PersonCard person={person} />
        </li>
      ))}
    </ul>
  )
}

