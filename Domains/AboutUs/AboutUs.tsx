import Header from '../../components/Header'
// import './about.scss'
const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about_us_parent">
        <span>
          We at Sora are devoted to the craft of producing images that capture
          the beauty of architecture. They are created to be in harmony with the
          existing surroundings, without employing tricks, and ensuring that the
          architecture takes center stage.
        </span>
        <img src="/images/test3.jpg" />
      </div>
    </>
  )
}

export default AboutUs
