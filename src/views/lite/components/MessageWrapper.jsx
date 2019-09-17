import React from 'react'

export class MessageWrapper extends React.Component {
  getTimestamp = () => {
    let date = new Date();
    let options = {
      month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return date.toLocaleTimeString("en-us", options);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <small className="infaTextTimestamp">{this.getTimestamp()}</small>
      </div>
    )
  }
}