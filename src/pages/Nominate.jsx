import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import { FileInput, FormInput, SelectInput, TextArea } from '../components/FormInput'

const heroImage =
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80'

const trophyImage =
  'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=800&q=80'

const fieldOptions = [
  'Technology',
  'Healthcare',
  'Education',
  'Social Impact',
  'Business Leadership',
  'Finance',
  'Public Service',
]

const steps = [
  {
    title: 'Review',
    description: 'Applications are reviewed by our selection committee.',
  },
  {
    title: 'Shortlisting',
    description: 'Top nominees are shortlisted for further evaluation.',
  },
  {
    title: 'Final Approval',
    description: 'Final approvals are completed by the advisory panel.',
  },
  {
    title: 'Award Announcement',
    description: 'Winners are celebrated at the annual awards event.',
  },
]

function Nominate() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    nominee: '',
    field: '',
    city: '',
    achievement: '',
    photo: null,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null
    setForm((prev) => ({ ...prev, photo: file }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Your name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!form.nominee.trim()) nextErrors.nominee = 'Nominee name is required.'
    if (!form.field.trim()) nextErrors.field = 'Select a field of work.'
    if (!form.city.trim()) nextErrors.city = 'City is required.'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <div>
      <PageHeader
        title="Nominate an Inspiring Woman Leader for SACHI Awards"
        subtitle="Know a woman making a difference? Complete the nomination form to recognize her achievements."
        image={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6">
            <SectionHeader title="Nomination Form" subtitle="Submit the details below." align="left" />
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <FormInput
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <div className="grid gap-4 md:grid-cols-2">
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <FormInput
                  label="Nominee Name"
                  name="nominee"
                  value={form.nominee}
                  onChange={handleChange}
                  error={errors.nominee}
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <SelectInput
                  label="Field of Work"
                  name="field"
                  value={form.field}
                  onChange={handleChange}
                  error={errors.field}
                  required
                  options={fieldOptions}
                />
                <FormInput
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                  required
                />
              </div>
              <TextArea
                label="Short Achievement Description"
                name="achievement"
                value={form.achievement}
                onChange={handleChange}
                placeholder="Share a brief overview of her accomplishments."
              />
              <FileInput label="Upload Photo (Optional)" name="photo" onChange={handleFileChange} />
              <div className="pt-2">
                <Button type="submit" className="w-full" size="lg">
                  Submit Nomination
                </Button>
              </div>
              {submitted ? (
                <div className="rounded-xl bg-mist/70 p-4 text-sm text-ink/70">
                  Thank you for your nomination. Our team will review the submission and get back to
                  you with updates.
                </div>
              ) : null}
            </form>
          </Card>
          <Card className="overflow-hidden">
            <img src={trophyImage} alt="SACHI Awards trophy" className="h-full w-full object-cover" />
          </Card>
        </div>
      </section>

      <section className="bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader title="Nomination and Selection Process" subtitle="Transparent steps that honor every nominee." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={step.title} className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nominate
