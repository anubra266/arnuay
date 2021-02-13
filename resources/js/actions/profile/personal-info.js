import { Inertia } from "@inertiajs/inertia";

export const setInfo = ([field, value], setLoading) => {
    return new Promise((resolve, reject) => {
        Inertia.post(
            route("profile.pinfo.set", { field }),
            { [field]: value, _error_bag: "pinfo" },
            {
                preserveScroll: true,
                onStart: () => setLoading(true),
                onFinish: () => setLoading(false),
                onError: (errors) => {
                    reject(errors.pinfo);
                },
                onSuccess: ({ props }) => {
                    resolve();
                },
            }
        );
    });
};
