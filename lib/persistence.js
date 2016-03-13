/**
 * Created by cmt on 2/12/16.
 */

Trades = new Mongo.Collection("SummitTrades");
ValuationResults = new Mongo.Collection("ValuationResults");

addTrade = function (tradeId, notional, term, clearingHouse) {
    Trades.insert({
        tradeId: tradeId,
        notional: notional,
        term: term,
        clearingHouse: clearingHouse
    })
};

deleteAllTrades = function () {
    trades = Trades.find({});
    trades.forEach(function (trade) {
        Trades.remove({_id: trade._id});
    });
};

updateValuationResults = function (value) {
    if ((result = ValuationResults.findOne({}))) {
        ValuationResults.update({_id: result._id}, {
            $set: {value: value}
        });
    } else {
        ValuationResults.insert({value: value});
    }
};