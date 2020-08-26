import React, { FC, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button/Button';
import Input from '../Input/Input';

import { StyledNewAccount } from './NewAccount.styles';

const NewAccount: FC = () => {
  const [ state, setState ] = useState({});
  const [ validEmail, setValidEmail ] = useState(false);
  const [ validPassword, setValidPassword ] = useState(false);
  const history = useHistory();
  
  const usernameValidation = (username: string) => {
    // Basic regex that looks for typical email address format, this definitely isn't the best regex for checking this
    const usernameRegex = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})');

    const usernameVal = usernameRegex.test(username);
    
    return setValidEmail(usernameVal)
  }

  

  const passwordValidation = (password: string) => {
    // Create a new regular expression that looks for length, character, capitolization, and symbols without those used by regex
    const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})');
    
    const passwordVal = passwordRegex.test(password);    

    return setValidPassword(passwordVal)
  }

  const onChange = (event: SyntheticEvent) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'password' || name === 'confirmPassword') {
      passwordValidation(value)
    } else {
      usernameValidation(value)
    }

    setState({
      ...state,
      [name]: value
    })
  }

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    return history.push('/success');
  }

  return (
    <StyledNewAccount onChange={onChange} onSubmit={onSubmit}>
      <h1>Create a new account:</h1>
      <Input type='text' placeholder='Username' name='username' hasError={state.username && state.username.length > 0 && !validEmail} />
      <Input type='password' placeholder='Password' name='password' hasError={state.password && state.password.length > 0 && !validPassword} />
      <Input type='password' placeholder='Confirm Password' name='confirmPassword' hasError={state.confirmPassword && state.confirmPassword.length > 0 && state.password !== state.confirmPassword} />
      <Button type='submit' text='Submit' />
    </StyledNewAccount>
  )
}

export default NewAccount;