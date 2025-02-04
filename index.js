import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import connectDb from './config/db.js'

const port = process.env.PORT || 3000

connectDb()
.then(
    app.listen(port, ()=> {
        console.log(`port is ${port}`)
    })
)

.catch((error)=>{

    console.log(`There is an error, ${error}`)
}
)