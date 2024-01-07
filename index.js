//1 importing json server
const jsonServer=require('json-server')

//2 Create a server application
const docServer=jsonServer.create()

//3 set up path for db.json
const router=jsonServer.router('db.json')

//4 return a middilware instance used by json-server (in between request and response, json to java java to json)
const middilware=jsonServer.defaults()

//5 setup port for db.json
 const port=3001

//use in server
docServer.use(middilware)
docServer.use(router)

//6 run server(docServer)
docServer.listen(port,()=>{

    console.log("docServer listening on the port" +port);
})