import React from 'react';
import { ChevronDown } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';




const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      
      <select value={value} onChange={onChange}>
      
      {children}
    </select>
    </>
  );
};

export default Select;
