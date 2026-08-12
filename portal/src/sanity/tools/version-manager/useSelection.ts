import { useCallback, useState } from "react";

export function useSelection() {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    const toggle = useCallback((id: string) => {
        setSelected((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }, []);

    const setMany = useCallback((ids: string[], checked: boolean) => {
        setSelected((prev) => {
            const next = new Set(prev);
            for (const id of ids) checked ? next.add(id) : next.delete(id);
            return next;
        });
    }, []);

    const clear = useCallback(() => setSelected(new Set()), []);

    return { selected, toggle, setMany, clear };
}
