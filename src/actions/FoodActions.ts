import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import { DefaultState } from '../reducers/FoodReducer';

const GetFoods = ():ThunkAction<void,
DefaultState,
unknown,
Action> => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FOOD_START,
    });

    const response = await axios.get(`${process.env.API}/food.json`);

    if (response) {
      dispatch({
        type: actionTypes.FOOD_SUCCESS,
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.FOOD_FAIL,
    });
  }
};

export default GetFoods;
