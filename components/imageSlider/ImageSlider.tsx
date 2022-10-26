import { NextPage } from 'next'
import { data } from '../../images/images'
import { ISlider } from '../../interface/global'

const ImageSlider: NextPage<ISlider> = ({
  id,
  image,
  name,
  title,
  quote,
  personIndex,
  index,
}) => {
  let position = 'nextSlide'
  if (personIndex === index) {
    position = 'activeSlide'
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === data.length - 1)
  ) {
    position = 'lastSlide'
  }

  return (
    <div>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      {/* <FaQuoteRight className="icon" /> */}
    </div>
  )
}

export default ImageSlider
