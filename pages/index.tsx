import type { NextPage } from 'next'
import Header from '../components/Header'
import ImageLayout from '../components/ImagesLayout'
import { Provider } from "react-redux";
import { store } from "../store";


const Home: NextPage = () => {
  return (
    <>
    <Provider store={store}>

      <Header />
      <ImageLayout />

      {/* <Footer /> */}
    </Provider>
    </>
  )
}

export default Home
