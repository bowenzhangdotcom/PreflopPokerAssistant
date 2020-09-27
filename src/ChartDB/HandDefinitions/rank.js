//Rank for each poker card preflop
export const cardRank = {
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "T":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14
};

//Reverse of cardRank, assigns a card to rank
export const numCard = {
    2:"2",
    3:"3",
    4:"4",
    5:"5",
    6:"6",
    7:"7",
    8:"8",
    9:"9",
    10:"T",
    11:"J",
    12:"Q",
    13:"K",
    14:"A"
}

//Valid suits for a poker card
export const Suits = {
    "c":1,
    "s":1,
    "d":1,
    "h":1
};

//Valid suits for a range description
//s == suited, o == off-suit
export const RangeSuits = {
    "s":1,
    "o":1,
    "a":1
};

//Valid actions to take in a game
export const Actions = {
    "Call":1,
    "Raise":1,
    "Fold":1,
    "DynamicOpen":1,
    "DynamicFold":1,
    "DynamicCall":1,
    "3bet":-1,
    "4bet":-1,
    "Post":-1,
}