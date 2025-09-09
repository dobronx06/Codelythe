import { forwardRef } from 'react'

const Button = forwardRef(({ 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  children, 
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 shadow-lg hover:shadow-xl transform hover:scale-105',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white focus:ring-gray-500',
    ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-lg hover:shadow-xl',
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