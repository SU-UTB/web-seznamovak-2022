import EmailLink from '../atoms/EmailLink'

const Organiser = () => {
  return (
    <div className="organiser">
      <h3>POŘADATEL</h3>
      <div className="info">
        <p>Studentská unie UTB, z.s</p>
        <p>Růmy 4046, 760 01 Zlín</p>
        <EmailLink email="seznamovak@sutb.cz" />
        <p>Prezident Studentské unie: Dominik Gerža</p>
        <EmailLink email="prezident@sutb.cz" />
      </div>
    </div>
  )
}

export default Organiser