import { createElement } from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
]

function Footer() {
  return (
    <footer className="border-t border-stone/40 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-semibold tracking-[0.3em]">SACHI</p>
          <p className="mt-3 text-sm text-white/70">
            Strengthening and Celebrating Her Initiative is a Pan-India platform supporting women
            entrepreneurs, leaders, and professionals through events, recognition, and awards.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-copper/80">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>123 Leadership Lane, New Delhi, India</li>
            <li>info@sachi.org.in</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-copper/80">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/speakers" className="hover:text-white">
              Speakers
            </Link>
            <Link to="/past-events" className="hover:text-white">
              Past Events
            </Link>
            <Link to="/nominate" className="hover:text-white">
              Nominate
            </Link>
          </div>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-copper hover:text-white"
              >
                {createElement(icon, { size: 18 })}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        Copyright 2026 SACHI. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
