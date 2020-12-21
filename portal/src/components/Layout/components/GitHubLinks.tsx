import { AnimatePresence, motion } from "framer-motion";
import { CheckMark } from "@fremtind/jkl-icons-react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./GitHubLinks.scss";

interface LinkProps {
    href: string;
}
const ExternalLink: React.FC<LinkProps> = ({ href, children }) => (
    <a className="jkl-link jkl-portal-github-links__link" href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const Portal: React.FC = ({ children }) => {
    const el = typeof document !== "undefined" ? document?.getElementById("toaster-portal") : null;

    if (!el) {
        return null;
    }

    return ReactDOM.createPortal(children, el);
};

const Toast: React.FC<{ showToast: boolean; setShowToast: (show: boolean) => void }> = ({
    showToast,
    setShowToast,
}) => {
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showToast) {
            timeout = setTimeout(() => setShowToast(false), 3000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [showToast, setShowToast]);

    return (
        <Portal>
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        key="clipboard"
                        className="jkl-portal-toast"
                        role="alert"
                        aria-live="polite"
                    >
                        <span className="jkl-body">
                            <CheckMark variant="inherit" className="jkl-component-spacing--large-right" />
                            Kopiert til utklippstavlen
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </Portal>
    );
};

interface NpmProps {
    pkg: string;
}

const NpmInstall: React.FC<NpmProps> = ({ pkg }) => {
    const [showToast, setShowToast] = useState(false);
    const ref = useRef<HTMLTextAreaElement>(null);
    const npmString = `npm install @fremtind/jkl-${pkg}`;

    const copyCodeToClipboard = () => {
        setShowToast(true);
        if (ref.current) {
            ref.current.value = npmString;
            ref.current.select();
            document.execCommand("copy");
        }
    };

    return (
        <>
            <Toast showToast={showToast} setShowToast={setShowToast} />
            <textarea tabIndex={-1} aria-hidden ref={ref} className="jkl-portal__copy" />
            <button onClick={copyCodeToClipboard} className="jkl-portal-github-links__npm">
                <code className="jkl-micro">{npmString}</code>
            </button>
        </>
    );
};

interface Props {
    react?: string;
    scss?: string;
}

export function GitHubLinks({ react, scss }: Props) {
    if (!react && !scss) {
        return null;
    }
    const pkgLink = (pkgName: string) => `https://github.com/fremtind/jokul/tree/master/packages/${pkgName}`;

    return (
        <div className="jkl-portal-github-links">
            <p className="jkl-layout-spacing--small-bottom">
                {react && <ExternalLink href={pkgLink(react)}>React</ExternalLink>}
                {scss && <ExternalLink href={pkgLink(scss)}>Sass</ExternalLink>}
            </p>
            {react && <NpmInstall pkg={react} />}
            {scss && <NpmInstall pkg={scss} />}
        </div>
    );
}
