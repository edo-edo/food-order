import React from 'react';

import Food from './Food/Food';
import classes from './Foods.css';

const testArray = [
  {
    id: 1,
    title: 'xinkali',
    price: '14',
    quantity: 10,
    image: 'public/images/xinkali.jpg',
  },
  {
    id: 2,
    title: 'hamburgeri',
    price: '23',
    quantity: 1,
    image: 'public/images/hamburger.jpg',
  },
  {
    id: 3,
    title: 'kubdari',
    price: '18',
    quantity: 1,
    image: 'public/images/kubdari.jpg',
  },
];

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
