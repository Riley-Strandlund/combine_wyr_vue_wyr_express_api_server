const express = require('express')

const path = require('path')

//import the routes in ./routes/index
const indexRouter = require('./routes/index')

//create the web application
const app = express()

//The below chunk of code tells where the static files are to run them on the Express server instead of the Vite serrver
//__dirname references the folder of the file it is typed in
const staticFilePath = path.join(__dirname, 'client', 'dist')
//express.static is told where the folder is
const staticFiles = express.static(staticFilePath)
//the one slash represents the base directory/folder
app.use('/', staticFiles)

//make the routes in index.js available to the app
app.use('/', indexRouter)

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})//setup for the server running on port 3000