import React, { FC } from 'react';
import CustomFrom from '../../shared/components/Form';
import Input from '../../shared/components/Inputs';
import { FormValues } from '../../shared/Types';
import { fields } from './constants';

const validation = (values: FormValues) => {
    const errors: Record<string, string> = {};    
  
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email as string)) {
      errors.email = 'Enter a valid email';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if ((values.password as string).length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  };


  const initialValues: FormValues = {
    name: "",
    email: "",
    password: ""
  }

  const Login: FC = () => {
    const handleFormSubmit = (values: FormValues) => {
        alert(JSON.stringify(values, null, 2));
    }
    

    return (
        <div>
            <h1>Login Form</h1>
            <CustomFrom initialValues={initialValues} onSubmit={handleFormSubmit} validation={validation}>
                {fields?.map(({name, label, type, placeholder}, index) => (
                    <Input name={name} type={type} placeholder={placeholder} label={label} key={index} />
                ))}
                <button type="submit">Click here</button>
            </CustomFrom>
        </div>
    )
  }

  export default Login;