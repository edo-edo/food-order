import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <Link to="/">Logo</Link>
      </div>
      <div className={classes.Toolbar__navigation__items}>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
