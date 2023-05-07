const express = require("express");
const cors = require('cors');




const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser')

const dashboardRouter = require('./routes/dashboard.routes')

const app=express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req, res)=> res.send('Server is running now'))
app.use('/api', dashboardRouter)

app.listen(PORT, () => console.log(`Server started ItS OKss ${PORT}`))
