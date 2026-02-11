function PageHeader({ title, subtitle, image, eyebrow = 'SACHI' }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-copper/80">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base text-mist/90 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default PageHeader
