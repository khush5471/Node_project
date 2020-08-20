//importing the libraries in this file which are needed
const express=require('express')
const cors=require('cors')
const httpHandler=require('./src/HttpHandler')
const dbHandler=require('./src/DatabaseHandler')
const bodyParser=require('body-parser')

const port=3010
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(cors())

app.get('/',httpHandler.getRoot)

app.get('/pratik',dbHandler.getCatagoryList)

app.post('/insert',dbHandler.insertData)

app.listen(port,console.log("Connected on Port: http://localhost:%s", port))