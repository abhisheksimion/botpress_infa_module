const base = require('./_base');

function render(data) {
  const events = [];
  return [...events, {
    // This tells channel-web to tread the event as a custom component
    type: 'custom',

    // The name of your module
    module: 'infa-module',

    // The name of the component to load. In this example, the name of the component is "InfaText",
    // Components created for the web chat must be in the `lite` views
    component: 'InfaChart',

    // Add anything else that you would want your module to process
    // ... data from the content manager forms:
    //markdown: true,
    text: data.text,
    response: {
      data
    }
  }]
}

/*function renderMessenger(data) {
  return [{
    type: 'typing',
    value: data.typing
  }, {
    text: data.text
  }];
}*/

function renderElement(data, channel) {
  if (channel === 'web' || channel === 'api') {
    return render(data);
  }
  /*else if (channel === 'messenger') {
     return renderMessenger(data);
   }*/

  return []; // TODO
}


module.exports = {
  id: 'infa_chart',
  group: 'Custom Component',
  title: 'Infa Chart',
  jsonSchema: {
    description: 'Chart type is defined using the type property. Currently there are 2 options available; "doughtnut", "bar".',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'Message'
      },
      variations: {
        type: 'array',
        title: 'Alternates (optional)',
        items: {
          type: 'string',
          default: ''
        }
      },
      ...base.typingIndicators
    }
  },
  uiSchema: {
    text: {
      'ui:field': 'i18n_field',
      $subtype: 'textarea'
    },
    variations: {
      'ui:options': {
        orderable: false
      }
    }
  },
  computePreviewText: formData => formData.text && 'Infa Chart: ' + formData.text,
  renderElement: renderElement
}
