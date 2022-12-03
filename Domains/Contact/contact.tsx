import Header from '../../components/Header'
// import './about.scss'
const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="contact_parent">
        <div className='persons_parent'>
          <span className='f-row'>Viktor Fretyán</span>
          <span className='s-row'>Tamás Medve</span>
        </div>
        <div className="our_info">
          <span>info@sora-images.com</span>
          <span>+33 7 62 01 23 24</span>
        </div>
      </div>
    </>
  )
}

export default AboutUs
