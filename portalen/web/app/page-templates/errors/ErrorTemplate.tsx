import type { WithChildren } from "@fremtind/jokul";
import { Link } from "@remix-run/react";
import React, { type FC } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Diamonds } from "../../components/diamonds";
import { CmdK, SearchTrigger } from "../../components/search";

const adKey = "jklportal-error-ad";

export const ErrorTemplate: FC<WithChildren> = ({ children }) => {
    const [searchOpen, setSearchOpen] = useState(false);

    const onOpenSearch = useCallback(() => {
        setSearchOpen(true);
    }, []);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [setMounted]);
    const showJobAd = useMemo(() => {
        if (!mounted) {
            return false;
        }

        const ad = sessionStorage.getItem(adKey);
        if (ad) {
            return false;
        } else {
            sessionStorage.setItem(adKey, "true");
            return true;
        }
    }, [mounted]);

    return (
        <div className="error-page">
            <div className="error-page__animation">
                <Diamonds />
            </div>
            <div className="error-page__content">
                <h1 className="jkl-heading-1 jkl-spacing-8--bottom">
                    Oops! Noe gikk galt.
                </h1>
                {children}
                <CmdK open={searchOpen} onOpenChange={setSearchOpen} />
                <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{ minWidth: "30ch" }}
                >
                    <SearchTrigger variant="full" onClick={onOpenSearch} />
                </form>
                {showJobAd && (
                    <p className="jkl-body jkl-spacing-16--bottom">
                        Hvis du har lyst til å hjelpe oss å utvikle bedre
                        løsninger så klikk på linken under, kanskje har vi en
                        ledig jobb for akkurat deg.
                    </p>
                )}
                <div>
                    <Link
                        to="/"
                        className="jkl-button jkl-button--primary jkl-spacing-16--right"
                    >
                        Gå til forsiden
                    </Link>
                    {showJobAd && (
                        <a
                            className="jkl-button jkl-button--tertiary"
                            href="https://www.fremtind.no/karriere/"
                        >
                            Jobb i Fremtind
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
