import {RangeChart} from '../chart.js';

let F3Bep_mp = new RangeChart();
F3Bep_mp.setRaise('KK+');
F3Bep_mp.setCall('QQ-JJ, AKs, AKo');

let F3Bep_co = new RangeChart();
F3Bep_co.setRaise('KK+');
F3Bep_co.setCall('QQ-JJ, AKs, AKo');

let F3Bep_bu = new RangeChart();
F3Bep_bu.setRaise('KK+');
F3Bep_bu.setCall('QQ-JJ, AKs, AKo');

let F3Bep_sb = new RangeChart();
F3Bep_sb.setRaise('KK+');
F3Bep_sb.setCall('QQ-JJ, AKs, AKo');

let F3Bep_bb = new RangeChart();
F3Bep_bb.setRaise('KK+');
F3Bep_bb.setCall('QQ-JJ, AKs, AKo');

export const F3B_EP = {
    'MP': {
        'name': 'Facing a 3bet from Middle Position after RFI in Early Position',
        'range': F3Bep_mp
    },
    'CO': {
        'name': 'Facing a 3bet from Cutoff after RFI in Early Position',
        'range': F3Bep_co
    },
    'BU': {
        'name': 'Facing a 3bet from Button after RFI in Early Position',
        'range': F3Bep_bu
    },
    'SB': {
        'name': 'Facing a 3bet from Small Blind after RFI in Early Position',
        'range': F3Bep_sb
    },
    'BB': {
        'name': 'Facing a 3bet from Big Blind after RFI in Early Position',
        'range': F3Bep_bb
    },
};