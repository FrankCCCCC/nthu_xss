const express = require("express")
const fs = require("fs")
const { type } = require("os")
const port = process.env.PORT || 80

const app = express()

app.get("/", (req, res) => {
    console.log(`${JSON.stringify(req.query)}`)
    fs.appendFile('./out.txt', `${JSON.stringify(req.query)}\n`, (err) => {
		if (err) throw err
    })
    
    res.status(200)
    res.send("Ok")
})

app.get("/logs", (req, res) => {
    fs.readFile("./out.txt", (err, data) => {
        if(err){
            res.send("Error");
        }else{
            let str = data.toString()
            console.log(typeof(str))
            console.log(str)
            res.send(str)
        }
    })
})

app.listen(port, () => {
    console.log(`MSG_BOARD Server is Listening on ${port}`)
})