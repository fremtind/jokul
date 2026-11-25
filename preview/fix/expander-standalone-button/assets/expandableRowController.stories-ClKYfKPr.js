import{j as e}from"./iframe-B0QN_n6q.js";import{E as t,a as i}from"./ExpandableTableRow-nENgzJIq.js";import{a as l}from"./TableRow-DpWACWrC.js";import{c as p}from"./paginated-table-data-ZMeh4d0Y.js";import{f as a}from"./_index-BPaBXcHk.js";import{L as d}from"./Link-BiECuyTg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-BJ-lpevX.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-AdD5Jf9q.js";import"./usePreviousValue-DYSw6zXq.js";import"./useId-CHwIbYSm.js";import"./Expander-BdyliBib.js";import"./ChevronDownIcon-DpCp0txT.js";import"./Icon-Dh7uMuIe.js";import"./types-BlFGa32c.js";import"./ChevronUpIcon-Bv-0hXg1.js";import"./tableContext-NsgB1JYx.js";const $={title:"Komponenter/Table/Expandable Table Row",component:t,parameters:{layout:"fullscreen"},args:{children:"Vis detaljer",align:"left",isOpen:void 0,onClick:()=>console.log("clicked"),verticalAlign:"center"},tags:["autodocs","tabular data"]},r={render:n=>e.jsxs(i,{expandedChildren:e.jsx("p",{children:"Hei"}),children:[e.jsx(l,{children:e.jsx(d,{download:`${a.rows[3]} ${new Date(a.rows[0][0]).toLocaleDateString()}`,href:"#",children:new Date(a.rows[0][0]).toLocaleDateString()})}),a.rows[0].slice(1,4).map((s,o)=>e.jsx(l,{"data-th":p[o],children:s.toLocaleString()},o)),e.jsx(t,{...n})]})},v=["_ExpandableTableRowController"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{r as _ExpandableTableRowController,v as __namedExportsOrder,$ as default};
