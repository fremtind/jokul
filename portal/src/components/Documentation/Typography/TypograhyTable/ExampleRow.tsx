import React, { useRef } from "react";
import { TableCell } from "./TableCell";

export type TypographyLevels =
    | "Title large"
    | "Title small"
    | "Heading large"
    | "Heading medium"
    | "Heading small"
    | "Lead"
    | "Body"
    | "Small"
    | "Micro";

interface Props {
    level: TypographyLevels;
}
export const ExampleRow: React.FC<Props> = ({ level }) => {
    const ref = useRef<HTMLParagraphElement>(null);

    const getComputed = (cssProperty: string) => {
        if (ref.current) {
            return window?.getComputedStyle(ref.current)?.getPropertyValue(cssProperty);
        }
        return "N/A";
    };
    return (
        <tr className={"jkl-typography-table__row"}>
            <td className="jkl-typography-table__data">
                <p className={`jkl-${level.toLowerCase().replace(/ /g, "-")}`} ref={ref}>
                    {level}
                </p>
            </td>
            <TableCell title="Vekt">{getComputed("font-weight")}</TableCell>
            <TableCell title="Størrelse">{getComputed("font-size")}</TableCell>
            <TableCell title="Linjeavstand">{getComputed("line-height")}</TableCell>
        </tr>
    );
};
