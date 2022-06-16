import React from 'react'

const SocialIcon = ({ socialLink, socialIconImg, socialPlatform }) => {
  return (
    <a href={socialLink}>
      <img src={socialIconImg} alt={socialPlatform} />
    </a>
  )
}

export default SocialIcon