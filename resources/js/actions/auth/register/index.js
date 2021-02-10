import { Inertia } from "@inertiajs/inertia";

export const signup = (data, setLoading) => {
    return new Promise((resolve, reject) => {
        Inertia.post(
            ("/register"),
            { ...data, _error_bag: "register" },
            {
                preserveScroll: true,
                onStart: () => setLoading(true),
                onFinish: () => setLoading(false),
                onError: errors => {
                    reject(errors.register);
                },
                onSuccess: ({ props }) => {
                    resolve();
                }
            }
        );
    });
};
