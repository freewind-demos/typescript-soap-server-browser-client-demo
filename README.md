TypeScript Soap Server and Client Demo
======================================

跟java版的不同，这里不能自动产生wsdl，需要事先准备好相应的wsdl文件，比较麻烦。

不过client端，由于不需要类型，所以不像java版那样需要生成相应的接口，在这里直接写代码调用即可。

需要注意：

1. 在server.ts中定义的service结构中的名字，需要跟wsdl完全一一对应上，否则不能正常访问。
2. wsdl中还包含了端口号，也要一致


## 启动server

```
npm install
npm run server
```

## node下的soap client，使用了`soap`库

```
npm run client:node
```

注意，`soap`库中的client不能在browser中使用，因为内部使用了很多node中的模块。

## browser中的soap client, 使用了`browser-soap`库

```
npm run client:browser
```
