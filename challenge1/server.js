const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./dbMock')

app.use(bodyParser.json());

app.post('/', (request, response) => {
    db.addBid(request.body.petId, request.body.bidderName, request.body.bid);
    response.sendStatus(200);

});

app.get('/:petId', (request, response) => {
    let x = db.getBidsForpet(request.params.petId);
    response.send(x ? x : {});
});

app.listen(3000, () => console.log(`Started server at http://localhost:3000!`));