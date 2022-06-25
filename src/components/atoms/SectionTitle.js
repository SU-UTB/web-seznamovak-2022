const SectionTitle = ({ title, color = '#000' }) => {
  const colorRegex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')

  return (
    <h2 className="" style={{color: `${colorRegex.test(color) ? color : '#000'}`}}>{title}</h2>
  )
}

export default SectionTitle