import { Link } from 'react-router-dom'

const baseStyles =
  'inline-flex items-center justify-center rounded-full font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper'

const variantStyles = {
  primary: 'bg-copper text-white shadow-soft hover:bg-ink',
  outline: 'border border-copper text-copper hover:bg-copper hover:text-white',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-xs tracking-wide',
  md: 'px-5 py-2.5 text-sm tracking-wide',
  lg: 'px-6 py-3 text-base tracking-wide',
}

function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${
    sizeStyles[size] || sizeStyles.md
  } ${className}`

  if (href) {
    const isInternal = href.startsWith('/')
    const Component = isInternal ? Link : 'a'
    return (
      <Component
        className={classes}
        {...(isInternal ? { to: href } : { href })}
        {...props}
      >
        {children}
      </Component>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
