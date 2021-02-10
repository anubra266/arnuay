import { Inertia } from "@inertiajs/inertia";

export const signin = (data, setLoading) => {
    return new Promise((resolve, reject) => {
        Inertia.post(
            route("login"),
            { ...data, _error_bag: "login" },
            {
                preserveScroll: true,
                onStart: () => setLoading(true),
                onFinish: () => setLoading(false),
                onError: errors => {
                    reject(errors.login);
                },
                onSuccess: ({ props }) => {
                    resolve();
                }
            }
        );
    });
};
