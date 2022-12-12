import Header from '../../components/Header'
import HeaderT from '../../components/HeaderT'
import Layout from '../../components/Layout';

import useTranslation from '../../hooks/useTranslation';
const AboutUs = () => {
  const { t, locale } = useTranslation();

  return (
    <>
<Layout title={t('home')}>
    <HeaderT/>

      <Header />
      <div className="about_us_parent">
       
        <p>{t('aboutUs')}</p>

        <img src="/images/test3.jpg" />
      </div>


</Layout>
    
    </>
  )
}

export default AboutUs
