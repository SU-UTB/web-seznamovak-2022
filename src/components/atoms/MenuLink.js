import React from 'react'

const MenuLink = ({ sectionLink, sectionName }) => {
  return (
    <a href={sectionLink}>{sectionName}</a>
  )
}

export default MenuLink