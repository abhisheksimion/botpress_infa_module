import React from 'react'

export class InfaMessageController extends React.Component {
  componentDidMount() {
    console.log("componentDidMount called");
    this.props.store.setMessageWrapper({ module: 'infa-module', component: 'MessageWrapper' });
    console.log("componentDidMount messageWrapped");
  }
  /*componentDidUpdate(_prevProps, prevState) {
    console.log("componentDidUpdate called");
    this.props.store.setMessageWrapper({ module: 'infa-module', component: 'MessageWrapper' });
  }*/

  render() {
    return null
  }
}