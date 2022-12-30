import express from 'express';

const app = express();
app.use(express.json());
const port = process.env.port | 3000;

app.get('/', (req,res)=>{
    res.status(200).json({'message':'hello world'})
})

app.listen(port, ()=>{
    console.log(`server was succesfully started on port:${port}`)
})