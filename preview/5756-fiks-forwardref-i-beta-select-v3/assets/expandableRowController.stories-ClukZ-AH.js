import{j as e}from"./iframe-CO-6u7ty.js";import{f as a,a as l}from"./_index-ClxkSY_S.js";import{E as t,a as i}from"./ExpandableTableRow-DhgpRVxD.js";import{c as p}from"./paginated-table-data-ZMeh4d0Y.js";import{L as d}from"./Link-DCb_xN1n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-gpZl5Vil.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-COXRbmIR.js";import"./usePreviousValue-BSTfMP7p.js";import"./useId-DIVYmsrS.js";import"./Expander-C4pp95dN.js";import"./ChevronDownIcon-DFJmw3rK.js";import"./Icon-CiI2KeTo.js";import"./ChevronUpIcon-MewZbaXD.js";const R={title:"Komponenter/Table/Expandable Table Row",component:t,parameters:{layout:"fullscreen"},args:{children:"Vis detaljer",align:"left",isOpen:void 0,onClick:()=>console.log("clicked"),verticalAlign:"center"},tags:["autodocs","tabular data"]},r={render:n=>e.jsxs(i,{expandedChildren:e.jsx("p",{children:"Hei"}),children:[e.jsx(l,{children:e.jsx(d,{download:`${a.rows[3]} ${new Date(a.rows[0][0]).toLocaleDateString()}`,href:"#",children:new Date(a.rows[0][0]).toLocaleDateString()})}),a.rows[0].slice(1,4).map((s,o)=>e.jsx(l,{"data-th":p[o],children:s.toLocaleString()},o)),e.jsx(t,{...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const S=["_ExpandableTableRowController"];export{r as _ExpandableTableRowController,S as __namedExportsOrder,R as default};
