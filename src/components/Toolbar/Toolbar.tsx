import React from 'react';
import PropTypes from 'prop-types';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';
import classes from './Toolbar.css';

interface Props {
  drawerClickHandler: () => void
}

const Toolbar:React.FC<Props> = ({ drawerClickHandler }) => (
  <header className={classes.Toolbar}>
    <nav className={classes.Toolbar__navigation}>
      <div className={classes.Toolbar__toggle__button}>
        <DrawerToggleButton onClick={drawerClickHandler} />
      </div>
      <div className={classes.Toolbar__logo}>
        <a href="/">Logo</a>
      </div>
      <div className={classes.Toolbar__navigation__items}>
        <ul>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Toolbar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};

export default Toolbar;
