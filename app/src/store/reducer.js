import * as actionTypes from './actions';

const initialState = {
    resources: {
        emmer: 1,
        flax: 1,
        food: 1,
        gold: 1,
        stone: 1,
        wood: 1
    },
    status: {
        message: "Welcome to Caverna - Solo Mode.\nPlease click on any action tile to begin round 1 of 7"
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CULTIVATE:
            return {
              ...state,
              resources: {
                ...state.resources,
                emmer: (state.resources['emmer'] + 2 >= 9 ? 9 : state.resources['emmer'] + 2),
                flax: (state.resources['flax'] + 1 >= 9 ? 9 : state.resources['flax'] + 1)
              }
            };
        case actionTypes.EXCAVATION:
            return {
              ...state,
              resources: {
                ...state.resources,
                stone: (state.resources['stone'] + 1 >= 9 ? 9 : state.resources['stone'] + 1)
              }
            };
        case actionTypes.UNDERGROWTH:
            return {
              ...state,
              resources: {
                ...state.resources,
                wood: (state.resources['wood'] + 2 >= 9 ? 9 : state.resources['wood'] + 2)
              }
            };
        default:
            return state;
    }
};

export default reducer;
