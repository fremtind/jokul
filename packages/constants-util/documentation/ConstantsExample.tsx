import React, { VFC } from "react";
import { DataTable } from "@forbrukerradet/jkl-table-react";
import { unicode } from "../src";
import "./style.scss";

const columns = ["Constant", "Verdi"];

const rows = Object.entries(unicode).map((entry) => entry);

export const Unicode: VFC = () => <DataTable className="jkl-constant-example__table" columns={columns} rows={rows} />;

export const ConstantsExample: VFC = () => (
    <>
        <section className="jkl-constant-example">
            <h1 className="jkl-title-small jkl-spacing-xl--bottom">Unicode</h1>
            <Unicode />
        </section>
    </>
);
