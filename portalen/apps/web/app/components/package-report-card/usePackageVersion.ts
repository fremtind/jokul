import { useQuery } from "@tanstack/react-query";

export type PackageInfo = {
    react?: string;
    css?: string;
};

export const usePackageVersion = (packageInfo?: PackageInfo) => {
    const {
        status: reactStatus,
        error: reactError,
        data: reactData,
    } = useQuery<{ version: string }>({
        queryKey: ["react-api", packageInfo?.react],
        queryFn: async () => {
            if (!packageInfo?.react) {
                return;
            }
            const res = await fetch(`/types/${packageInfo.react}.json`);
            return await res.json();
        },
    });

    const {
        status: cssStatus,
        error: cssError,
        data: cssData,
    } = useQuery<{ version: string }>({
        queryKey: ["css-api", packageInfo?.css],
        queryFn: async () => {
            if (!packageInfo?.css) {
                return;
            }
            const res = await fetch(`/types/${packageInfo.css}.json`);
            return await res.json();
        },
    });

    const reactVersion = reactStatus === "loading" || reactError === "error" || !reactData ? "" : reactData.version;
    const cssVersion = cssStatus === "loading" || cssError === "error" || !cssData ? "" : cssData.version;

    return { reactVersion, cssVersion };
};
