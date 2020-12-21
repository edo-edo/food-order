import React from 'react';
import PropTypes from 'prop-types';

import classes from './Food.css';

interface Props {
  key: number,
  title: string,
  price: number,
  quantity: number,
  image: string,
}

const Food:React.FC<Props> = ({
  title, price, quantity, image,
}) => (
  <div className={classes.Food}>
    <img alt={title} src={image} />
    <div className={classes.Food__title}>
      <p>
        title:
        {' '}
        {title}
      </p>
      <div className={classes.Food__pieces}>
        quantity:
        {' '}
        {quantity}
      </div>
    </div>
    <div className={classes.Food_footer}>
      <div className={classes.food__dolar}>
        <p>
          {price}
        </p>
        $
      </div>
      <button type="button">order</button>
    </div>
  </div>
);

Food.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Food;
