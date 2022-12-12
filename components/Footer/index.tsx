import { NextPage } from 'next'
import React from 'react'
import useTranslation from '../../hooks/useTranslation';
import Layout from '../Layout'

const Footer: NextPage = () => {
  const { t, locale } = useTranslation();
  return (
    <Layout title={t('home')}>

    <div>
      <div>
        <span>Viktor Fretyán</span>
        <span>Tamás Medve</span>
      </div>
      <div>
        <span>info@sora-images.com</span>
        <span>+33 7 62 01 23 24</span>
        <span>icon</span>
      </div>
    </div>

    </Layout>
  )
}

export default Footer
