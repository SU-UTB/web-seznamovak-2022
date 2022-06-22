import React from 'react'
import DocsList from '../moleculs/DocsList'
import ochrana from '../../assets/pdf/Ochrana_osobních_údaju_SU_Seznamovák_UTB.pdf'
import souhlas from '../../assets/pdf/Souhlas_se_zpracováním_osobních_údajů_Seznamovák_UTB.pdf'
import podminky from '../../assets/pdf/podminky.pdf'
import Organiser from '../moleculs/Organiser'
import ContactSocials from '../moleculs/ContactSocials'
import fbSU from '../../assets/img/contact/fbSU.png'
import igSU from '../../assets/img/contact/igSU.png'
import Link from '../atoms/Link'

const Contact = () => {

  const documents = [
		{ file: ochrana, desc: 'Ochrana osobních údaju Seznamovák UTB (PDF soubor)'},
		{ file: souhlas, desc: 'Souhlas se zpracováním osobních údajů Seznamovák UTB (PDF soubor)'},
		{ file: podminky, desc: 'Účastnické podmínky Seznamovák UTB (PDF soubor)'},
	]

  const suSocials = [
    {
      name: 'STUDENTSKÁ UNIE',
      desc: 'Jsme tu pro tebe, pokud se budeš chtít na cokoliv zaptat, ozvi se nám na profil.',
      fbLink: 'https://www.facebook.com/studentskaunieutb',
      fbImg: fbSU,
      igLink: 'https://www.instagram.com/studentskaunieutb/',
      igImg: igSU
    }
  ]

  const managersSocials = [
    {
      name: 'ALENKA',
      fbLink: 'https://www.facebook.com/AlenaSkarupova',
      fbImg: '',
      igLink: '',
      igLink: ''
    },
    {
      name: 'DAVID',
      fbLink: 'https://www.facebook.com/profile.php?id=100012351641790',
      fbImg: '',
      igLink: 'https://www.instagram.com/picate_foto_12_stupnu/',
      igLink: ''
    }
  ]


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