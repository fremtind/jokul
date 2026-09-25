import { clsx } from "clsx";
import type { FC, MouseEventHandler } from "react";
import type { TrackingProps } from "../cookie-consent/types.js";

export const PageButton: FC<{
    isActive: boolean;
    number: number;
    onClick: MouseEventHandler;
    total: number;
    tracking?: TrackingProps;
}> = ({ isActive, number, onClick, total, tracking }) => (
    <li aria-setsize={total} aria-posinset={number}>
        <button
            className={clsx("jkl-pagination-button", {
                "jkl-pagination-button--current": isActive,
            })}
            // Merker sideknappen som sporbar for Mixpanels
            // `autocapture`. Attributtene er ellers helt inerte uten en
            // initialisert Mixpanel-instans.
            data-jkl-tracked="PageButton"
            data-jkl-selected={isActive || undefined}
            data-jkl-tracking={tracking ? JSON.stringify(tracking) : undefined}
            aria-current={isActive}
            type="button"
            onClick={onClick}
            tabIndex={isActive ? -1 : 0}
            aria-disabled={isActive}
            title={`side ${number}`}
        >
            <span aria-hidden={true}>{number}</span>
        </button>
    </li>
);
