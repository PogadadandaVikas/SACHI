import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import SectionHeader from '../components/SectionHeader'
import speakers from '../data/speakers'
import eventsByYear from '../data/events'

const heroImage =
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80'
const trophyImage =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'

function Home() {
  const topSpeakers = speakers.slice(0, 4)
  const featuredEvents = eventsByYear[0].events.slice(0, 4)

  return (
    <div className="bg-mist">
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={heroImage}
          alt="Woman speaker addressing an audience"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-copper/80">SACHI</p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Empowering Women to Lead and Thrive
            </h1>
            <p className="mt-4 text-base text-mist/90 md:text-lg">
              Inspiring and supporting women leaders across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/nominate">Join Us Now</Button>
              <Button href="/speakers" variant="outline">
                Meet Speakers
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          title="Welcome to SACHI - Strengthening and Celebrating Her Initiative"
          subtitle="A Pan-India platform empowering entrepreneurs, leaders, and professionals through curated events, recognition, and awards."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-ink">Who We Are</h3>
            <p className="mt-3 text-sm text-ink/70">
              We are a women-first platform dedicated to building ecosystems of opportunity, visibility,
              and growth for women leaders across India.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>Empowering entrepreneurs, leaders, and professionals.</li>
              <li>Creating opportunities through events and recognition.</li>
              <li>Celebrating exceptional achievements nationwide.</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-ink">Our Impact</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                { value: '500+', label: 'Events Organized' },
                { value: '50,000+', label: 'Women Engaged' },
                { value: '200+', label: 'Leaders Recognized' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-mist/80 p-4 text-center">
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

      <section className="bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="Our Vision and Mission"
            subtitle="Focused on equal opportunity, leadership growth, and lasting impact."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-ink">Vision</h3>
              <p className="mt-3 text-sm text-ink/70">
                We envision an India where women have equal opportunities, accelerated leadership
                growth, and the confidence to inspire the next generation.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-ink">Mission</h3>
              <p className="mt-3 text-sm text-ink/70">
                We celebrate women's achievements, encourage innovation, and build strong networks
                that uplift communities and industries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          title="Today's Speakers"
          subtitle="Meet the trailblazing women leading change across India."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topSpeakers.map((speaker) => (
            <Card key={speaker.id} className="overflow-hidden">
              <img src={speaker.image} alt={speaker.name} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-ink">{speaker.name}</h4>
                <p className="text-sm text-ink/60">{speaker.role}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/speakers">View All Speakers</Button>
        </div>
      </section>

      <section className="bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="Past Events"
            subtitle="Explore milestones and impactful initiatives from recent years."
          />
          <Carousel
            items={featuredEvents}
            ariaLabel="Past events"
            renderItem={(event) => (
              <Link to="/past-events" className="block">
                <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
                  <img src={event.images[0]} alt={event.title} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-ink">{event.title}</h4>
                    <p className="mt-1 text-xs text-ink/60">{event.date}</p>
                  </div>
                </Card>
              </Link>
            )}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-copper/80">Nominate</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
              Know an inspiring woman leader?
            </h2>
            <p className="mt-4 text-sm text-ink/70">
              Nominate her for the SACHI Awards and help us celebrate leadership, innovation, and
              impact across India.
            </p>
            <div className="mt-6">
              <Button href="/nominate">Nominate Now</Button>
            </div>
          </div>
          <Card className="overflow-hidden">
            <img src={trophyImage} alt="SACHI Award trophy" className="h-full w-full object-cover" />
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home
