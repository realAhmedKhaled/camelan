const controller = require('./auctionController.js');

// Default case
let result = controller.calculateWinnersBids
    ([new controller.Bid("John Doe",100),
      new controller.Bid("John Smith", 500),
      new controller.Bid("Sara Conor", 280),
      new controller.Bid("Martin Fowler", 320)],
     3);
console.log(result);

//Breaking the tie alphabetically
result = controller.calculateWinnersBids
    ([new controller.Bid("John Doe", 100),
      new controller.Bid("John Smith", 500),
      new controller.Bid("Sara Conor", 280),
      new controller.Bid("Martin Fowler", 100)],
     3);
console.log(result);

// No bids
result = controller.calculateWinnersBids([ ], 3);
console.log(result);

