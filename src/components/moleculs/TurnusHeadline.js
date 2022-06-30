const TurnusHeadline = ({ title, date, color }) => {
  return (
    <div className="turnus-headline">
      <h3 className="font-bold mb-2 text-4xl"  style={{color: `${color}`}}>{title}</h3>
      <h4 className="mb-6 text-beige font-medium text-4xl">{date}</h4>
    </div>
  )
}
export default TurnusHeadline