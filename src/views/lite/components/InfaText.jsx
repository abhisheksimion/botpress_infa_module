/*import snarkdown from 'snarkdown'
import Linkify from 'react-linkify'*/

export class InfaText extends React.Component {
  message = this.props.text

  getTimestamp = () => {
    let date = new Date();
    let options = {
      month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return date.toLocaleTimeString("en-us", options);
  }
  render() {
    return (<div className="infaTextMain">
      <div className="infaTextMessage">{this.message}</div>
      <small className="infaTextTimestamp">{this.getTimestamp()}</small>
    </div>)
    /*if (this.props.markdown) {
      let html = snarkdown(this.props.text || '')
      html = html.replace(/<a href/gi, `<a target="_blank" href`)
  
      message = <div dangerouslySetInnerHTML={{ __html: html }} />
    }
  
    return (
      <Linkify properties={{ target: '_blank' }}>
        <div style={{ align: 'center' }}>
          {message}
          <small>{timestamp}</small>
        </div>
      </Linkify>
    )*/
  }
}