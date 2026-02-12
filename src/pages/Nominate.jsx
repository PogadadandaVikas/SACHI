import { useState } from "react";
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Crown,
  FileText,
  Gem,
  Heart,
  Medal,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import {
  FileInput,
  FormInput,
  SelectInput,
  TextArea,
} from "../components/FormInput";

const heroImage =
  "https://images.unsplash.com/photo-1764176269321-6d14f4af09c7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const fieldOptions = [
  "Technology",
  "Healthcare",
  "Education",
  "Social Impact",
  "Business Leadership",
  "Finance",
  "Public Service",
  "Arts & Culture",
  "Environment",
  "Research & Innovation",
];

const steps = [
  {
    title: "Review",
    description: "Applications are reviewed by our selection committee.",
    icon: FileText,
  },
  {
    title: "Shortlisting",
    description: "Top nominees are shortlisted for further evaluation.",
    icon: Users,
  },
  {
    title: "Final Approval",
    description: "Final approvals are completed by the advisory panel.",
    icon: Award,
  },
  {
    title: "Award Announcement",
    description: "Winners are celebrated at the annual awards event.",
    icon: Star,
  },
];

const awardGallery = [
  {
    id: "award-01",
    title: "SACHI Leadership Award",
    caption: "Celebrating women who lead with vision and purpose.",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    id: "award-02",
    title: "Women on the Stage",
    caption: "Honoring milestone moments from our awards ceremonies.",
    icon: Crown,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    id: "award-03",
    title: "Community Impact Medal",
    caption: "Recognizing leaders who transform communities.",
    icon: Medal,
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    id: "award-04",
    title: "Innovation Spotlight",
    caption: "Highlighting breakthroughs led by women innovators.",
    icon: Gem,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
];

const nominationTips = [
  {
    icon: Target,
    title: "Clear Impact",
    description: "Measurable outcomes or communities served",
  },
  {
    icon: Heart,
    title: "Leadership Story",
    description: "How she inspires and uplifts others",
  },
  {
    icon: Sparkles,
    title: "Vision",
    description: "Plans to scale or deepen the impact",
  },
];

function Nominate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    nominee: "",
    field: "",
    city: "",
    achievement: "",
    photo: null,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, photo: file }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Your name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.nominee.trim()) nextErrors.nominee = "Nominee name is required.";
    if (!form.field.trim()) nextErrors.field = "Select a field of work.";
    if (!form.city.trim()) nextErrors.city = "City is required.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-mist overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={heroImage}
          alt="Women empowerment"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        {/* FIX: Reduced vertical padding on mobile (py-16) */}
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-copper/80">
              SACHI Awards 2026
            </p>
            {/* FIX: Smaller heading on mobile (text-3xl) to prevent wrapping overflow */}
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Nominate an Inspiring <br />
              Woman Leader
            </h1>
            <p className="mt-4 text-base text-mist/90 md:text-lg">
              Do you know a woman who's making a difference? Recognize her
              exceptional achievements and help us celebrate leadership that
              transforms communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="#nomination-form"
                className="!bg-white !text-ink hover:!bg-white/90"
              >
                Start Nomination
              </Button>
              <Button
                href="#process"
                variant="outline"
                className="!border-white/30 !text-white hover:!bg-white/10"
              >
                Learn About Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {/* FIX: Reduced margin/padding on mobile (px-4) */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 -mt-12 mb-12 relative z-10">
        {/* FIX: Changed grid-cols-3 to grid-cols-1 sm:grid-cols-3 to stack on mobile */}
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white/90 p-6 shadow-soft backdrop-blur-sm sm:grid-cols-3 md:gap-12 md:p-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold text-copper md:text-3xl">
              200+
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/60">
              Leaders Honored
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold text-copper md:text-3xl">
              50K+
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/60">
              Women Impacted
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold text-copper md:text-3xl">5+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/60">
              Years
            </p>
          </div>
        </div>
      </div>

      {/* Main Nomination Section */}
      {/* FIX: Reduced padding (px-4) on mobile to give more width to content */}
      {/* Main Nomination Section */}
      <section
        id="nomination-form"
        className="mx-auto max-w-6xl px-4 pb-12 md:px-6 md:pb-16"
      >
        {/* FIX: Explicitly set grid-cols-1 for mobile to ensure stacking */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Form Card - Main Column */}
          {/* FIX: Added w-full to ensure it takes full width of the grid cell */}
          <Card className="w-full lg:col-span-2 overflow-hidden border-none bg-white p-0 shadow-xl">
            {/* Form Header */}
            <div className="border-b border-stone/20 bg-gradient-to-r from-copper/5 to-transparent p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-ink">
                    Nomination Form
                  </h2>
                  <p className="mt-1 text-sm text-ink/60">
                    Fill in the details below to submit your nomination for the
                    SACHI Awards
                  </p>
                </div>
                <span className="self-start rounded-full bg-copper/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-copper md:self-center">
                  Step 1 of 1
                </span>
              </div>
            </div>

            {/* Form Body */}
            <form className="p-4 md:p-8" onSubmit={handleSubmit} noValidate>
              <div className="space-y-8">
                {/* Nominator Information */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-copper/10 text-sm text-copper">
                      1
                    </span>
                    Your Information
                  </h3>
                  {/* FIX: grid-cols-1 on mobile, grid-cols-2 on md+ */}
                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormInput
                      label="Your Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                      placeholder="Enter your full name"
                    />
                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Nominee Information */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-copper/10 text-sm text-copper">
                      2
                    </span>
                    Nominee Information
                  </h3>
                  {/* FIX: grid-cols-1 on mobile, grid-cols-2 on md+ */}
                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormInput
                      label="Nominee Full Name"
                      name="nominee"
                      value={form.nominee}
                      onChange={handleChange}
                      error={errors.nominee}
                      required
                      placeholder="Full name of nominee"
                    />
                    <SelectInput
                      label="Field of Work"
                      name="field"
                      value={form.field}
                      onChange={handleChange}
                      error={errors.field}
                      required
                      options={fieldOptions}
                      placeholder="Select field"
                    />
                    <div className="md:col-span-2">
                      <FormInput
                        label="City"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        error={errors.city}
                        required
                        placeholder="Enter city"
                      />
                    </div>
                  </div>
                </div>

                {/* Achievement Details */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-copper/10 text-sm text-copper">
                      3
                    </span>
                    Achievement Details
                  </h3>
                  <div className="mt-4 space-y-6">
                    <TextArea
                      label="Achievement Description"
                      name="achievement"
                      value={form.achievement}
                      onChange={handleChange}
                      placeholder="Share a brief overview of her accomplishments, impact, and leadership journey..."
                      rows={4}
                    />

                    <div className="rounded-xl bg-mist/60 p-4 md:p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                        Tips for a strong nomination
                      </p>
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start gap-2 text-sm text-ink/70">
                          <CheckCircle
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-copper"
                          />
                          <span>
                            Highlight measurable outcomes and communities served
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-ink/70">
                          <CheckCircle
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-copper"
                          />
                          <span>
                            Describe her leadership style and how she inspires
                            others
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-ink/70">
                          <CheckCircle
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-copper"
                          />
                          <span>
                            Include her vision for future impact and growth
                          </span>
                        </li>
                      </ul>
                    </div>

                    <FileInput
                      label="Upload Photo (Optional)"
                      name="photo"
                      onChange={handleFileChange}
                      accept="image/*"
                      helperText="JPEG, PNG or GIF. Max 5MB."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="mt-8 border-t border-stone/20 pt-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs text-ink/50">
                      <span className="font-semibold text-copper">*</span>{" "}
                      Required fields
                    </p>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto min-w-[200px]"
                  >
                    Submit Nomination
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mt-6 animate-fade-up rounded-xl bg-copper/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-copper/20">
                      <CheckCircle className="h-5 w-5 text-copper" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">
                        Nomination Submitted Successfully!
                      </h4>
                      <p className="mt-1 text-sm text-ink/70">
                        Thank you for your nomination. Our team will review the
                        submission and get back to you within 5-7 business days.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </Card>

          {/* Sidebar - Right Column */}
          {/* FIX: Added w-full to ensure sidebar takes full width on mobile */}
          <div className="w-full space-y-6">
            {/* Awards Gallery Card */}
            <Card className="overflow-hidden border-none bg-gradient-to-br from-ink to-ink/95 p-0 shadow-xl">
              <div className="p-6">
                <div className="inline-flex rounded-full bg-copper/20 px-3 py-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-copper">
                    Gallery
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Awards & Recognition
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Celebrating excellence in women leadership across India.
                </p>
              </div>

              <div className="px-4 pb-6 md:px-6">
                <Carousel
                  items={awardGallery}
                  ariaLabel="Awards gallery"
                  renderItem={(item) => (
                    <div className="group overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 h-full">
                      <div className="flex h-36 items-center justify-center p-5">
                        <div
                          className={`flex h-24 w-24 items-center justify-center rounded-2xl ${item.bg} bg-opacity-20`}
                        >
                          <item.icon size={40} className={item.color} />
                        </div>
                      </div>
                      <div className="border-t border-white/10 p-4">
                        <p className="text-sm font-semibold text-white line-clamp-1">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-white/50 line-clamp-2">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  )}
                />
              </div>
            </Card>

            {/* Nomination Tips Card */}
            <Card className="border-none bg-white p-6 shadow-xl">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-copper" />
                <h3 className="text-lg font-semibold text-ink">
                  Nomination Tips
                </h3>
              </div>
              <p className="mt-2 text-sm text-ink/60">
                What makes a powerful nomination
              </p>

              <div className="mt-6 space-y-4">
                {nominationTips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-copper/10">
                      <tip.icon size={16} className="text-copper" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {tip.title}
                      </p>
                      <p className="text-xs text-ink/60">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-mist/60 p-4">
                <p className="text-xs text-ink/70">
                  <span className="font-semibold text-copper">Deadline:</span>{" "}
                  March 30, 2026
                </p>
                <p className="mt-1 text-xs text-ink/50">
                  Late submissions will be considered for the next award cycle.
                </p>
              </div>
            </Card>

            {/* Quick Stats Card */}
            <Card className="border-none bg-white p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-copper">150+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-ink/50">
                    Already Nominated
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-copper">12</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-ink/50">
                    Days Left
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="Nomination & Selection Process"
            subtitle="A transparent and rigorous journey to honor exceptional women leaders."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className="group relative overflow-hidden border-none bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute -right-4 -top-4 text-7xl font-bold text-stone/10">
                  {index + 1}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-copper/10 transition-colors group-hover:bg-copper/20">
                  <step.icon className="h-6 w-6 text-copper" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ChevronRight className="h-5 w-5 text-copper/30" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-mist/80 px-6 py-3">
              <Calendar size={16} className="flex-shrink-0 text-copper" />
              <span className="text-sm text-ink/70">
                Next Award Ceremony:{" "}
                <span className="font-semibold text-ink">
                  November 15, 2026
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-copper/80">
              Get Involved
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
              Ready to recognize a trailblazer?
            </h2>
            <p className="mt-4 text-sm text-ink/70">
              Every nomination helps us discover and celebrate women who are
              shaping a better future.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="#nomination-form">Nominate Now</Button>
              <Button href="/speakers" variant="outline">
                View Past Honorees
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden bg-gradient-to-br from-copper/20 to-copper/5 p-8">
            <div className="text-center">
              <Trophy size={48} className="mx-auto text-copper" />
              <p className="mt-4 text-lg font-semibold text-ink">
                SACHI Awards 2026
              </p>
              <p className="mt-2 text-sm text-ink/60">
                Celebrating women who lead
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Nominate;
