import React, { FC } from 'react';

import { StyledInput } from './Input.styles';

type Props = {
  placeholder?: string;
  name: string;
  type: string;
}

const Input: FC<Props> = ({ placeholder, name, type }) => (
  <StyledInput type={type} placeholder={placeholder} name={name} required />
);

export default Input;