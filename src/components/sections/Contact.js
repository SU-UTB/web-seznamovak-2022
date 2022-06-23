import React from 'react'
import Organiser from '../moleculs/Organiser'
import ContactSocials from '../moleculs/ContactSocials'
import { documents } from '../../data/documents'
import { suSocials, managersSocials } from '../../data/contacts'

import Link from '../atoms/Link'

const Contact = () => {

  return (
    <section id="kontakt">
      <ContactSocials 
        title={suSocials.name}
        desc={suSocials.desc}
        fbLink={suSocials.fbLink}
        fbImg={suSocials.fbImg}
        igLink={suSocials.igLink}
        igImg={suSocials.igImg}
      />
      <h3>MANAŽEŘI PROJEKTU</h3>
      {
        managersSocials.map(manager => (
          <ContactSocials
            key={manager.name}
            title={manager.name}
            fbLink={manager.fbLink}
            fbImg={manager.fbImg}
            igLink={manager.igLink}
            igImg={manager.igImg}
          />
        ))
      }
      <Organiser />
      <div className="document-list">
      {
        documents.map(doc => (
          <div className="doc-link" key={doc.desc}>
            <Link linkTo={doc.file} linkName={doc.desc} />
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Contact