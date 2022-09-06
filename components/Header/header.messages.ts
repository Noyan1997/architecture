import { defineMessages } from 'react-intl'

const scope = 'loginMessage'
const headerMessage = defineMessages({
  work: {
    id: `${scope}.work`,
    defaultMessage: 'work',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'about',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'contact',
  },
})
export default headerMessage
