import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium tracking-wide transition ${
    isActive ? 'text-copper' : 'text-white/80 hover:text-white'
  }`

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-2xl font-semibold tracking-[0.3em] text-white">
          SACHI
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <Link to="/#about" className="text-sm font-medium tracking-wide text-white/80 hover:text-white">
            About Us
          </Link>
          <NavLink to="/speakers" className={navLinkClass}>
            Speakers
          </NavLink>
          <NavLink to="/past-events" className={navLinkClass}>
            Past Events
          </NavLink>
          <NavLink to="/nominate" className={navLinkClass}>
            Nominate
          </NavLink>
        </nav>
        <div className="hidden lg:block">
          <Button href="/nominate" size="sm">
            Join Us Now
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:border-copper lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-ink/95 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-white">
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
              Home
            </NavLink>
            <Link
              to="/#about"
              onClick={closeMenu}
              className="text-sm font-medium tracking-wide text-white/80"
            >
              About Us
            </Link>
            <NavLink to="/speakers" className={navLinkClass} onClick={closeMenu}>
              Speakers
            </NavLink>
            <NavLink to="/past-events" className={navLinkClass} onClick={closeMenu}>
              Past Events
            </NavLink>
            <NavLink to="/nominate" className={navLinkClass} onClick={closeMenu}>
              Nominate
            </NavLink>
            <Button href="/nominate" className="mt-2 w-fit" size="sm">
              Join Us Now
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
