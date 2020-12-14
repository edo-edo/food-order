import React from 'react';
import PropTypes from 'prop-types';

import classes from './Food.css';
import Image from '../../assets/images/hamburger.jpg';

interface Props {
  key: number,
  title: string,
  price: string,
  image: string
}

const Food:React.FC<Props> = ({ title, price, image }) => (
  <div className={classes.Food}>
    <img alt={title} src={Image} />
    <div>
      <p>{title}</p>
    </div>
    <div className={classes.Food_footer}>
      <p>
        {`${price} $`}
      </p>
      <button type="button">order</button>
    </div>
  </div>
);

Food.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Food;
