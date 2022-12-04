import type { NextPage } from 'next'
import Header from '../components/Header'
import ImageLayout from '../components/ImagesLayout'
import { Provider } from "react-redux";


const Home: NextPage = () => {
  return (
    <>


      <Header />
      <ImageLayout />

      {/* <Footer /> */}
   
    </>
  )
}

export default Home
