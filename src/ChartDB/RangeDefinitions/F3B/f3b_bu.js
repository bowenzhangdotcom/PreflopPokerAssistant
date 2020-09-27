import {RangeChart} from '../chart.js';

let F3Bbu_sb = new RangeChart();
F3Bbu_sb.setRaise('JJ+, AKs, AKo');
F3Bbu_sb.setCall('TT-66, AQs-ATs, AQo-AJo, KJs+, KQo, QJs');

let F3Bbu_bb = new RangeChart();
F3Bbu_bb.setRaise('JJ+, AKs, AKo');
F3Bbu_bb.setCall('TT-66, AQs-ATs, AQo-AJo, KJs+, KQo, QJs');

export const F3B_BU = {
    'SB': {
        'name': 'Facing a 3bet from Small Blind after RFI in Button',
        'range': F3Bbu_sb
    },
    'BB': {
        'name': 'Facing a 3bet from Big Blind after RFI in Button',
        'range': F3Bbu_bb
    },
};