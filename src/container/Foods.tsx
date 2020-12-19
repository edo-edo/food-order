import React from 'react';

import Food from './Food/Food';
import classes from './Foods.css';

const Foods:React.FC = () => (
  <div className={classes.Foods}>
    {
      testArray.map((food) => (
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

export default Foods;
