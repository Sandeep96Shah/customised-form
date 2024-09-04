import React from "react";

export interface FormValues {
    [key: string]: unknown;
}

export interface ValidationErrors {
    [key: string]: string;
}

export interface FormProps<T> {
    initialValues: T;
    onSubmit: (values: T) => void;
    validation: (values: T) => ValidationErrors;
    children: React.ReactNode;
}

export interface FormFieldProps<T> {
    values: T;
    errors: ValidationErrors;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
