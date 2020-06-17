import * as actionTypes from './actions';

const initialState = {
    resources: {
        emmer: 1,
        flax: 1,
        food: 1,
        gold: 1,
        stone: 1,
        wood: 1
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
