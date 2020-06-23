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
    message: 'Welcome to Caverna - Solo Mode.\nPlease click on any action tile to begin round 1 of 7'
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Action Tiles
    case actionTypes.CULTIVATE:
      return {
        ...state,
        resources: {
          ...state.resources,
          emmer: (state.resources.emmer + 2 >= 9 ? 9 : state.resources.emmer + 2),
          flax: (state.resources.flax + 1 >= 9 ? 9 : state.resources.flax + 1)
        }
      };
    case actionTypes.EXCAVATION:
      return {
        ...state,
        resources: {
          ...state.resources,
          stone: (state.resources.stone + 1 >= 9 ? 9 : state.resources.stone + 1)
        }
      };
    case actionTypes.UNDERGROWTH:
      return {
        ...state,
        resources: {
          ...state.resources,
          wood: (state.resources.wood + 2 >= 9 ? 9 : state.resources.wood + 2)
        }
      };

    // Room Tiles
    case actionTypes.FOOD_CORNER:
      return {
        ...state,
        resources: {
          ...state.resources,
          food: (state.resources.food < 3 ? 3 : state.resources.food)
        }
      };
    case actionTypes.PARLOR:
      return {
        ...state,
        resources: {
          ...state.resources,
          emmer: (state.resources.emmer < 1 ? 1 : state.resources.emmer),
          flax: (state.resources.flax < 1 ? 1 : state.resources.flax),
          food: (state.resources.food < 1 ? 1 : state.resources.food),
          gold: (state.resources.gold < 1 ? 1 : state.resources.gold),
          stone: (state.resources.stone < 1 ? 1 : state.resources.stone),
          wood: (state.resources.wood < 1 ? 1 : state.resources.wood)
        }
      };
    case actionTypes.PARLOR:
      return {
        ...state,
        resources: {
          ...state.resources,
          emmer: (state.resources.emmer < 1 ? 1 : state.resources.emmer),
          flax: (state.resources.flax < 1 ? 1 : state.resources.flax),
          food: (state.resources.food < 1 ? 1 : state.resources.food),
          gold: (state.resources.gold < 1 ? 1 : state.resources.gold),
          stone: (state.resources.stone < 1 ? 1 : state.resources.stone),
          wood: (state.resources.wood < 1 ? 1 : state.resources.wood)
        }
      };
    case actionTypes.SHELF:
      return {
        ...state,
        resources: {
          ...state.resources,
          emmer: (state.resources.emmer < 2 ? 2 : state.resources.emmer),
          flax: (state.resources.flax < 2 ? 2 : state.resources.flax),
          stone: (state.resources.stone < 2 ? 2 : state.resources.stone),
          wood: (state.resources.wood < 2 ? 2 : state.resources.wood)
        }
      };
    case actionTypes.TUNNEL:
      return {
        ...state,
        resources: {
          ...state.resources,
          food: (state.resources.food + 2 >= 9 ? 9 : state.resources.food + 2),
          stone: (state.resources.stone < 3 ? state.resources.stone + 1 : state.resources.stone)
        }
      };

    default:
      return state;
  }
};

export default reducer;
