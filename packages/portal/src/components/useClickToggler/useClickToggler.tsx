import { useEffect } from "react";

export const useClickToggler = (toggle: boolean, toggleSwitch: Function) =>
    useEffect(() => {
        const handleClick = () => (toggle ? toggleSwitch(!toggle) : null);
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [toggle]);
