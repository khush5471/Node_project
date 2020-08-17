//importing the libraries in this file which are needed
const express=require('express')
const cors=require('cors')
const httpHandler=require('./src/HttpHandler')

const port=3010
const app=express()

app.use(cors())

app.get('/',httpHandler.getRoot)

app.listen(port,console.log("Connected on Port: http://localhost:%s", port))