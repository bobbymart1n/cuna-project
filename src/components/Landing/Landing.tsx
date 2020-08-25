import React, { FC, SyntheticEvent, useState } from 'react';

import Input from '../Input/Input';

import { StyledLanding, StyledLandingButton } from './Landing.styles';

const Landing: FC = () => {
  const [state, setState] = useState({});

  const onChange = (event: SyntheticEvent) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    return setState({
      ...state,
      [name]: value,
    })
  }

  const validateData = (creditScore: number, price: number, income: number) => {
    if (price > income * 0.2 || creditScore < 600) {
      return false
    }

    return true
  }
  
  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    // I would use fetch here with a POST method, but to keep things brief, I've left this as a resolved promise.
    const data = await Promise.resolve(state);
    
    if(validateData(parseInt(data.creditScore, 10), parseInt(data.price, 10), parseInt(data.income, 10))) {
      // Show success
    } else {
      // Show disqualification
    }
    
    // return data;
  }

  return (
    <StyledLanding>
      <form onChange={onChange} onSubmit={onSubmit}>
        <Input type='number' placeholder='Purchase Price' name='price' />
        <Input type='text' placeholder='Auto Make' name='make' />
        <Input type='text' placeholder='Auto Model' name='model' />
        <Input type='number' placeholder='Estimated Yearly Income' name='income' />
        <Input type='number' placeholder='Estimated Credit Score' name='creditScore' />
        <StyledLandingButton type='submit'>Calculate</StyledLandingButton>
      </form>
    </StyledLanding>
  );
}
export default Landing;