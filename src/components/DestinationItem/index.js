// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {id, name, imgUrl} = itemDetails

  return (
    <div className="container">
      <img src={imgUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
    </div>
  )
}
export default DestinationItem
