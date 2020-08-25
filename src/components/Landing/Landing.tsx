import React, { FC, SyntheticEvent, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Input/Input';

import { StyledLanding, StyledLandingButton, StyledLandingHeading, StyledLandingMarketingText } from './Landing.styles';

const Landing: FC = () => {
  const history = useHistory();

  const reducer = (state, action) => {
    switch(action.type) {
      case 'CHANGE_INPUT': {
        const name = action.target.name;
        const value = action.target.value;

        return {
          ...state,
          [name]: value,
        }
      }
      default: 
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {});

  const onChange = (event: SyntheticEvent) => {
    dispatch({
      type: 'CHANGE_INPUT',
      target: event.target,
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
    let data;

    if (parseInt(state.price, 10) > 1000000) {
      data = await Promise.reject(console.error('Bad Request'))
    } else {
      data = await Promise.resolve(state);
    }
    
    if (data && validateData(parseInt(data.creditScore, 10), parseInt(data.price, 10), parseInt(data.income, 10))) {
      history.push('/new-account')
    } else {
      history.push('/disqualified')
    }
  }

  return (
    <StyledLanding>
      <StyledLandingHeading>Auto Loan Calculator</StyledLandingHeading>
      <StyledLandingMarketingText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledLandingMarketingText>
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