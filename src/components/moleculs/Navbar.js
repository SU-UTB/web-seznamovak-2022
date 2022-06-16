import React, { useState } from 'react'
import MenuLink from '../atoms/MenuLink'
import SocialIcon from '../atoms/SocialIcon'

const Navbar = () => {
  const menuLinks = [
    { sectionLink: 'prihlaska', sectionName: 'PŘIHLÁŠKA' },
    { sectionLink: 'info', sectionName: 'INFORMACE' },
    { sectionLink: 'instruktori', sectionName: 'INSTRUKTOŘI' },
    { sectionLink: 'faq', sectionName: 'FAQ' },
    { sectionLink: 'partneri', sectionName: 'PARTNEŘI' },
    { sectionLink: 'kontakt', sectionName: 'KONTAKT' }
  ]

  const [socialLinks] = useState([
    { socialLink: 'https://www.instagram.com/studentskaunieutb/', socialIconImg: '', socialPlatform: 'instagram' },
    { socialLink: 'https://www.facebook.com/studentskaunieutb', socialIconImg: '', socialPlatform: 'facebook' }
  ])


  return (
    <nav>

      <ul>
        {menuLinks.map(({ sectionLink, sectionName }) => (
          <li key={sectionLink}>
            <MenuLink sectionLink={sectionLink} sectionName={sectionName} />
          </li>
        ))}
      </ul>
      <ul>
        { socialLinks.map(({ socialLink, socialIconImg, socialPlatform }) => (
          <li key={socialLink}>
            <SocialIcon socialLink={socialLink} socialIconImg={socialIconImg} socialPlatform={socialPlatform} />
          </li>
        ))
        }
      </ul>
    </nav>
  )
}

export default Navbar