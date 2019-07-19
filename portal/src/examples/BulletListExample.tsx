import React from "react";
import { Example } from "../components";
import { BulletList, BulletListItem } from "@fremtind/jkl-bullet-list-react";
import "@fremtind/jkl-bullet-list/bullet-list.min.css";
// @ts-ignore
import bulletListType from "!raw-loader!@fremtind/jkl-bullet-list-react/build/BulletList.d.ts";
// @ts-ignore
import bulletListItemType from "!raw-loader!@fremtind/jkl-bullet-list-react/build/BulletListItem.d.ts";

const example = `<>
    <BulletList>
        <BulletListItem>Ruth Sims</BulletListItem>
        <BulletListItem>
            Hilda Robbins
            <BulletList>
                <BulletListItem>Mattie Lawrence</BulletListItem>
                <BulletListItem>Eric Huff</BulletListItem>
            </BulletList>
        </BulletListItem>
        <BulletListItem>Adam Norris</BulletListItem>
        <BulletListItem>Essie Diaz</BulletListItem>
    </BulletList>
    <BulletList className="jkl-lead">
        <BulletListItem>Ricky Wilkerson</BulletListItem>
        <BulletListItem>
            Linnie Gill
            <BulletList className="jkl-lead">
                <BulletListItem>Grace Cortez</BulletListItem>
                <BulletListItem>
                    Madge Hodges
                    <BulletList className="jkl-lead">
                        <BulletListItem>Somebody</BulletListItem>
                    </BulletList>
                </BulletListItem>
            </BulletList>
        </BulletListItem>
        <BulletListItem>Cory Wagner</BulletListItem>
        <BulletListItem>Lora Carroll</BulletListItem>
    </BulletList>
</>`;

const exampleImport = `import { BulletList, BulletListItem } from "@fremtind/jkl-bullet-list-react";
import "@fremtind/jkl-bullet-list/bullet-list.min.css";`;

const BulletListExample = () => (
    <Example
        exampleComponents={{ BulletList, BulletListItem }}
        exampleCode={example}
        types={[{ name: "BulletList", type: bulletListType }, { name: "BulletListItem", type: bulletListItemType }]}
        exampleImport={exampleImport}
    />
);

export default BulletListExample;
