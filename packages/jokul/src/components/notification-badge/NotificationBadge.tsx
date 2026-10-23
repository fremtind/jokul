import clsx from "clsx";
import React, { type CSSProperties, type ReactNode, useId } from "react";
import type { NotificationBadgeProps } from "./types.js";

const DEFAULT_LABEL = "varsel/varsler";

function badgeValue(count: number, max: number) {
    return count > max ? `${max}+` : count;
}

function badgeLabel(count: number, label: string): string {
    const [singular, plural = singular] = label.split("/");

    return `${count} ${count === 1 ? singular : plural}`;
}

export const NotificationBadge = ({
    className,
    children,
    count,
    max = 99,
    hideCounter,
    urgent = false,
    label = DEFAULT_LABEL,
    ...rest
}: NotificationBadgeProps): ReactNode => {
    const reactId = useId();
    const badgeId = `jkl-notification-badge-${reactId}`;
    const anchorName = `--jkl-notification-badge-anchor-${reactId.replace(/[^a-z0-9]/gi, "")}`;
    const hasCount = count > 0;
    const description = hasCount ? badgeLabel(count, label) : undefined;

    return (
        <>
            {React.isValidElement(children)
                ? React.cloneElement(children, {
                      // Uten et varsel å peke på beholder ankeret bare sin egen
                      // verdi, slik at attributtet utelates helt når den mangler.
                      "aria-describedby":
                          clsx(
                              children.props["aria-describedby"],
                              hasCount && badgeId,
                          ) || undefined,
                      className: clsx(
                          children.props.className,
                          "jkl-notification-badge-anchor",
                      ),
                      style: {
                          ...children.props.style,
                          "--jkl-notification-badge-anchor-name": anchorName,
                      } as CSSProperties,
                      title: children.props.title ?? description,
                  })
                : children}
            {hasCount ? (
                <div
                    className={clsx(
                        "jkl-notification-badge",
                        hideCounter && "jkl-notification-badge--dot",
                        className,
                    )}
                    data-urgent={urgent}
                    data-count={count}
                    data-hide-counter={hideCounter}
                    {...rest}
                    style={
                        {
                            ...rest.style,
                            "--jkl-notification-badge-anchor-name": anchorName,
                        } as CSSProperties
                    }
                    id={badgeId}
                >
                    {hideCounter ? null : (
                        <span aria-hidden="true">{badgeValue(count, max)}</span>
                    )}
                    <div className="jkl-sr-only">{description}</div>
                </div>
            ) : null}
        </>
    );
};
