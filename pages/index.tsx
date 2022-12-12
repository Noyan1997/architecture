import type { NextPage } from 'next'
import Header from '../components/Header'
import HeaderT from '../components/HeaderT'
import ImageLayout from '../components/ImagesLayout'

import Layout from '../components/Layout';
import useTranslation from '../hooks/useTranslation';


const Home: NextPage = () => {
  const { t, locale } = useTranslation();
  return (
    <>

<Layout title={t('home')}>

    <HeaderT/>
    <Header />
    <ImageLayout />  
    </Layout>
    </>
  )
}

export default Home
