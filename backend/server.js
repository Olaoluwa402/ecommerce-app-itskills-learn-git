
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
// import {connectDB} from './config/db.js'
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({limit:'50mb'}))

const port = 6000
const host = '127.0.0.1'


app.get('/', async(req, res)=> {
    const msg =  "server is up"

    try{
        res.status(200).json({
            status: 'good',
            msg
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            error: err
        })
    }
})

app.listen(port, (err)=>{
    if(err) throw(err)
    console.log('server successfully staged'.bgGreen)
})

// const start = async(port) => {
//     try{

//         const conn = await connectDB();
//         app.listen(port, (err)=>{
//             if(err){
//                console.log(err)
//                return
//             }
//             console.log('server is running'.bgCyan)
//        })
//        console.log(process.env.PORT)

//        console.log(`Database is up and running on ${conn.connection.host}`.bgGreen.underline)
//     }catch(err){
//       console.log(`${err}`.bgRed.underline)
//     }
// }

