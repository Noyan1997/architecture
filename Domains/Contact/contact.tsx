import HeaderT from '../../components/HeaderT'
import Header from '../../components/Header'
import useTranslation from '../../hooks/useTranslation';
import Layout from '../../components/Layout';

// import './about.scss'
const AboutUs = () => {
  const { t, locale } = useTranslation();

  return (
    <>
     <Layout title={t('home')}>

    <HeaderT/>

      <Header />
      <div className="contact_parent">
        <div className='persons_parent'>
          <span className='f-row'>Amir Rostamnezhad</span>
        
        </div>
        <div className="our_info">
          <span>info@rahstudio.com</span>
          <span>+36 70 866 5148</span>
        </div>
      </div>

     </Layout>
    </>
  )
}

export default AboutUs
