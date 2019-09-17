## Overview
This is a custom module which includes 3 custom components with a message wrapper.
Please check the [official documentation](https://botpress.io/docs/developers/create-module/) for more informations

## Quick Start

1. Copy the contents to folder `modules\infa-module`
2. Open a terminal in the folder `modules/infa-module` and type `yarn && yarn build`
3. Edit your `out\bp\data\global\botpress.config.json` and add the module definition so it will be loaded:
	```{
		...
		"modules": [
			...
			{
			  "location": "MODULES_ROOT/infa-module",
			  "enabled": true
			}
			...
		]
		...
	}```

4. Start Botpress: `yarn start`
5. Choose any bots in your workspace, then you should see the module in the sidebar !

Please check my guide on [How to create a custom module in Botpress?](https://abhisheksimon.wordpress.com/2019/08/02/botpress-how-to-create-a-custom-module/) and [How to create a custom component in Botpress?](https://abhisheksimon.wordpress.com/2019/08/06/how-to-create-a-custom-component-in-botpress/) for more information.

## Continuous Development

When you make changes to any portion of your module, you need to build it and restart Botpress.

You can type `yarn watch` which will save you some time, since everytime you make a change, the source will be compiled immediately. You will only have to restart Botpress.
