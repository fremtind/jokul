import{j as e}from"./iframe-BVjcNEb5.js";import{E as t,a as i}from"./ExpandableTableRow-BpW8jTW7.js";import{a as l}from"./TableRow-CERnVjCr.js";import{c as p}from"./paginated-table-data-ZMeh4d0Y.js";import{f as a}from"./_index-CurceeMy.js";import{L as d}from"./Link-DWVXmgTM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-DAoM9tZn.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DFYV_k9K.js";import"./usePreviousValue-R_hTfSVA.js";import"./useId-Bb1ExcvL.js";import"./Expander-xZUQXcwz.js";import"./ChevronUpIcon-PZpKHAKr.js";import"./Icon-B3sdwb9P.js";import"./tableContext-JMkfIlWS.js";const S={title:"Komponenter/Table/Expandable Table Row",component:t,parameters:{layout:"fullscreen"},args:{children:"Vis detaljer",align:"left",isOpen:void 0,onClick:()=>console.log("clicked"),verticalAlign:"center"},tags:["autodocs","tabular data"]},r={render:n=>e.jsxs(i,{expandedChildren:e.jsx("p",{children:"Hei"}),children:[e.jsx(l,{children:e.jsx(d,{download:`${a.rows[3]} ${new Date(a.rows[0][0]).toLocaleDateString()}`,href:"#",children:new Date(a.rows[0][0]).toLocaleDateString()})}),a.rows[0].slice(1,4).map((s,o)=>e.jsx(l,{"data-th":p[o],children:s.toLocaleString()},o)),e.jsx(t,{...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
