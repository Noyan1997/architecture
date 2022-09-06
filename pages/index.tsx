import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImageLayout from '../components/ImagesLayout'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ImageLayout />
      <Footer />
    </>
  )
}

export default Home
