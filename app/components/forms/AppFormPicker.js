import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({ items, name, numberOfColumns, placeholder, width, PickerItemComponent}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
       <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                numberOfColumns={numberOfColumns}
                width={width}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
       </>
    );
}
