import {RangeChart} from '../chart.js';

let FORco_ep = new RangeChart();
FORco_ep.setRaise('KK+, T9s, 98s, 87s');
FORco_ep.setCall('QQ-77, AQs+, AQo+');

let FORco_mp = new RangeChart();
FORco_mp.setRaise('KK+, T9s, 98s, 87s');
FORco_mp.setCall('QQ-77, AQs+, AQo+');

export const FOR_CO = {
    'EP': {
        'name': 'Facing an Open Raise from Early Position: Cutoff',
        'range': FORco_ep
    },
    'MP': {
        'name': 'Facing an Open Raise from Middle Position: Cutoff',
        'range': FORco_mp
    },
};