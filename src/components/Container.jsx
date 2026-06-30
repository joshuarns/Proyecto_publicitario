export default function Container({ children, className = '' }) {
  return (
    <div
      style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '2rem', paddingRight: '2rem' }}
      className={className}
    >
      {children}
    </div>
  )
}
