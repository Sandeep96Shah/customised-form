import React, { ReactElement, useState } from 'react';
import { FormFieldProps, FormProps, FormValues, ValidationErrors } from '../../Types';

const CustomFrom = <T extends FormValues>({initialValues, onSubmit, validation, children}: FormProps<T>) => {
    const [formState, setFormState] = useState<T>(initialValues);
    const [errors, setErrors] = useState<ValidationErrors>({});
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event?.target || {};
        
        setFormState({
            ...formState,
            [name]: value,
        })
        
        if(errors[name]){
            setErrors((previousErrors) => ({
                ... previousErrors,
                [name]: ""
            }))
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {    
        event?.preventDefault();
        const validationErrors = validation(formState);
        if(Object.keys(validationErrors)?.length === 0){
            onSubmit(formState);
        }else {
            setErrors(validationErrors);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as ReactElement<FormFieldProps<T>>, {
              values: formState,
              errors,
              handleChange,
              handleSubmit,
            })
          : child
      )}
    </form>
    )
}

export default CustomFrom;