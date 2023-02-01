const express = require("express")
const mongoose = require("mongoose")
const route = require('../src/route/route');
const app = express()


const cors = require('cors')



app.use(express.json())

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://yashsingh:8i1kfhU26wUDrXft@cluster0.e53dru9.mongodb.net/companyProjectDrop",
{ useNewUrlParser: true })
.then(() => console.log("MongoDB is connected"))
.catch((error) => console.log(error))


app.use(cors())

app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
	console.log('Express app running on port ' + (process.env.PORT || 3001))})