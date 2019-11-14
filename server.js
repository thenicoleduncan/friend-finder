const express = require('express')
const app = express()
const PORT = process.env.PORT  || 8080;
 
app.get('/', function (request, response) {
  response.send('Hello World')
})
 
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`)
});