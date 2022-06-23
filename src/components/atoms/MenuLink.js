const MenuLink = ({ sectionLink, sectionName }) => {
  return (
    <a className="text-beige uppercase font-semibold text-xl" href={`#${sectionLink}`}>{sectionName}</a>
  )
}

export default MenuLink