const soap = window['browser-soap'];

soap.createClient("/hello?wsdl", function (err, client) {
  console.log('err:', err);
  console.log('client.keys:', Object.keys(client));

  client.hello({"arg0": "soap from browser"}, (err, result) => {
    console.log('err:', err);
    console.log('result', result);
    document.getElementById("result").innerText = JSON.stringify(result);
  })

});
