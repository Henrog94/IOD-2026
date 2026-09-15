function Greeting({ name, children }) {
  const displayName = name || 'World'

  return (
    <div className="componentBox">
      <h2>Hello {displayName}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

export default Greeting
