import {cardRank, numCard} from './rank.js';
import {validateCard, validateHandFormat, validateRangeSuit} from './validation.js';

export class RangeHand {
    constructor(input) {
        const hand = input.toString()
        const high = hand[0].toUpperCase()
        const kicker = hand[1].toUpperCase()
        const suit = hand[2] || 'a';
        validateHandFormat(high,kicker);
        this.high = validateCard(high)
        this.kicker = validateCard(kicker)
        this.suit = validateRangeSuit(suit)
        this.highRank = cardRank[this.high];
        this.kickerRank = cardRank[this.kicker];
    };

    isPair() {
        return (this.suit === 'a' && this.high === this.kicker);
    };
    
    isConnector() {
        return (this.highRank - this.kickerRank === 1);
    };

    getHighKickerSuit() {
        return (this.high + this.kicker + this.suit);
    };

    getHighKicker() {
        return (this.high + this.kicker);
    }
};

//Return an array of pairs between minPair and maxPair
const generatePairRange = (minPair, maxPair='AA') => {
    const bottomHand = new RangeHand(minPair);
    const topHand = new RangeHand(maxPair);
    const pairRange = [];
    let currentPair = cardRank[bottomHand.high];
    while (currentPair <= cardRank[topHand.high]) {
        pairRange.push(numCard[currentPair].repeat(2));
        currentPair += 1;
    };
    return pairRange
};

//Return an array of connectors between minHand and maxHand
const generateConnectorRange = (minHand, maxHand='AK') => {
    const bottomHand = new RangeHand(minHand.toString());
    const topHand = new RangeHand(maxHand.toString());
    if (bottomHand.isConnector() && topHand.isConnector()) {
        let minHighRank = bottomHand.highRank;
        let minKickRank = bottomHand.kickerRank;
        let maxHighRank = topHand.highRank;
        let maxKickRank = topHand.kickerRank;
        let cardRange = []
        
        while (minHighRank <= maxHighRank && minKickRank <= maxKickRank) {
            if (bottomHand.suit === 'a') {
                cardRange.push(numCard[minHighRank] + numCard[minKickRank] + 's');    
                cardRange.push(numCard[minHighRank] + numCard[minKickRank] + 'o');    
            } else {
                cardRange.push(numCard[minHighRank] + numCard[minKickRank] + bottomHand.suit);
            };
            minHighRank +=1;
            minKickRank +=1;
        };
        return cardRange;
    } else {
        throw new Error('Invalid Connector Range');
    };
};

//todo: fix this
//Return an array of hands between minHand's kicker and maxHand's kicker
//Prereq: High card for both hands is the same
//E.g. A2s-A5s returns [A2s, A3s, A4s, A5s]
const generateKickerRange = (minHand,maxHand='na') => {
    const bottomHand = new RangeHand(minHand);
    let cardRange = []; 
    let highRank = bottomHand.highRank;
    let kickRank = bottomHand.kickerRank;
    let maxKickRank = highRank;

    if (maxHand !== 'na') {
        let topHand = new RangeHand(maxHand);
        if (bottomHand.high !== topHand.high) {
            throw new Error('Invalid kicker range interval');
        };
        maxKickRank = topHand.kickerRank + 1;
    };

    while (kickRank < maxKickRank) {
        if (bottomHand.suit === 'a') {
            cardRange.push(numCard[highRank] + numCard[kickRank] + 's');
            cardRange.push(numCard[highRank] + numCard[kickRank] + 'o');
        } else {
            cardRange.push(numCard[highRank] + numCard[kickRank] + bottomHand.suit);
        };
        kickRank += 1;
    };
    return cardRange;
};

//Uses a array of shorthand ranges to return a composite range
//examples of valid inputs: 'TT+, aj, 22, 66-99, Jts, jto'
export const generateCompositeRange = (shorthand) => {
    const shorthandArr = shorthand.split(',')
    let cardRange = [];
    for(let i = 0; i < shorthandArr.length; i++) {
        const e = shorthandArr[i].replace(/\s+/g, '');
        if ((e.length<4) && (e.substr(-1) !== '+')) {
            const hand = new RangeHand(e);
            if (hand.isPair()) {
                cardRange.push(hand.getHighKicker());
            } else if (hand.suit === 'a'){
                cardRange.push(hand.getHighKicker()+'s');
                cardRange.push(hand.getHighKicker()+'o');
            } else {
                cardRange.push(hand.getHighKickerSuit());
            }
        } else if (e.substr(-1) === '+') {
            const hand = new RangeHand(e.slice(0,-1));
            if (hand.isPair()) {
                cardRange = cardRange.concat(generatePairRange(hand.getHighKicker()));
            } else if (hand.isConnector()) {
                cardRange = cardRange.concat(generateConnectorRange(hand.getHighKickerSuit()));
            } else {
                cardRange = cardRange.concat(generateKickerRange(hand.getHighKickerSuit()));
            };
        } else {
            const handArr = e.split('-');
            console.log(handArr);
            const handOne = new RangeHand(handArr[0]);
            const handTwo = new RangeHand(handArr[1]); 
            let minHand;
            let maxHand;

            if (handOne.kickerRank > handTwo.kickerRank) {
                minHand = handTwo;
                maxHand = handOne;
            } else {
                minHand = handOne;
                maxHand = handTwo;
            };
            if (minHand.isPair() && maxHand.isPair()) {
                cardRange = cardRange.concat(generatePairRange(minHand.getHighKicker(), maxHand.getHighKicker()));
            } else if (minHand.isConnector() && maxHand.isConnector()) {
                cardRange = cardRange.concat(generateConnectorRange(minHand.getHighKickerSuit(), maxHand.getHighKickerSuit()));
            } else {
                cardRange = cardRange.concat(generateKickerRange(minHand.getHighKickerSuit(), maxHand.getHighKickerSuit()));
            };
        };
    };
    return cardRange;
};