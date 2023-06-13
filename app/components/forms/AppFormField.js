import React from 'react';
import { useFormikContext } from 'formik';

import AppInput from '../AppInput';
import ErrorMessage from './ErrorMessage';


export default function AppFormField({name, width, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}
