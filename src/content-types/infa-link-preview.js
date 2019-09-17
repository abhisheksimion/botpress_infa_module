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
    component: 'InfaLinkPreview',

    // Add anything else that you would want your module to process
    // ... data from the content manager forms:
    //markdown: true,
    text: data.text,
    response: {
      data
    },
    'web-style': {
      border: 'none',
      padding: '10px',
      background: 'red'
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
  id: 'infa_linkpreview',
  group: 'Custom Component',
  title: 'Infa Link Preview',
  jsonSchema: {
    description: 'Displays content of an array of KB/Docs/Video links',
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
  computePreviewText: formData => formData.text && 'Infa Link Preview: ' + formData.text,
  //computePreviewText: formData => formData.text && 'Infa text: ' + formData.text,
  renderElement: renderElement
}
