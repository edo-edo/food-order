import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ToolbarContent from '../ToolbarContent/ToolbarContent';
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
    <ToolbarContent className={sideDrawerStyle} />
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default SideDrawer;
