function FilterTabs({ options, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Speaker filters">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={active === option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition md:text-sm ${
            active === option.value
              ? 'border-copper bg-copper text-white'
              : 'border-stone/60 bg-white text-ink/70 hover:border-copper hover:text-copper'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
