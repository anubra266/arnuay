import { Inertia } from "@inertiajs/inertia";

export const verifyEmail = (setLoading) => {
    return new Promise((resolve) => {
        Inertia.post(route("verification.send"), null, {
            preserveScroll: true,
            onStart: () => setLoading(true),
            onFinish: () => setLoading(false),
            onSuccess: ({ props }) => {
                resolve(props.flash?.status === "verification-link-sent");
            },
        });
    });
}
