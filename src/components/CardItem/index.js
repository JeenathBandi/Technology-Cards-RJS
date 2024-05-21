// Write your code here.
import './index.css'

const cardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default cardItem
