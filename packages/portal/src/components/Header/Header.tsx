import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../useWindowSize/useWindowSize";
import "./styles.scss";

const DesktopHeader = React.lazy(() => import("./DesktopHeader"));
const MobileHeader = React.lazy(() => import("./MobileHeader"));

const LoadingHeader = () => <div style={{ height: "70px", width: "100%", backgroundColor: "#fafafa" }} />;

const Links = [
    <Link key="bidra" className="portal__header--link" to="/bidra">
        Bidra
    </Link>,
    <Link key="prinsipp" className="portal__header--link" to="/">
        Prinsipp
    </Link>,
    <Link key="komponent" className="portal__header--link" to="/">
        Komponenter
    </Link>,
];

const Header = () => {
    const { width } = useWindowSize();
    const smallBreakpoint = 768;

    if (width < smallBreakpoint) {
        return (
            <Suspense fallback={<LoadingHeader />}>
                <MobileHeader>{Links}</MobileHeader>
            </Suspense>
        );
    }
    return (
        <Suspense fallback={<LoadingHeader />}>
            <DesktopHeader>{Links}</DesktopHeader>
        </Suspense>
    );
};

export default Header;
