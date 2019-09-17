import React from 'react'
import { Chart } from 'primereact/chart';
import 'chartjs-plugin-labels';

const noAnswer = "Sorry no answer found."

const NoAnswerMessage = () => {
  return (
    <div className="infaTextMain">
      <p className="infaTextMessage">{noAnswer}</p>
      <small className="infaTextTimestamp"></small>
    </div>
  )
}

export class InfaChart extends React.Component {
  data = this.props.response.data.user.response.data;
  options = this.props.response.data.user.response.options;
  type = this.props.response.data.user.response.type;

  componentDidMount() {
    //data = this.props.response.data.user.response.data;
    this.options = this.props.response.data.user.response.options;
    //type = this.props.response.data.user.response.type;
  }

  getTimestamp = () => {
    let date = new Date();
    let options = {
      month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return date.toLocaleTimeString("en-us", options);
  }

  render() {
    if (this.data.datasets[0].data.length > 0) {
      return (
        <Chart type={this.type} data={this.data} options={this.options} />
      )
    } else {
      return <NoAnswerMessage />;
    }
  }
}