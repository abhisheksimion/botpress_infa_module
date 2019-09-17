import truncate from 'truncate'
import ScrollMenu from 'react-horizontal-scrolling-menu'

//transform data to be consumed by ScrollMenu
const TransformData = (rawData) => {
  let temp = [];
  for (const key in rawData) {
    let value = rawData[key];
    if (rawData.hasOwnProperty(key)) {
      let tmpObj = {};
      tmpObj["key"] = key;
      tmpObj["title"] = (value.hasOwnProperty("actual_title") ? value.actual_title : value.title);
      tmpObj["content"] = (value.hasOwnProperty("content") ? value.content : "");
      tmpObj["url"] = (value.hasOwnProperty("url") ? value.url : "");
      tmpObj["image"] = (value.hasOwnProperty("image") ? value.image : "");
      tmpObj["source"] = (value.hasOwnProperty("source") ? value.source : "");
      temp.push(tmpObj);
    }
  }
  return temp;
}

// One item component
// selected prop will be passed
const MenuItem = ({ title, desc, url, selected }) => {
  return (
    <a href={url} target="_blank">
      <div className="linkPreviewMain">
        <div className="linkPreviewTitle">
          <b>{title}</b>
          <hr className="linkPreviewSeparator" />
        </div>
        <div className="linkPreviewDesc">
          {desc}
        </div>
      </div>
    </a>
  );
};

export const Menu = (answer, selected) =>
  answer.map(el => {
    return <MenuItem title={truncate(el.title, 100)} key={el.key} desc={truncate(el.content, 160)} url={el.url} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return (
    <div className={className}>{text}</div>
  );
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

export class InfaLinkPreview extends React.Component {
  noAnswer = "Sorry no answer found."
  contentArray = [];
  //contentArray = JSON.parse(this.props.text.replace(/&quot;/g, '"').replace(/&#x2F;/g, '/'))
  //contentArray = JSON.parse(this.props.response.data.user.response);

  constructor(props) {
    super(props);
    console.log(this.props.response.data.user.response[0]);
    this.contentArray = this.props.response.data.user.response;

    if (this.contentArray[0].hasOwnProperty("answer")) {
      this.menuItems = Menu(TransformData(this.contentArray[0].answer), selected);
    } else {
      this.menuItems = Menu(TransformData(this.contentArray[0].slots), selected);
    }

  }

  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    translate: 0,
    transition: 0.3,
    wheel: true
  };

  componentDidMount() {
    if (this.props.options) {
      const options = this.props.options.map(x => {
        return { value: x, label: x }
      })
      this.setState({ options })
    }
  }

  onSelect = key => {
    this.setState({ selected: key });
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
    if (this.contentArray[0].query_status === "answer_available" || this.contentArray[0].query_status === "slots_needed") {
      const { selected } = this.state;
      const menu = this.menuItems;
      return (
        <div style={{ minWidth: '180px' }}>
          <ScrollMenu
            data={menu}
            /* arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}  *//>
        </div>
      );
    } else {
      console.log("No answer found.");
      console.log(this.contentArray);
      return (
        <div className="infaTextMain">
          <div className="infaTextMessage">{this.noAnswer}</div>
          <small className="infaTextTimestamp">{this.getTimestamp()}</small>
        </div>
      )
    }
  }
}