const Link = ({ linkTo, linkName, children }) => {
  return (
    <a href={linkTo} target="_blank" rel="nopener noreferrer">{linkName}
      {children}
    </a>
  )
}

export default Link