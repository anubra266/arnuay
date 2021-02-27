import React from "react";
import { useForm } from "@inertiajs/inertia-react";

type FormProps = {
    initialValues: { [key: string]: any } | undefined;
    onSubmit: Function;
    children: (
        fieldProps: { value: any; onChange: Function } | {},
        formProps: any
    ) => React.ReactNode;
};
const Formy = (props: FormProps) => {
    const formProps = useForm(props.initialValues);
    const fieldProps = Object.keys(formProps.data).reduce(
        (acc, nxt) => (
            (acc[nxt] = {
                value: formProps.data[nxt],
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    e.persist();
                    formProps.setData(nxt, e.target.value);
                },
            }),
            acc
        ),
        {}
    );

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(formProps);
    };

    return (
        <form onSubmit={submitForm}>
            {props.children(fieldProps, formProps)}
        </form>
    );
};

export default Formy;
