import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface Props {
  className: string
}

const ToolbarContent:React.FC<Props> = ({ className }) => (
  <div className={className}>
    <ul>
      <li>
        <Link to="/">Foods</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
);

ToolbarContent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ToolbarContent;
