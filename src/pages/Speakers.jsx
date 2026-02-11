import { useEffect, useState } from 'react'
import { Linkedin } from 'lucide-react'
import Card from '../components/Card'
import FilterTabs from '../components/FilterTabs'
import Modal from '../components/Modal'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Skeleton from '../components/Skeleton'
import speakers from '../data/speakers'

const heroImage =
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80'

const filters = [
  { label: 'All', value: 'All' },
  { label: 'Entrepreneur', value: 'Entrepreneur' },
  { label: 'Corporate', value: 'Corporate' },
  { label: 'Social Leader', value: 'Social Leader' },
]

function Speakers() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(timer)
  }, [])

  const filteredSpeakers =
    activeFilter === 'All'
      ? speakers
      : speakers.filter((speaker) => speaker.category === activeFilter)

  return (
    <div>
      <PageHeader
        title="Today's Inspiring Women Leaders"
        subtitle="Meet the trailblazing women making a difference and inspiring others."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader title="Top Speakers" subtitle="Discover the voices leading the movement." />
        <FilterTabs options={filters} active={activeFilter} onChange={setActiveFilter} />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-72" />
              ))
            : filteredSpeakers.map((speaker) => (
                <Card
                  key={speaker.id}
                  className="group cursor-pointer overflow-hidden transition hover:-translate-y-1 hover:shadow-soft"
                  onClick={() => setSelected(speaker)}
                >
                  <div className="relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-48 w-full object-cover"
                    />
                    {speaker.linkedin ? (
                      <a
                        href={speaker.linkedin}
                        onClick={(event) => event.stopPropagation()}
                        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-copper shadow-soft transition hover:bg-copper hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                    ) : null}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-ink">{speaker.name}</h3>
                    <p className="text-sm text-ink/60">
                      {speaker.role}, {speaker.org}
                    </p>
                    <p className="mt-3 text-sm text-ink/70">{speaker.bio}</p>
                    <button
                      type="button"
                      className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-copper"
                    >
                      Learn More
                    </button>
                  </div>
                </Card>
              ))}
        </div>
      </section>

      <Modal open={Boolean(selected)} title={selected?.name} onClose={() => setSelected(null)}>
        {selected ? (
          <div className="space-y-4">
            <p className="text-sm text-ink/70">
              <span className="font-semibold text-ink">{selected.role}</span> - {selected.org}
            </p>
            <p>{selected.story}</p>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">Key Achievements</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {selected.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-mist/70 p-4">
              <p className="text-sm font-semibold text-ink">Message to Young Women</p>
              <p className="mt-2 text-sm text-ink/70">{selected.message}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  )
}

export default Speakers
