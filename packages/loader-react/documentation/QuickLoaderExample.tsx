import React, { useEffect, useState, VFC } from "react";
import { Loader } from "../src";
import "./styles.scss";

const quickTime = 250;

const QuickLoaderExample: VFC<{ delay?: number }> = ({ delay }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, quickTime);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="jkl-loader-example">
            {/*
                Bruker ikke React-komponenten for å unngå en circular dependency mellom pakkene
                (Card avhenger av Button som har loader som dependency). Portalen laster inn CSSen vi trenger.
            */}
            <div className="jkl-card jkl-spacing-l--bottom">
                <div style={{ minHeight: "3rem" }}>
                    {isLoading && <Loader textDescription="Laster eksempel på rask loader" delay={delay} />}
                    {!isLoading && <p>Denne informasjonen tok {quickTime} millisekunder å hente inn</p>}
                </div>
            </div>
            <div>
                {/*
                    Bruker ikke React-komponenten for å unngå en circular dependency mellom pakkene
                    (Button har loader som dependency). Portalen laster inn CSSen vi trenger.
                 */}
                <button
                    className="jkl-button jkl-button--tertiary"
                    onClick={() => {
                        setIsLoading(true);
                        setTimeout(() => {
                            setIsLoading(false);
                        }, quickTime);
                    }}
                >
                    Last på nytt ({quickTime}ms)
                </button>
            </div>
        </div>
    );
};

export const QuickLoaderExampleDo: VFC = () => {
    return <QuickLoaderExample delay={1000} />;
};

export const QuickLoaderExampleDont: VFC = () => {
    return <QuickLoaderExample delay={0} />;
};
