import {cardRank, RangeSuits, Actions} from './rank.js';


export const validateCard = function(card) {
    if(card in cardRank){
        return true;
    } else {
        throw new Error("Invalid card");
    };
};

export const validateHandFormat = function(highCard, kicker) {
    if (cardRank[highCard] >= cardRank[kicker]) {
        return true;
    } else {
        throw new Error("Invalid hand format, kicker is greater than high card");
    };
};

export const validateRangeSuit = function(suit) {
    if (RangeSuits[suit] === 1) {
        return true;
    } else {
        throw new Error("Invalid range suit symbol");
    };
};

export const validateAction = function(action) {
    if (Actions[action] === 1) {
        return true;
    } else {
        throw new Error("Invalid action");
    }
}