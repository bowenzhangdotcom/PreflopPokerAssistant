import {generateCompositeRange} from '../HandDefinitions/range.js';

//Generates a blank range
// const generateBlankCardRange = function() {
//     return generateCompositeRange(["a2+","k2+","q2+","j2+","t2+","92+","82+","72+","62+","52+","42+","32+","22+"]);
// };

export class RangeChart {
    constructor() {
        this.chart = {
            '22': 'Fold',
            '33': 'Fold',
            '44': 'Fold',
            '55': 'Fold',
            '66': 'Fold',
            '77': 'Fold',
            '88': 'Fold',
            '99': 'Fold',
            A2s: 'Fold',
            A2o: 'Fold',
            A3s: 'Fold',
            A3o: 'Fold',
            A4s: 'Fold',
            A4o: 'Fold',
            A5s: 'Fold',
            A5o: 'Fold',
            A6s: 'Fold',
            A6o: 'Fold',
            A7s: 'Fold',
            A7o: 'Fold',
            A8s: 'Fold',
            A8o: 'Fold',
            A9s: 'Fold',
            A9o: 'Fold',
            ATs: 'Fold',
            ATo: 'Fold',
            AJs: 'Fold',
            AJo: 'Fold',
            AQs: 'Fold',
            AQo: 'Fold',
            AKs: 'Fold',
            AKo: 'Fold',
            K2s: 'Fold',
            K2o: 'Fold',
            K3s: 'Fold',
            K3o: 'Fold',
            K4s: 'Fold',
            K4o: 'Fold',
            K5s: 'Fold',
            K5o: 'Fold',
            K6s: 'Fold',
            K6o: 'Fold',
            K7s: 'Fold',
            K7o: 'Fold',
            K8s: 'Fold',
            K8o: 'Fold',
            K9s: 'Fold',
            K9o: 'Fold',
            KTs: 'Fold',
            KTo: 'Fold',
            KJs: 'Fold',
            KJo: 'Fold',
            KQs: 'Fold',
            KQo: 'Fold',
            Q2s: 'Fold',
            Q2o: 'Fold',
            Q3s: 'Fold',
            Q3o: 'Fold',
            Q4s: 'Fold',
            Q4o: 'Fold',
            Q5s: 'Fold',
            Q5o: 'Fold',
            Q6s: 'Fold',
            Q6o: 'Fold',
            Q7s: 'Fold',
            Q7o: 'Fold',
            Q8s: 'Fold',
            Q8o: 'Fold',
            Q9s: 'Fold',
            Q9o: 'Fold',
            QTs: 'Fold',
            QTo: 'Fold',
            QJs: 'Fold',
            QJo: 'Fold',
            J2s: 'Fold',
            J2o: 'Fold',
            J3s: 'Fold',
            J3o: 'Fold',
            J4s: 'Fold',
            J4o: 'Fold',
            J5s: 'Fold',
            J5o: 'Fold',
            J6s: 'Fold',
            J6o: 'Fold',
            J7s: 'Fold',
            J7o: 'Fold',
            J8s: 'Fold',
            J8o: 'Fold',
            J9s: 'Fold',
            J9o: 'Fold',
            JTs: 'Fold',
            JTo: 'Fold',
            T2s: 'Fold',
            T2o: 'Fold',
            T3s: 'Fold',
            T3o: 'Fold',
            T4s: 'Fold',
            T4o: 'Fold',
            T5s: 'Fold',
            T5o: 'Fold',
            T6s: 'Fold',
            T6o: 'Fold',
            T7s: 'Fold',
            T7o: 'Fold',
            T8s: 'Fold',
            T8o: 'Fold',
            T9s: 'Fold',
            T9o: 'Fold',
            '92s': 'Fold',
            '92o': 'Fold',
            '93s': 'Fold',
            '93o': 'Fold',
            '94s': 'Fold',
            '94o': 'Fold',
            '95s': 'Fold',
            '95o': 'Fold',
            '96s': 'Fold',
            '96o': 'Fold',
            '97s': 'Fold',
            '97o': 'Fold',
            '98s': 'Fold',
            '98o': 'Fold',
            '82s': 'Fold',
            '82o': 'Fold',
            '83s': 'Fold',
            '83o': 'Fold',
            '84s': 'Fold',
            '84o': 'Fold',
            '85s': 'Fold',
            '85o': 'Fold',
            '86s': 'Fold',
            '86o': 'Fold',
            '87s': 'Fold',
            '87o': 'Fold',
            '72s': 'Fold',
            '72o': 'Fold',
            '73s': 'Fold',
            '73o': 'Fold',
            '74s': 'Fold',
            '74o': 'Fold',
            '75s': 'Fold',
            '75o': 'Fold',
            '76s': 'Fold',
            '76o': 'Fold',
            '62s': 'Fold',
            '62o': 'Fold',
            '63s': 'Fold',
            '63o': 'Fold',
            '64s': 'Fold',
            '64o': 'Fold',
            '65s': 'Fold',
            '65o': 'Fold',
            '52s': 'Fold',
            '52o': 'Fold',
            '53s': 'Fold',
            '53o': 'Fold',
            '54s': 'Fold',
            '54o': 'Fold',
            '42s': 'Fold',
            '42o': 'Fold',
            '43s': 'Fold',
            '43o': 'Fold',
            '32s': 'Fold',
            '32o': 'Fold',
            TT: 'Fold',
            JJ: 'Fold',
            QQ: 'Fold',
            KK: 'Fold',
            AA: 'Fold'
        };
        this.raise = [];
        this.call = [];
        this.fold = [];
        this.dynamicCall = [];
        this.dynamicRaise = [];
        this.dynamicFold = [];
    };

    setRaise(cardRange) {
        let handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = "Raise";
        });
        this.raise = cardRange;
        return this.chart;
    };

    setFold(cardRange) {
        let handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = "Fold";
        });
        this.fold = cardRange;
        return this.chart;
    };

    setCall(cardRange) {
        let handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = "Call";
        });
        this.call = cardRange;
        return this.chart;
    };

    setDynamicRaise(cardRange) {
        let handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = "DynamicRaise";
        });
        this.dynamicRaise = cardRange;
        return this.chart;
    };
    
    setDynamicFold(cardRange) {
        let handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = "DynamicFold";
        });
        this.dynamicFold = cardRange
        return this.chart;
    };

    setDynamicCall(cardRange) {
        let handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = "DynamicCall";
        });
        this.dynamicCall = cardRange;
        return this.chart;
    };

    getChart() {
        return this.chart
    }
};