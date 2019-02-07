import * as  soap from 'soap';

const url = 'http://localhost:2222/hello?wsdl';

soap.createClient(url, function (err, client: any) {
  console.log('err:', err);
  console.log('client.keys:', Object.keys(client));

  client.hello({"arg0": 'soap'}, function (err: any, result: any) {
    console.log('err:', err);
    console.log('result:', JSON.stringify(result));
  });
});
