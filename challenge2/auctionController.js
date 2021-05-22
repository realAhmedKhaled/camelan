let calculateWinnersBids = function(bids, availableItems) {
    let sortedBids = bids.sort(function(a, b) {
        if (a.bidPrice == b.bidPrice) 
            return a.bidder > b.bidder 
                ? 1 
                : -1;
        return a.bidPrice < b.bidPrice;
    });

    // No bids are offered.
    if (bids == null || bids.length == 0)
        return ' No Winners';

    // Assuming that if the available items are greater than the bids,
    // everyone will pay his bid
    if (availableItems >= bids.length) {
        return sortedBids.slice(0, availableItems);
    }

    let result = [];
    for(let i = 0; i < sortedBids.length; i++) {
        let currentBid = {};
        if (availableItems) {
            currentBid[sortedBids[i].bidder] = sortedBids[i + 1].bidPrice;
            availableItems--;
        }
        else {
            currentBid[sortedBids[i].bidder] = 'Lost';
        }
        result.push(currentBid);
    }
    return result;
}

class Bid {
    constructor(bidder, bidPrice) {
        this.bidder = bidder;
        this.bidPrice = bidPrice;
    }
}

module.exports = {
    calculateWinnersBids: calculateWinnersBids,
    Bid: Bid
}