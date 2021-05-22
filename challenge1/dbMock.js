let db = {};

let addBid = function(petId, bidderName, bid) {
    let bids = db[petId];
    bids = bids 
        ? bids
        : {};
    bids[bidderName] = bid;
    db[petId] = bids;
}

let getBidsForpet = function(petId) {
    return db[petId];
}

module.exports = {
    addBid : addBid,
    getBidsForpet : getBidsForpet
}