import * as actionTypes from '../actions/actionTypes';

interface DefaultState {
  loading: boolean,
  foods: {
    id: number,
    title: string,
    price: number,
    quantity: number,
    image: string, }[]
}

const defaultState: DefaultState = {
  loading: false,
  foods: [],
};

const FoodReducer = (state: DefaultState = defaultState, action: any) : DefaultState => {
  switch (action.type) {
    case actionTypes.FOOD_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.FOOD_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FOOD_SUCCESS:

      return {
        ...state,
        loading: false,
        foods: action.payload,
      };
    default:
      return state;
  }
};

export default FoodReducer;
