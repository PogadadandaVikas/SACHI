import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Modal from '../components/Modal'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Skeleton from '../components/Skeleton'
import heroImage from '../assets/events/event-hero.svg'
import eventsByYear from '../data/events'

function PastEvents() {
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)
  const totalEvents = eventsByYear.reduce((sum, yearBlock) => sum + yearBlock.events.length, 0)
  const totalCities = new Set(
    eventsByYear.flatMap((yearBlock) => yearBlock.events.map((event) => event.location))
  ).size

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-mist">
      <PageHeader
        title="Events Journey and Achievements"
        subtitle="Explore past events and milestones showcasing impactful initiatives."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-copper/80">
              Women Empowerment Events
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Celebrating leadership, innovation, and social impact across India.
            </h2>
            <p className="mt-4 text-sm text-ink/70 md:text-base">
              Our events spotlight women who lead with courage, build inclusive communities, and
              redefine what is possible. Each gathering is designed to connect, mentor, and elevate
              the next generation of leaders.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Leadership', 'Innovation', 'Social Impact', 'Mentorship'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-copper/40 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-copper"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Impact Snapshot
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Events Hosted', value: `${totalEvents}+` },
                { label: 'Cities Reached', value: `${totalCities}+` },
                { label: 'Years of Impact', value: `${eventsByYear.length}+` },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-mist/80 p-4 text-center">
                  <p className="text-2xl font-semibold text-copper">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="Past Events Highlights"
            subtitle="Stories, speakers, and milestones that advance women empowerment."
            align="left"
          />
          {eventsByYear.map((yearBlock) => (
            <div key={yearBlock.year} className="mb-12 last:mb-0">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                    Year {yearBlock.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">
                    Empowerment Milestones
                  </h3>
                </div>
                <span className="rounded-full border border-copper/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                  {yearBlock.events.length} Events
                </span>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {loading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton key={index} className="h-80" />
                    ))
                  : yearBlock.events.map((event) => (
                      <Card
                        key={event.id}
                        className="group overflow-hidden border border-stone/60 bg-white/95 transition hover:-translate-y-1 hover:shadow-soft"
                      >
                        <div className="relative">
                          <img
                            src={event.images[0]}
                            alt={event.title}
                            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <span className="absolute left-4 top-4 rounded-full bg-copper/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                            Empowerment
                          </span>
                        </div>
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold text-ink">{event.title}</h3>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
                              {event.location}
                            </span>
                          </div>
                          <p className="mt-2 text-xs text-ink/60">{event.date}</p>
                          <p className="mt-3 text-sm text-ink/70">{event.summary}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                              Impact Track
                            </span>
                            <Button size="sm" variant="outline" onClick={() => setSelected(event)}>
                              View Details
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
              </div>
            </div>
          ))}
        </div>
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
