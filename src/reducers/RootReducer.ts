import { combineReducers } from 'redux';
import FoodReducer from './FoodReducer';

const RootReducer = combineReducers({
  foods: FoodReducer,
});

export default RootReducer;
