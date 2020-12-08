import * as React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

interface Props {
  onClick: () => void
}

const Backdrop:React.FC<Props> = ({ onClick }) => (
  <div
    role="button"
    tabIndex={0}
    aria-label="backdrop"
    className={classes.Backdrop}
    onClick={onClick}
    onKeyPress={onClick}
  />
);

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
