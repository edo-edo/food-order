import React from 'react';

import Food from './Food/Food';
import classes from './Foods.css';

const testArray = [
  {
    id: 1,
    title: 'xinkali',
    price: '14',
    image: '../../assets/images/xinkali.jpg',
  },
  {
    id: 2,
    title: 'hamburgeri',
    price: '23',
    image: '../../assets/images/hamburger.jpg',
  },
  {
    id: 3,
    title: 'kubdari',
    price: '18',
    image: '../../assets/images/kubdari.jpg',
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
          image={food.image}
        />
      ))
    }
  </div>
);

export default Foods;
