import React from 'react'
/**
 * The lite views are meant to be lightweight. They shouldn't include heavy dependencies.
 * Common use case is to add custom components on the web chat. It's also possible to share them to other modules
 *
 * Even if you don't plan to include a lite view, you must include an empty view that returns 'null'
 */
export class LiteView extends React.Component {
  render() {
    return null
  }
}

/* Also tried solution by eff_it, from stackoverflow
 * https://stackoverflow.com/a/56962582/707414
  export const MessageWrapper = props => (
  <div>
    <p style={{ color: 'blue' }}>sent on: {new Date(props.sentOn).toDateString()}</p>
    <div style={{ background: 'black', color: 'white' }}>{props.children}</div>
  </div>
)

export const MySuperOverride = props => {
  props.store.setMessageWrapper({ module: 'infa-module', component: 'MessageWrapper' })
  return null
}*/

export { InfaDropdownMenu } from './components/InfaDropdownMenu'
export { InfaText } from './components/InfaText'
export { InfaLinkPreview } from './components/InfaLinkPreview'
export { InfaChart } from './components/InfaChart'

export { MessageWrapper } from './components/MessageWrapper'
export { InfaMessageController } from './components/InfaMessageController'
