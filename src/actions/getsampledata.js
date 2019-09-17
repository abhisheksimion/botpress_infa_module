//const axios = require('axios');
/**
 * @title Get sample data for chart components
 * @category Utility
 * @author: asimon
 * @param {any} data - Query value you want to send in payload
 */
const defaultColor = '#42A5F5';

const color = ['#EC407A',
  '#AB47BC',
  '#42A5F5',
  '#7E57C2',
  '#66BB6A',
  '#FFCA28',
  '#26A69A'
];

const abbreviatedNumber = (value) => {
  let newValue = value;
  console.log(value);
  if (value >= 1000) {
    let suffixes = ["", "k", "m", "b", "t"];
    let suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = '';
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
      let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}

const noAnswer = "Sorry no answer found."

const doughnutOptions = {
  plugins: {
    labels: {
      render: 'value',
      fontSize: 14,
      fontStyle: 'bold',
      fontColor: '#000',
      fontFamily: '"Lucida Console", Monaco, monospace'
    }
  },
  legend: {
    position: 'bottom'
  }
};

const doughnutData = {
  labels: ['Active Users', 'Inactive Users'],
  datasets: [{
    label: "User Activity",
    backgroundColor: [
      "#FF6384",
      "#36A2EB"
    ],
    data: [22, 12]
  }]
};

const barOptions = {
  plugins: {
    labels: {
      render: 'value',
      fontSize: 10,
      fontStyle: 'bold',
      fontColor: '#000',
      fontFamily: '"Lucida Console", Monaco, monospace'
    }
  },
  legend: {
    display: false,
    position: 'bottom'
  },
  scales: {
    xAxes: [{
      type: 'time',
      display: true,
      time: {
        unit: 'month'
      }
    }],
    yAxes: [{
      ticks: {
        callback: function (label, index, labels) {
          return this.abbreviatedNumber(label);
        }
      },
      scaleLabel: {
        display: false,
        labelString: '1k = 1000'
      }
    }]
  }
};

const barData = {
  datasets: [{
    label: "Rows Processed",
    backgroundColor: defaultColor,
    data: [{
        x: 1546300800000,
        y: 216915890
      },
      {
        x: 1548979200000,
        y: 1306458666
      },
      {
        x: 1551398400000,
        y: 1780817685
      },
      {
        x: 1554076800000,
        y: 1677704491
      },
      {
        x: 1556668800000,
        y: 2027622415
      },
      {
        x: 1559347200000,
        y: 1954768048
      },
      {
        x: 1561939200000,
        y: 683285217
      }
    ]
  }]
};

const getsampledata = async () => {
  console.log(args.data);
  const doughnut = 'doughnut';
  const bar = 'bar'
  try {
    if (args.data === doughnut) {
      user.response = {
        data: doughnutData,
        options: doughnutOptions,
        type: doughnut
      };
    } else if (args.data === bar) {
      user.response = {
        data: barData,
        options: barOptions,
        type: bar
      };
    }

  } catch (e) {
    console.log(e);
  } //console.log('Arguments =', util.inspect(args, false, 2, true));
  //console.log(JSON.stringify(args));

}; // Actions are async, so make sure to return a promise


return getsampledata();
