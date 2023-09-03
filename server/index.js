const express = require('express')
const cors = require("cors");
const app = express()
const port = 3001


let allowedOrigins = [
    'http://localhost:3000',
    'https://react-test1-tau.vercel.app/'
];

app.use(cors(allowedOrigins));

app.get('/', (req, res) => {
    res.send({server: "backend server working"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})