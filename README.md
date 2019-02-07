TypeScript Soap Server and Client Demo
======================================

跟java版的不同，这里不能自动产生wsdl，需要事先准备好相应的wsdl文件，比较麻烦。

不过client端，由于不需要类型，所以不像java版那样需要生成相应的接口，在这里直接写代码调用即可。

需要注意：

1. 在server.ts中定义的service结构中的名字，需要跟wsdl完全一一对应上，否则不能正常访问。
2. wsdl中还包含了端口号，也要一致


```
npm install
npm run server
npm run client:node
npm run client:browser
```

## soap client无法用于browser

因为使用了很多node中的模块。
