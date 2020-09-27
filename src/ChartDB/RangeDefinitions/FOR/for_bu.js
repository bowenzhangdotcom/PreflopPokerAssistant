import {RangeChart} from '../chart.js';

let FORbu_ep = new RangeChart();
FORbu_ep.setRaise('KK+, T9s, 98s, 87s');
FORbu_ep.setCall('QQ-55, ATs+, AQo+, KJs+, KQo, QJs');

let FORbu_mp = new RangeChart();
FORbu_mp.setRaise('KK+, T9s, 98s, 87s');
FORbu_mp.setCall('QQ-55, ATs+, AQo+, KJs+, KQo, QJs');

let FORbu_co = new RangeChart();
FORbu_co.setRaise('QQ+, AKs, A5s-A2s, AKo, T9s, 98s, 87s');
FORbu_co.setCall('JJ-44, AQs-ATs, AQo-AJo, KTs+, KQo, QTs+, JTs');

export const FOR_BU = {
    'EP': {
        'name': 'Facing an Open Raise from Early Position: Button',
        'range': FORbu_ep
    },
    'MP': {
        'name': 'Facing an Open Raise from Middle Position: Button',
        'range': FORbu_mp
    },
    'CO': {
        'name': 'Facing an Open Raise from Cutoff: Button',
        'range': FORbu_co
    },
};