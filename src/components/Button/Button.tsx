import React, { FC } from 'react';

import { StyledButton } from './Button.styles';

type Props = {
  type: string;
  text: string;
}

const Button: FC<Props> = ({ type, text }) => (
  <StyledButton type={type}>{text}</StyledButton>
);

export default Button;