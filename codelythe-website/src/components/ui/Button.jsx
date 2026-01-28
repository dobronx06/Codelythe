import { forwardRef } from 'react'

const Button = forwardRef(({
  className = '',
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0ebe3] disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40',
    secondary: 'bg-[#e6e0d6] hover:bg-[#dbd4c9] text-[#0a1a12] border border-[#d4cdc3]',
    outline: 'border border-[#d4cdc3] text-[#4a5d4f] hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10',
    ghost: 'text-[#7a8a74] hover:text-[#0a1a12] hover:bg-[#e6e0d6]',
    amber: 'bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/25',
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
