import { useEffect, useState } from "react";

export function useDelayedRender(delayMilliseconds: number) {
    const [renderComponent, setRenderComponent] = useState(delayMilliseconds === 0 ? true : false);

    useEffect(() => {
        if (delayMilliseconds === 0) {
            return;
        }

        const timeout = setTimeout(() => setRenderComponent(true), delayMilliseconds);
        return () => clearTimeout(timeout);
    }, [delayMilliseconds, setRenderComponent]);

    return renderComponent;
}
