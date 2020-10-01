import {cardRank, RangeSuits, Actions} from './rank.js';


export const validateCard = (card) => {
    if (card in cardRank) {
        return card;
    } else {
        throw new Error('Invalid card');
    };
};

export const validateHandFormat = (highCard, kicker) => {
    if (cardRank[highCard] >= cardRank[kicker]) {
        return true;
    } else {
        throw new Error('Invalid hand format, kicker is greater than high card');
    };
};

export const validateRangeSuit = (suit) => {
    if (RangeSuits[suit] === 1) {
        return suit;
    } else {
        throw new Error('Invalid range suit symbol');
    };
};

export const validateAction = (action) => {
    if (Actions[action] === 1) {
        return action;
    } else {
        throw new Error('Invalid action');
    }
}