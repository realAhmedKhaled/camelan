var fetch = require('node-fetch');

const data = {
    petId: 'pet1',
    bidderName:'joh2',
    bid: '111'
}

const petId = 'pet1';

fetch('http://localhost:3000/', {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }

})
.then(response => {
    console.log("request finished with status code " + response.status)
});

fetch('http://localhost:3000/'+ petId, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
})
.then(res => {
    if(res.status != 200) {
        console.log("An unexpected error occured");
        return;
    }
    res.json().then(json => console.log(json));
});