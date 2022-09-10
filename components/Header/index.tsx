import { NextPage } from 'next'
import React from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import headerMessage from './header.messages'

const Header: NextPage = () => {
  return (
    <IntlProvider locale="en">
      <ul
        class=" w-full justify-center flex flex-col my-8
       "
      >
        <div>
          <li class="mr-6 justify-center flex">
            <a
              class="text-blue-500 hover:text-blue-800 font-semibold text-7xl"
              href="#"
            >
              <FormattedMessage {...headerMessage.SORA} />
            </a>
          </li>
        </div>

        <div class="flex justify-center">
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">
              <FormattedMessage {...headerMessage.work} />
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="about">
              <FormattedMessage {...headerMessage.about} />
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="contact">
              <FormattedMessage {...headerMessage.contact} />
            </a>
          </li>
        </div>
      </ul>
    </IntlProvider>
  )
}

export default Header
