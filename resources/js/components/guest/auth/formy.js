import React, { useState } from "react";

const Formy = (props) => {
    const [values, setValues] = useState(props.initialValues);
    const fieldProps = Object.keys(values).reduce((acc, nxt) => {
        acc = {
            ...acc,
            [nxt]: {
                value: values[nxt],
                onChange: (e) => {
                    e.persist();
                    setValues((vals) => ({
                        ...vals,
                        [nxt]: e.target?.value,
                    }));
                },
            },
        };
        return acc;
    }, {});
    const setValue = (field, value) => {
        setValues((vals) => ({
            ...vals,
            [field]: value,
        }));
    };
    const submitForm = (e) => {
        e.preventDefault();
        props.onSubmit(values);
    };
    return (
        <form onSubmit={submitForm}>
            {props.children(fieldProps, { setValue })}
        </form>
    );
};

export default Formy;
