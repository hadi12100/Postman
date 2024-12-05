const express = require("express")
const app = express()
const userList = require("/UserList")


app.use(express.json())
//read
app.get("/users",(req,res)=>{
    res.json(userList)
})




PORT=5000
app.listen(PORT,console.log("my server is running on port",PORT))