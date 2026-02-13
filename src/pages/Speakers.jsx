import React, { useState } from 'react'
import { Linkedin, Award, Briefcase, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import speakers from '../data/speakers'

const heroImage =
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80'

function SectionDivider({ title, subtitle, accent }) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full bg-copper/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-copper">
        {accent || 'Meet the Leaders'}
      </span>
      <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/60 md:text-xl">
          {subtitle}
        </p>
      )}
      <div className="mt-8 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-copper/40" />
      </div>
    </div>
  )
}

function TopSpeakerCard({ speaker }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {/* =========================================
          MOBILE VIEW (Flip Card) - Visible < lg
         ========================================= */}
      <div 
        className="group relative h-[500px] w-full lg:hidden perspective-[1000px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] rounded-3xl shadow-xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
          
          {/* --- FRONT FACE (Image) --- */}
          <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden [backface-visibility:hidden]">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
            
            {/* Tap hint */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white border border-white/30">
               {isFlipped ? 'Tap to close' : 'Tap for details'}
            </div>

            {/* Basic info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block rounded-full bg-copper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                Featured Speaker
              </span>
              <h3 className="mt-3 text-2xl font-bold">{speaker.name}</h3>
              <p className="mt-1 text-sm text-white/90">{speaker.role}</p>
              {speaker.org && (
                <p className="flex items-center gap-1.5 text-xs text-white/80 mt-1.5">
                  <Briefcase size={12} />
                  {speaker.org}
                </p>
              )}
            </div>
          </div>

          {/* --- BACK FACE (Details) --- */}
          {/* FIXES APPLIED:
              1. Added [&::-webkit-scrollbar]:hidden, [scrollbar-width:none], [-ms-overflow-style:none] to hide visual scrollbar.
              2. Removed LinkedIn Button.
              3. Changed inner layout to use 'gap-6' and 'justify-center' for better vertical alignment.
          */}
          <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
             <div className="flex flex-col h-full justify-center gap-6">
                
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-ink">{speaker.name}</h3>
                  <p className="text-copper font-semibold mt-1">{speaker.role}</p>
                </div>

                {/* Signature Focus */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
                    Signature Focus
                  </span>
                  <p className="mt-3 text-sm italic text-ink/80 leading-relaxed bg-copper/5 p-4 rounded-2xl">
                    "{speaker.message}"
                  </p>
                </div>

                {/* Bio */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
                    About
                  </span>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>

                {/* Achievements */}
                {speaker.achievements?.length > 0 && (
                  <div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-copper/80 mb-3">
                      <Award size={14} />
                      Key Achievements
                    </span>
                    <ul className="space-y-2">
                      {speaker.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-ink/70">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Hover Slide) - Visible >= lg
         ========================================= */}
      <article className="hidden lg:block group relative h-[500px] w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:w-[220%] hover:shadow-2xl lg:w-full lg:hover:w-[200%] z-10 hover:z-20">
        <div className="relative flex h-full w-full">
          {/* Image section - always visible, shrinks on hover */}
          <div className="relative h-full w-full transition-all duration-500 group-hover:w-2/5">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
            
            {/* LinkedIn button */}
            {speaker.linkedin && (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-copper shadow-lg backdrop-blur-sm transition-all hover:bg-copper hover:text-white hover:scale-110"
                aria-label={`${speaker.name}'s LinkedIn profile`}
              >
                <Linkedin size={18} />
              </a>
            )}
            
            {/* Basic info overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block rounded-full bg-copper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                Featured Speaker
              </span>
              <h3 className="mt-3 text-2xl font-bold">{speaker.name}</h3>
              <p className="mt-1 text-sm text-white/90">{speaker.role}</p>
              {speaker.org && (
                <p className="flex items-center gap-1.5 text-xs text-white/80 mt-1.5">
                  <Briefcase size={12} />
                  {speaker.org}
                </p>
              )}
            </div>
          </div>

          {/* Details section - slides in on hover */}
          <div className="absolute right-0 h-full w-0 bg-gradient-to-br from-white to-mist/50 p-0 opacity-0 transition-all duration-500 group-hover:relative group-hover:w-3/5 group-hover:p-8 group-hover:opacity-100">
            <div className="flex h-full flex-col justify-between">
              {/* Top section - Name and title */}
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-ink">{speaker.name}</h3>
                  <p className="text-copper font-semibold mt-1">{speaker.role}</p>
                  {speaker.org && (
                    <p className="text-sm text-ink/60 mt-0.5">{speaker.org}</p>
                  )}
                </div>
                
                {/* Signature focus - compact */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
                    Signature Focus
                  </span>
                  <p className="mt-2 text-sm italic text-ink/80 leading-relaxed bg-copper/5 p-4 rounded-2xl line-clamp-3">
                    "{speaker.message}"
                  </p>
                </div>

                {/* Bio - condensed */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
                    About
                  </span>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed line-clamp-3">
                    {speaker.bio}
                  </p>
                </div>
              </div>

              {/* Bottom section - Achievements */}
              {speaker.achievements?.length > 0 && (
                <div className="mt-auto">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-copper/80 mb-3">
                    <Award size={14} />
                    Key Achievements
                  </span>
                  <ul className="space-y-2">
                    {speaker.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-ink/70">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper flex-shrink-0" />
                        <span className="line-clamp-2">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

function MoreSpeakerCard({ speaker }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay - appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Category badge */}
        {speaker.category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-copper shadow-lg backdrop-blur-sm">
            {speaker.category}
          </span>
        )}
        
        {/* LinkedIn button - appears on hover */}
        {speaker.linkedin && (
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-copper shadow-lg backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-copper hover:text-white hover:scale-110"
            aria-label={`${speaker.name}'s LinkedIn profile`}
          >
            <Linkedin size={16} />
          </a>
        )}
        
        {/* Name overlay - appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-xl font-bold">{speaker.name}</h3>
          <p className="mt-1 text-sm text-white/90">{speaker.role}</p>
          {speaker.org && (
            <p className="flex items-center gap-1 text-xs text-white/80 mt-1">
              <Briefcase size={11} />
              {speaker.org}
            </p>
          )}
        </div>
      </div>

      {/* Content section - always visible */}
      <div className="flex flex-1 flex-col p-5 bg-white">
        <h3 className="text-lg font-bold text-ink group-hover:text-copper transition-colors">
          {speaker.name}
        </h3>
        
        <p className="mt-1 text-sm font-medium text-ink/70">
          {speaker.role}
        </p>
        
        {speaker.org && (
          <p className="mt-1 flex items-center gap-1 text-xs text-ink/50">
            <Briefcase size={12} />
            {speaker.org}
          </p>
        )}
        
        {/* Quote - subtle styling */}
        <div className="mt-4 pt-3 border-t border-stone/20">
          <p className="text-xs italic text-ink/60 line-clamp-2">
            "{speaker.message}"
          </p>
        </div>
      </div>
    </article>
  )
}

function Speakers() {
  const topSpeakers = speakers.slice(0, 3)
  const moreSpeakers = speakers.slice(3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-mist to-white">
      <PageHeader
        title="Today's Inspiring Women Leaders"
        subtitle="Meet the trailblazing women making a difference and inspiring others across industries and communities."
        image={heroImage}
      />

{/* Top Speakers Section - with expand effect */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-copper/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-copper/5 blur-3xl" />
        </div>

        <SectionDivider
          accent="Featured Voices"
          title="Trailblazers & Visionaries"
          subtitle="These extraordinary leaders are reshaping industries and inspiring the next generation."
        />

        {/* Container Layout:
            - Mobile: flex-col (Stack)
            - Desktop: flex-row (Horizontal) 
        */}
        <div className="mt-16 flex flex-col gap-8 items-center lg:flex-row lg:items-stretch lg:justify-center">
          {topSpeakers.map((speaker) => (
            <TopSpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>

      {/* More Speakers Section - clean grid design */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-copper/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionDivider
            accent="Community Leaders"
            title="More Inspiring Leaders"
            subtitle="Meet the diverse community of women creating meaningful impact across India."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {moreSpeakers.map((speaker) => (
              <MoreSpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>

          {/* View all button */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-copper/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-copper transition-all hover:border-copper hover:bg-copper hover:text-white hover:shadow-lg">
              View All Speakers
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Speakers