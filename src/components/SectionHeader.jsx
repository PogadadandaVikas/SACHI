const alignments = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-10 ${alignments[align] || alignments.center}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-copper/80">SACHI</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-ink/70 md:text-base">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
