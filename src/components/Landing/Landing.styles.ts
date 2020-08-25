import styled from 'styled-components';

const StyledLanding = styled.div`
  max-width: 474px;
  margin: 0 auto;
  text-align: center;
`;

const StyledLandingHeading = styled.h1`
  font-size: 48px;
`;

const StyledLandingMarketingText = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const StyledLandingButton = styled.button`
  background-color: #396AC9;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
`;

export { StyledLanding, StyledLandingButton, StyledLandingHeading, StyledLandingMarketingText }