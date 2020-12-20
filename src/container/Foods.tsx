import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GetFoods from '../actions/FoodActions';
import Food from './Food/Food';
import classes from './Foods.css';

interface Props {
  foods: {
    id: number,
    title: string,
    price: string,
    quantity: number,
    image: string, }[],
}

const Foods:React.FC<Props> = ({ foods, fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
  console.log(foods, typeof (foods));

  return (
    <div className={classes.Foods}>
      <h1>hello</h1>
      {
      foods.map((food) => (
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

const mapStateToProps = (state) => ({
  foods: state.foods,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(GetFoods()),
});

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTasks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
