import {RangeChart} from './chart.js';

let RFIep = new RangeChart();
RFIep.setRaise('66+, ATs+, AJo+, KTs+, KQo, QTs+, JTs');

let RFImp = new RangeChart();
RFImp.setRaise('55+, A9s+, ATo+, K9s+, KJo+, Q9s+, QJo, J9s+, T9s');

let RFIco = new RangeChart();
RFIco.setRaise('22+, A2s+, A7o+, K8s+, KTo+, Q8s+, QTo+, J8s+, JTo, T8s+, 98s');

let RFIbu = new RangeChart();
RFIbu.setRaise('22+, A2s+, A2o+, K6s+, K7o+, Q6s+, Q7o+, J6s+, J7o+, T6s+, T7o+, 96s+, 97o+, 86s+, 87o, 76s');

let RFIsb = new RangeChart();
RFIsb.setRaise('22+, A2s+, A2o+, K6s+, K7o+, Q6s+, Q7o+, J6s+, J7o+, T6s+, T7o+, 96s+, 97o+, 86s+, 87o, 76s');

let RFIbb = new RangeChart();
RFIbb.setRaise('66+, ATs+, AJo+, KTs+, KQo, QTs+, JTs');
RFIbb.setCall('55-22, A9s-A2s, ATo-A2o, K9s-K2s, KJo-K2o, Q9s-Q2s, Q2o+, J9s-J2s, J2o+, T2s+, T2o+, 92s+, 92o+, 82s+, 82o+, 72s+, 72o+, 62s+, 62o+, 52s+, 52o+, 42s+, 42o+, 32s, 32o');

export const RFI = {
    'EP': {
        'NA': {
            'name': 'Open Raise: Early Position',
            'range': RFIep
        }
    },
    'MP': {
        'NA': {
            'name': 'Open Raise: Middle Position',
            'range': RFImp
        }
    },
    'CO': {
        'NA': {
            'name': 'Open Raise: Cutoff',
            'range': RFIco
        }
    },
    'BU': {
        'NA': {
            'name': 'Open Raise: Button',
            'range': RFIbu
        }
    },
    'SB': {
        'NA': {
            'name': 'Open Raise: Small Blind',
            'range': RFIsb
        }
    },
    'BB': {
        'NA': {
            'name': 'Isolate Limpers: Big Blind',
            'range': RFIbb
        }
    }
};