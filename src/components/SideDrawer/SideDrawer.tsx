import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import classes from './SideDrawer.css';

interface Props{
  show: boolean
}

const SideDrawer:React.FC<Props> = ({ show }) => {
  const sideDrawerStyle = classNames({
    [classes.Side__drawer]: true,
    [classes.Side__drawer__open]: show,
  });

  return (
    <nav className={sideDrawerStyle}>
      <ul>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default SideDrawer;
