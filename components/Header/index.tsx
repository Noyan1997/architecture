import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import headerMessage from './header.messages'
const Header: NextPage = () => {
  return (
    <IntlProvider locale="en">
      <ul
        className=" w-full justify-center flex flex-col my-8
       "
      >
        <div>
          <li className=" justify-center flex">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-800 font-semibold text-7xl">
                <FormattedMessage {...headerMessage.SORA} />
              </a>
            </Link>
          </li>
        </div>

        <div className="flex justify-center ml-5">
          <li className="mr-6">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-800">
                <FormattedMessage {...headerMessage.work} />
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/aboutUs">
              <a className="text-blue-500 hover:text-blue-800">
                <FormattedMessage {...headerMessage.about} />
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/contact">
              <a className="text-blue-500 hover:text-blue-800">
                <FormattedMessage {...headerMessage.contact} />
              </a>
            </Link>
          </li>
        </div>
      </ul>
    </IntlProvider>
  )
}

export default Header
