import React from "react";
import { Table } from "@fremtind/jkl-table-react";
import { unicode } from "../src";

import "./style.scss";

const columns = ["Constant", "Verdi"];

const rows = Object.entries(unicode).map((entry) => entry);

export const Unicode = () => <Table className="jkl-constant-example__table" columns={columns} rows={rows} />;

export const Example = () => (
    <>
        <section className="jkl-constant-example">
            <h1 className="jkl-title-small jkl-layout-spacing--medium-bottom">Unicode</h1>
            <Unicode />
        </section>
    </>
);
