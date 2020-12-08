import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default SideDrawer;
