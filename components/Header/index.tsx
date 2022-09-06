import { NextPage } from 'next'
import React from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import headerMessage from './header.messages'

const Header: NextPage = () => {
  return (
    <div>
      <IntlProvider locale="en">
        <div>
          <span>Architecture</span>
        </div>
        <div>
          <span>
            <FormattedMessage {...headerMessage.work} />
          </span>
          <span>
            <FormattedMessage {...headerMessage.about} />
          </span>
          <span>
            <FormattedMessage {...headerMessage.contact} />
          </span>
        </div>
      </IntlProvider>
    </div>
  )
}

export default Header
