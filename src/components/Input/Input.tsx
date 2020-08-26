import React, { FC } from 'react';

import { StyledInput } from './Input.styles';

type Props = {
  placeholder?: string;
  name: string;
  type: string;
  hasError?: boolean;
}

const Input: FC<Props> = ({ hasError, placeholder, name, type }) => (
  <StyledInput type={type} placeholder={placeholder} name={name} hasError={hasError} required />
);

export default Input;