import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface HeaderMenuProps {
    children: ReactNode;
}
const mountNode = document.getElementById("menu");

const HeaderMenu = ({ children }: HeaderMenuProps) => {
    // @ts-ignore
    return ReactDOM.createPortal(children, mountNode);
};

export default HeaderMenu;
