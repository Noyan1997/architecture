import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { IntlProvider } from 'react-intl'
import Image from 'next/image'
import useTranslation from '../../hooks/useTranslation'

const Header: NextPage = () => {
  const { t, locale } = useTranslation();

  return (
    <>
      <ul
        className=" w-full justify-center flex flex-col my-8
       "
      >
        <div>
          <li className=" justify-center flex">
            <Link href="/">
              <a className="header_item font-semibold text-7xl">
          <Image alt='' src='/images/rah-logo.svg'
          height="200px" width="200px" 
          /> 
          
              </a>
            </Link>
          </li>
        </div>

        <div className="flex justify-center ml-5">
          <li className="mr-6">
            <Link href="/">
              <a className="header_item">
          <p>{t('work')}</p>

              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/aboutUs">
              <a className="header_item">
          <p>{t('about')}</p>

              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/contact">
              <a className="header_item">
          <p>{t('contact')}</p>

              </a>
            </Link>
          </li>

        </div>
      </ul>
      </>
     
  )
}

export default Header
