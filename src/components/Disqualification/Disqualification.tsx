import React, { FC } from 'react';

import { StyledDisqualification } from './Disqualification.styles';

const Disqualification: FC = () => (
  <StyledDisqualification>
    <h1>I'm sorry, you don't qualify at this time.</h1>
    <p>Please contact customer server at <a href='tel:555-867-5309'>555-867-5309</a></p>
  </StyledDisqualification>
);

export default Disqualification;