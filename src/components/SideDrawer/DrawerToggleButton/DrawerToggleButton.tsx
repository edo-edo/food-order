import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggleButton.css';

interface Props {
  onClick: () => void
}

const DrawerToggleButton:React.FC<Props> = ({ onClick }) => (
  <button type="button" className={classes.Drawer__toggle__button} onClick={onClick}>
    <div className={classes.Toggle__Button__line} />
    <div className={classes.Toggle__Button__line} />
    <div className={classes.Toggle__Button__line} />
  </button>
);

DrawerToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DrawerToggleButton;
