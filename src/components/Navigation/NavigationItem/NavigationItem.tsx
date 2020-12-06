import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
  title: string;
}

const NavigationItem: React.FC<Props> = ({ title }) => (
  <li>{title}</li>
);

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationItem;
