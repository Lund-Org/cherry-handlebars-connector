# Cherry Handlebars Connector

A plugin to use handlebars as the html renderer in cherry 🍒

## Installation

Use the package manager [npm](http://npmjs.com) to install Cherry Handlebars Connector.

```bash
npm install @lund-org/cherry-handlebars-connector
```

## Usage

Checkout the example in the [example folder of cherry](https://github.com/Lund-Org/cherry/tree/master/example/02-multiple-response-type/).
Of course, you need a cherry app to use this connector :

```javascript
const Cherry = require('cherry')
const CherryHandlebarsConnector = require('cherry-handlebars-connector')

const cherry = new Cherry()
cherry.configure(routes, [], options)
// The following line is the important one
cherry.registerPlugin(CherryHandlebarsConnector)
cherry.start(options)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/Lund-Org/cherry-handlebars-connector/blob/master/LICENSE)
