import{j as e}from"./iframe-BeW8231r.js";import{f as a}from"./_index-B3s-ufym.js";import{E as t,a as i}from"./ExpandableTableRow-COxQunli.js";import{a as l}from"./TableRow-BR0Edil_.js";import{c as p}from"./paginated-table-data-ZMeh4d0Y.js";import{L as d}from"./Link-FYNrwWc1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-D7FSCwoO.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-CB5LaC5l.js";import"./usePreviousValue-1e7mNHur.js";import"./useId-CD2qvuFc.js";import"./Expander-pLeOHX_Y.js";import"./ChevronDownIcon-CusjmPZw.js";import"./Icon-C2YR2oDk.js";import"./ChevronUpIcon-D8Pg_xje.js";const S={title:"Komponenter/Table/Expandable Table Row",component:t,parameters:{layout:"fullscreen"},args:{children:"Vis detaljer",align:"left",isOpen:void 0,onClick:()=>console.log("clicked"),verticalAlign:"center"},tags:["autodocs","tabular data"]},r={render:n=>e.jsxs(i,{expandedChildren:e.jsx("p",{children:"Hei"}),children:[e.jsx(l,{children:e.jsx(d,{download:`${a.rows[3]} ${new Date(a.rows[0][0]).toLocaleDateString()}`,href:"#",children:new Date(a.rows[0][0]).toLocaleDateString()})}),a.rows[0].slice(1,4).map((s,o)=>e.jsx(l,{"data-th":p[o],children:s.toLocaleString()},o)),e.jsx(t,{...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <ExpandableTableRow expandedChildren={<p>Hei</p>}>
            <TableCell>
                <Link download={\`\${faktura.rows[3]} \${new Date(faktura.rows[0][0] as Date).toLocaleDateString()}\`} href={"#"}>
                    {new Date(faktura.rows[0][0] as Date).toLocaleDateString()}
                </Link>
            </TableCell>
            {faktura.rows[0].slice(1, 4).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={columns[cellIndex]}>
                    {cell.toLocaleString()}
                </TableCell>)}
            <ExpandableTableRowController {...args} />
        </ExpandableTableRow>
}`,...r.parameters?.docs?.source}}};const _=["_ExpandableTableRowController"];export{r as _ExpandableTableRowController,_ as __namedExportsOrder,S as default};
