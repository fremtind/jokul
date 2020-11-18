import React from "react";
import cn from "classnames";

export interface Item {
    label: string;
    value: string;
}

export interface Props {
    columnDescriptions: [string, string];
    items: Item[];
    className?: string;
    heading?: string;
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    footer?: Item;
}

export const SummaryTable: React.FC<Props> = ({
    columnDescriptions,
    items,
    className,
    heading,
    headingLevel = "h3",
    footer,
}) => {
    const H = headingLevel;

    return (
        <section
            className={cn("jkl-summary-table", {
                "jkl-summary-table--no-bg": !heading,
                className,
            })}
        >
            {heading && (
                <H className="jkl-summary-table__heading jkl-title-small jkl-layout-spacing--medium-bottom">
                    {heading}
                </H>
            )}
            <table className="jkl-body">
                <thead className="jkl-sr-only">
                    <tr>
                        {columnDescriptions.map((category, index) => (
                            <th scope="col" key={`${category}-${index}`}>
                                {category}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <tr key={`${item}-${index}`}>
                            <th scope="row">{item.label}</th>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>

                {footer && (
                    <tfoot>
                        <tr>
                            <th scope="row">{footer?.label}</th>
                            <td>{footer?.value}</td>
                        </tr>
                    </tfoot>
                )}
            </table>
        </section>
    );
};
