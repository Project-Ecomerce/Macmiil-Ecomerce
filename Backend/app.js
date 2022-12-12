const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors')


const product = require('./routes/productRouter')
const user = require('./routes/userRouter')



// middlewares
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/product',product)
app.use( '/api/user',user)


// LISTEN THE SERVER
app.listen(port, () => console.log('Serving running on port 3000 '));