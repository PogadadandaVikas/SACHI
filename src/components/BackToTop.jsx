import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-card transition hover:-translate-y-1 hover:bg-copper"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}

export default BackToTop
