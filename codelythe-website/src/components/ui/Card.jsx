const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-[#224433] rounded-2xl overflow-hidden border border-[#2e5a3f]'
  const hoverClasses = hover ? 'hover:shadow-lg hover:shadow-emerald-500/5 hover:border-[#3a7050] transition-all duration-300' : ''

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-t border-[#2e5a3f] ${className}`} {...props}>
    {children}
  </div>
)

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
