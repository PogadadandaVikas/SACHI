import { createElement } from 'react'

function Card({ as = 'div', className = '', children, ...props }) {
  return createElement(
    as,
    {
      className: `rounded-2xl border border-stone/50 bg-white/90 shadow-card ${className}`,
      ...props,
    },
    children
  )
}

export default Card
