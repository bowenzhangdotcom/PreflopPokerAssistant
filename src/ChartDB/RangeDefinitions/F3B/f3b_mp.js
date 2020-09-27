import {RangeChart} from '../chart.js';

let F3Bmp_co = new RangeChart();
F3Bmp_co.setRaise('KK+');
F3Bmp_co.setCall('QQ-JJ, AQs+, AQo+');

let F3Bmp_bu = new RangeChart();
F3Bmp_bu.setRaise('KK+');
F3Bmp_bu.setCall('QQ-JJ, AQs+, AQo+');

let F3Bmp_sb = new RangeChart();
F3Bmp_sb.setRaise('KK+');
F3Bmp_sb.setCall('QQ-JJ, AQs+, AQo+');

let F3Bmp_bb = new RangeChart();
F3Bmp_bb.setRaise('KK+');
F3Bmp_bb.setCall('QQ-JJ, AQs+, AQo+');

export const F3B_MP = {
    'CO': {
        'name': 'Facing a 3bet from Cutoff after RFI in Middle Position',
        'range': F3Bmp_co
    },
    'BU': {
        'name': 'Facing a 3bet from Button after RFI in Middle Position',
        'range': F3Bmp_bu
    },
    'SB': {
        'name': 'Facing a 3bet from Small Blind after RFI in Middle Position',
        'range': F3Bmp_sb
    },
    'BB': {
        'name': 'Facing a 3bet from Big Blind after RFI in Middle Position',
        'range': F3Bmp_bb
    },
};