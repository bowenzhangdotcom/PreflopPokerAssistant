import {RFI} from './RangeDefinitions/rfi.js';
import {FOR} from './RangeDefinitions/FOR/for.js';
import {F3B} from './RangeDefinitions/F3B/f3b.js';
import {NA} from './RangeDefinitions/na.js';

//[Chart_Type][Hero Position][Villian Position]['range']['chart']
//RFI = Raise First In, for unopened pots
//FOR = Facing Open Raise, when a villian RFIs with intermediate folders
//F3B = Facing 3bet, when Hero RFIs and is 3bet
export const ChartDatabase = {
    NA,
    RFI,
    FOR,
    F3B
};