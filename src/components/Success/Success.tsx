import React, { FC } from 'react';

import { StyledSuccess } from './Success.styles';

const Success: FC = () => (
  <StyledSuccess>
    <h1>Success!</h1>
    <p>We've sent an email confirmation to the email provided</p>
  </StyledSuccess>
);

export default Success;