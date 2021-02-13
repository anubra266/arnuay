import { Inertia } from "@inertiajs/inertia";

export const createAccount = (data, setLoading, setErrors) => {
    return new Promise((resolve, reject) => {
        Inertia.post(
            route("accounts.create"),
            { ...data, _error_bag: "accounts_create" },
            {
                preserveScroll: true,
                onStart: () => setLoading(true),
                onFinish: () => setLoading(false),
                onError: (errors) => {
                    setErrors(errors.accounts_create);
                    reject();
                },
                onSuccess: () => {
                    setErrors();
                    resolve();
                },
            }
        );
    });
};
