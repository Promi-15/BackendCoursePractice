import express from 'express'
import cors from 'cors'

const app = express();

const PORT = 5000;

app.use(cors());//backend and front end jeno alada port e chalu na hy tai cors use hy
const products = [
    {
        id:1,name : 'shampoo' ,price:40
    },
    {id:2,name:'soap',price:20}
]

app.get('/api/message', (req, res) => {
    res.json({message : "hello promi"});
})

app.get('/api/products', (req,res) => {
    res.json(products)
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})