const bodyParser = require('body-parser')
const fhirpath = require('fhirpath');
const express = require('express');

const axios = require('axios')
const app = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json

app.get(/.*/, async (req, res) => {
    var query = req.query
    var path = req.path;

    const response = await axios.get(
        `http://localhost:8080${path}`,
    );


    var fhirPathExpression = query.fhirPathExpression
    var resourceObject = response.data;
    var result = fhirpath.evaluate(resourceObject, fhirPathExpression)
    res.json(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})