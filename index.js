const express = require("express")
const timeout = require("connect-timeout")
const fs = require("fs")
const { type } = require("os")

const port = process.env.PORT || 80

const app = express()
var record = "";

app.use(timeout("5s"))

app.get("/", (req, res) => {
    console.log(`${JSON.stringify(req.query)}`)
    // fs.appendFile('./out.txt', `${JSON.stringify(req.query)}\n`, (err) => {
	// 	if (err) throw err
    // })

    record = record + `${JSON.stringify(req.query)}\n`
    
    // res.status(200)
    res.send("Ok")
})

app.get("/logs", (req, res) => {
    // fs.readFile("./out.txt", (err, data) => {
    //     if(err){
    //         res.send("Error");
    //     }else{
    //         let str = data.toString()
    //         console.log(typeof(str))
    //         console.log(str)
    //         res.send(str)
    //     }
    // })
    let str = record.toString()
    // console.log(typeof(str))
    // console.log(str)
    res.send(str)
})

app.listen(port, () => {
    console.log(`MSG_BOARD Server is Listening on ${port}`)
})