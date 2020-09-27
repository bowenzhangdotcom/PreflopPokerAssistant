import {RangeChart} from '../chart.js';

let FORsb_ep = new RangeChart();
FORsb_ep.setRaise('KK+, T9s, 98s, 87s');
FORsb_ep.setCall('QQ-88, AQs+, AQo+');

let FORsb_mp = new RangeChart();
FORsb_mp.setRaise('KK+, T9s, 98s, 87s');
FORsb_mp.setCall('QQ-88, AQs+, AQo+');

let FORsb_co = new RangeChart();
FORsb_co.setRaise('QQ+, AKs, A5s-A2s, AKo, T9s, 98s, 87s');
FORsb_co.setCall('JJ-66, AQs-A9s, AQo-ATo, KTs+, KQo, QTs+, JTs');

let FORsb_bu = new RangeChart();
FORsb_bu.setRaise('QQ+, AKs, A5s-A2s, AKo, T9s, 98s, 87s');
FORsb_bu.setCall('JJ-66, AQs-A9s, AQo-ATo, KTs+, KQo, QTs+, JTs');


export const FOR_SB = {
    'EP': {
        'name': 'Facing an Open Raise from Early Position: Small Blind',
        'range': FORsb_ep
    },
    'MP': {
        'name': 'Facing an Open Raise from Middle Position: Small Blind',
        'range': FORsb_mp
    },
    'CO': {
        'name': 'Facing an Open Raise from Cutoff: Small Blind',
        'range': FORsb_co
    },
    'BU': {
        'name': 'Facing an Open Raise from Button: Small Blind',
        'range': FORsb_bu
    },
};