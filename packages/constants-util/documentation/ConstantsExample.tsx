import { DataTable } from "@fremtind/jkl-table-react";
import React, { FC } from "react";
import { unicode } from "../src";
import "./style.scss";

const columns = ["Constant", "Verdi"];

const rows = Object.entries(unicode).map((entry) => entry);

export const Unicode: FC = () => <DataTable className="jkl-constant-example__table" columns={columns} rows={rows} />;

export const ConstantsExample: FC = () => (
    <>
        <section className="jkl-constant-example">
            <h1 className="jkl-title-small jkl-spacing-xl--bottom">Unicode</h1>
            <Unicode />
        </section>
    </>
);
