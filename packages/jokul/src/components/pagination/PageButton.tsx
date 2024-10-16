import React, { clsx } from "clsx";
import { FC, MouseEventHandler } from "react";

export const PageButton: FC<{
    isActive: boolean;
    number: number;
    onClick: MouseEventHandler;
    total: number;
}> = ({ isActive, number, onClick, total }) => (
    <li aria-setsize={total} aria-posinset={number}>
        <button
            className={clsx("jkl-pagination-button", {
                "jkl-pagination-button--current": isActive,
            })}
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
