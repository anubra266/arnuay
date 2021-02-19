import React, { useState } from "react";

type FormProps = {
    initialValues: { [key: string]: any } | undefined
    onSubmit: Function,
    children: (fieldProps: { value: any, onChange: Function } | {}, { setValue, setValues, resetFields }) => React.ReactNode
}
const Formy = (props: FormProps) => {
    const [values, setValues] = useState<{ [key: string]: any }>(props.initialValues);

    const fieldProps = Object.keys(values).reduce((acc, nxt) => (
        acc[nxt] = {
            value: values[nxt],
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.persist();
                setValues((vals) => ({
                    ...vals,
                    [nxt]: e.target?.value,
                }));
            },
        }, acc
    ), {});
    const setValue = (field: string, value: any) => {
        setValues((vals) => ({
            ...vals,
            [field]: value,
        }));
    };
    const resetFields = () => setValues(props.initialValues);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(values, resetFields, setValue);
    };

    return (
        <form onSubmit={submitForm} >
            { props.children(fieldProps, { setValue, setValues, resetFields })}
        </form>
    );
};

export default Formy;
