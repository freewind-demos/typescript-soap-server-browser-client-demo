import * as soap from 'soap';
import * as fs from 'fs';
import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const myService = {
  HelloService: {
    HelloPort: {
      hello: function (args: {arg0: string}) {
        console.log('### args: ###', args)
        const {arg0} = args;
        return {
          'return': `Hello, ${arg0}!`
        };
      },
    }
  }
};

const wsdl = fs.readFileSync('helloService.wsdl', 'utf8');

//express server example
const app = express();

//body parser middleware are supported (optional)
app.use(bodyParser.raw({
  type: () => true // Important, otherwise the request will be rejected
}));

app.use(express.static("."));

app.listen(2222, function () {
  //and all other routes & middleware will continue to work
  const soapServer = soap.listen(app, '/hello', myService, wsdl);

  soapServer.log = function (type, data) {
    console.log(`${type}: ${data}`)
  };

  console.log('http://localhost:2222/hello');
  console.log('http://localhost:2222/hello?wsdl');

});

