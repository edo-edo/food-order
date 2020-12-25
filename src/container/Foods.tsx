import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootStore } from '../store/Store';
import { DefaultState } from '../reducers/FoodReducer';
import GetFoods from '../actions/FoodActions';
import Food from './Food/Food';
import Spinner from '../components/Spinner';
import classes from './Foods.css';

type IFood = {
  id: number,
  title: string,
  price: number,
  quantity: number,
  image: string,
};

type DispatchType = Dispatch<Action> & ThunkDispatch<DefaultState, unknown, Action>;

interface Props {
  loading: boolean,
  foods: IFood[]
  fetchFoods: () => void
}

const Foods:React.FC<Props> = ({ foods, fetchFoods, loading }: Props) => {
  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  if (loading) {
    return <Spinner />;
  }

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
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
  fetchFoods: () => dispatch(GetFoods()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
