import React, { VFC } from "react";
import { Table } from "@fremtind/jkl-table-react";
import { unicode } from "../src";

import "./style.scss";

const columns = ["Constant", "Verdi"];

const rows = Object.entries(unicode).map((entry) => entry);

export const Unicode: VFC = () => <Table className="jkl-constant-example__table" columns={columns} rows={rows} />;

export const Example: VFC = () => (
    <>
        <section className="jkl-constant-example">
            <h1 className="jkl-title-small jkl-spacing-xl--bottom">Unicode</h1>
            <Unicode />
        </section>
    </>
);
