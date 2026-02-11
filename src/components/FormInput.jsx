const baseInput =
  'w-full rounded-xl border bg-white/90 px-4 py-2.5 text-sm text-ink shadow-soft transition focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/30'

function FieldLabel({ id, label, required }) {
  return (
    <label htmlFor={id} className="text-sm font-medium text-ink">
      {label}
      {required ? <span className="text-copper"> *</span> : null}
    </label>
  )
}

export function FormInput({
  label,
  name,
  value,
  onChange,
  error,
  required,
  type = 'text',
  placeholder,
}) {
  const id = name
  return (
    <div className="space-y-2">
      <FieldLabel id={id} label={label} required={required} />
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseInput} ${error ? 'border-red-500' : 'border-stone/60'}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
      />
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function SelectInput({ label, name, value, onChange, error, required, options }) {
  const id = name
  return (
    <div className="space-y-2">
      <FieldLabel id={id} label={label} required={required} />
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${baseInput} ${error ? 'border-red-500' : 'border-stone/60'}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function TextArea({ label, name, value, onChange, error, required, placeholder }) {
  const id = name
  return (
    <div className="space-y-2">
      <FieldLabel id={id} label={label} required={required} />
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className={`${baseInput} ${error ? 'border-red-500' : 'border-stone/60'}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function FileInput({ label, name, onChange, error, required }) {
  const id = name
  return (
    <div className="space-y-2">
      <FieldLabel id={id} label={label} required={required} />
      <input
        id={id}
        name={name}
        type="file"
        onChange={onChange}
        className={`${baseInput} file:mr-4 file:rounded-full file:border-0 file:bg-copper file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-ink ${
          error ? 'border-red-500' : 'border-stone/60'
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}
