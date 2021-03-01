import React, { ChangeEventHandler, useState } from "react";
// import { useForm, InertiaFormProps } from "@inertiajs/inertia-react";
import { useForm, InertiaFormProps } from "@anubra266/inertia-react";

type FormProps = {
    initialValues: { [key: string]: any } | undefined;
    onSubmit: Function;
    children: (
        fieldProps: {
            [field: string]: { value: any; onChange: ChangeEventHandler };
        },
        formProps: InertiaFormProps & { touched: any }
    ) => React.ReactNode;
};
const Formy = (props: FormProps) => {
    const formProps = useForm(props.initialValues);
    const [touched, setTouched] = useState({});
    const resetFields = () => {
        formProps.reset();
        formProps.clearErrors();
        setTouched({});
    };
    const fieldProps = Object.keys(formProps.data).reduce(
        (acc, nxt) => (
            (acc[nxt] = {
                value: formProps.data[nxt],
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    e.persist();
                    formProps.setData(
                        nxt,
                        e.target.type === "checkbox"
                            ? e.target.checked
                            : e.target.value
                    );
                },
                onBlur: () => {
                    setTouched((s) => ({
                        ...s,
                        [nxt]: true,
                    }));
                },
            }),
            acc
        ),
        {}
    );
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit({ ...formProps, resetFields });
    };

    return (
        <form onSubmit={submitForm}>
            {props.children(fieldProps, {
                ...formProps,
                touched,
            })}
        </form>
    );
};

export default Formy;
