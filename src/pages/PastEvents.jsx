import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Modal from '../components/Modal'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Skeleton from '../components/Skeleton'
import eventsByYear from '../data/events'

const heroImage =
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80'

function PastEvents() {
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <PageHeader
        title="Events Journey and Achievements"
        subtitle="Explore past events and milestones showcasing impactful initiatives."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        {eventsByYear.map((yearBlock) => (
          <div key={yearBlock.year} className="mb-12 last:mb-0">
            <SectionHeader title={String(yearBlock.year)} align="left" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} className="h-80" />
                  ))
                : yearBlock.events.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <img
                        src={event.images[0]}
                        alt={event.title}
                        className="h-40 w-full object-cover"
                      />
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-ink">{event.title}</h3>
                        <p className="mt-1 text-xs text-ink/60">
                          {event.date} - {event.location}
                        </p>
                        <p className="mt-3 text-sm text-ink/70">{event.summary}</p>
                        <div className="mt-4">
                          <Button size="sm" onClick={() => setSelected(event)}>
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
            </div>
          </div>
        ))}
      </section>

      <Modal open={Boolean(selected)} title={selected?.title} onClose={() => setSelected(null)}>
        {selected ? (
          <div className="space-y-4">
            <p className="text-sm text-ink/70">
              {selected.date} - {selected.location}
            </p>
            <p>{selected.description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {selected.images.map((image, index) => (
                <img
                  key={`${selected.id}-${index}`}
                  src={image}
                  alt={`${selected.title} gallery ${index + 1}`}
                  className="h-40 w-full rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  )
}

export default PastEvents
