import { Action, AnyAction } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import axios from 'axios';
import * as actionTypes from './actionTypes';

const GetFoods = ():ThunkAction<Promise<void>, string, unknown, AnyAction> => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FOOD_START,
    });

    const res = await axios.get(`${process.env.API}/food.json`);
    console.log(res);

    dispatch({
      type: actionTypes.FOOD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FOOD_FAIL,
    });
  }
};

export default GetFoods;
