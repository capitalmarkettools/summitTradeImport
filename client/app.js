/**
 * Created by cmt on 2/12/16.
 */

runImport = false;
counter = 0;

importTrades = function () {
    if (runImport) {
        counter++;
        notional = 21000000;
        term = 7;
        if (counter % 3 == 0) {
            notional = 17000000;
            term = 18;
        }
        if (counter % 2 == 0) {
            notional = 19000000;
            term = 19;
        }
        addTrade(tradeId = "trade" + counter, notional = notional, term = term, clearingHouse = "Morgan Stanley");
        //console.log(counter);
    }
};

setInterval(function () {
    importTrades()
}, 1000);

pricePortfolio = function () {
    value = 0;
    console.log('Start');
    st = Date.now();
    scaler = 1000000;
    trades = Trades.find({});
    numberTrades = trades.count();
    for (i = 0; i < scaler * numberTrades; i++) {
        value = value + blackScholes('c', 10, 10, 5, 0.05, 0.2 + (i / 100000000000));
    }
    end = Date.now();
    console.log('End. BS called ' + scaler * numberTrades + ' number of times');
    duration = end - st;
    console.log('Took ' + duration + ' ms');
    return value;
};