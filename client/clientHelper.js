Template.tradeList.helpers({
    trades: function () {
        //console.log("In fct");
        trades = Trades.find({}, {sort: {notional: -1}});
        //console.log(trades);
        return trades;
    },
    valuePortfolio: function () {
        if (result = ValuationResults.findOne({}))
            return result.value;
        else
            return 0;
    }
});

Template.tradeList.events({
    'click #start': function () {
        runImport = true;
    },
    'click #stop': function () {
        runImport = false;
    },
    'click #clear': function () {
        deleteAllTrades();
    },
    'click #pricePortfolio': function () {
        updateValuationResults(pricePortfolio());
    }
});

