import {RangeChart} from '../chart.js';

let F3Bco_bu = new RangeChart();
F3Bco_bu.setRaise('QQ+, AKs, AKo');
F3Bco_bu.setCall('JJ-88, AQs, AQo');

let F3Bco_sb = new RangeChart();
F3Bco_sb.setRaise('QQ+, AKs, AKo');
F3Bco_sb.setCall('JJ-88, AQs, AQo');

let F3Bco_bb = new RangeChart();
F3Bco_bb.setRaise('QQ+, AKs, AKo');
F3Bco_bb.setCall('JJ-88, AQs, AQo');

export const F3B_CO = {
    'BU': {
        'name': 'Facing a 3bet from Button after RFI in Cutoff',
        'range': F3Bco_bu
    },
    'SB': {
        'name': 'Facing a 3bet from Small Blind after RFI in Cutoff',
        'range': F3Bco_sb
    },
    'BB': {
        'name': 'Facing a 3bet from Big Blind after RFI in Cutoff',
        'range': F3Bco_bb
    },
};