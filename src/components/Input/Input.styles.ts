import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0;
  margin-top: 20px;
  border-radius: 4px;
  border: 2px solid #000000;
  font-size: 18px;
  padding-left: 16px;

  &:first-child {
    margin-top: 0;
  }
`;

export { StyledInput };