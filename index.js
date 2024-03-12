import  express  from "express";
import fs, { writeFileSync,readFileSync } from 'fs';
import {format} from 'date-fns';
import { fileURLToPath } from "url";

const app = express();
const PORT = 4003;



app.get('/write-read',(req,res)=>{

    let currentdate = format(new Date(), 'dd-mm-yyyy-hh-mm')

    const filePath = `TimeStamp/${currentdate}.txt` 

    fs.writeFileSync(filePath,`${currentdate}`,"utf8")

    let data =  fs.readFileSync(filePath,"utf8")

    res.status(200).send(data)
})



app.listen(PORT,() =>{
    console.log(`running ${PORT}`);
})