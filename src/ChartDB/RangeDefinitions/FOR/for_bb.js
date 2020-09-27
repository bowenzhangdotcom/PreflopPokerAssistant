import {RangeChart} from '../chart.js';

let FORbb_ep = new RangeChart();
FORbb_ep.setRaise('KK+, T9s, 98s, 87s');
FORbb_ep.setCall('QQ-88, AQs+, AQo+');

let FORbb_mp = new RangeChart();
FORbb_mp.setRaise('KK+, T9s, 98s, 87s');
FORbb_mp.setCall('QQ-88, AQs+, AQo+');

let FORbb_co = new RangeChart();
FORbb_co.setRaise('JJ+, AQs+, A9s-A2s, AKo, T9s, 98s, 87s, 76s, 65s');
FORbb_co.setCall('TT-22, AJs-ATs, AQo-ATo, K9s+, KJo+, Q9s+, QJo, J9s+');

let FORbb_bu = new RangeChart();
FORbb_bu.setRaise('JJ+, AQs+, A9s-A2s, AKo, T9s, 98s, 87s, 76s, 65s');
FORbb_bu.setCall('TT-22, AJs-ATs, AQo-ATo, K9s+, KJo+, Q9s+, QJo, J9s+');

let FORbb_sb = new RangeChart();
FORbb_sb.setRaise('JJ+, AQs+, A9s-A2s, AKo, T9s, 98s, 87s, 76s, 65s');
FORbb_sb.setCall('TT-22, AJs-ATs, AQo-ATo, K9s+, KJo+, Q9s+, QJo, J9s+');

export const FOR_BB = {
    'EP': {
        'name': 'Facing an Open Raise from Early Position: Big Blind',
        'range': FORbb_ep
    },
    'MP': {
        'name': 'Facing an Open Raise from Middle Position: Big Blind',
        'range': FORbb_mp
    },
    'CO': {
        'name': 'Facing an Open Raise from Cutoff: Big Blind',
        'range': FORbb_co
    },
    'BU': {
        'name': 'Facing an Open Raise from Button: Big Blind',
        'range': FORbb_bu
    },
    'SB': {
        'name': 'Facing an Open Raise from Small Blind: Big Blind',
        'range': FORbb_sb
    }
};