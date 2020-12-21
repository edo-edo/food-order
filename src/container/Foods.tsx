import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import useDispatch, { ThunkDispatch } from 'redux-thunk';

import { RootStore } from '../store/Store';
import GetFoods from '../actions/FoodActions';
import Food from './Food/Food';
import classes from './Foods.css';

type IFood = {
  id: number,
  title: string,
  price: number,
  quantity: number,
  image: string,
};

interface Action {
  type: string,
  payload: IFood[]
}

interface Props {
  foods: IFood[]
  fetchFoods: () => void
}

const Foods:React.FC<Props> = ({ foods, fetchFoods }: Props) => {
  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  return (
    <div className={classes.Foods}>
      {
      foods.map((food: IFood) => (
        <Food
          key={food.id}
          title={food.title}
          price={food.price}
          quantity={food.quantity}
          image={food.image}
        />
      ))
    }
    </div>
  );
};

const mapStateToProps = ({ foods: state }: RootStore) => ({
  foods: state.foods,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  fetchFoods: () => dispatch(GetFoods()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
