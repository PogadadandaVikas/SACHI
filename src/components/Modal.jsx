import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'

function Modal({ open, title, onClose, children }) {
  const titleId = useId()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div className="absolute inset-0 bg-ink/70" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-card"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-copper/80">SACHI</p>
            <h3 id={titleId} className="mt-2 text-2xl font-semibold text-ink">
              {title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone/50 text-ink transition hover:border-copper hover:text-copper"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mt-4 text-sm text-ink/80">{children}</div>
      </div>
    </div>
  )
}

export default Modal
