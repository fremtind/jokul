import{j as e}from"./iframe-BUprc3LF.js";import{f as a}from"./_index-bj6cUFlv.js";import{E as t,a as i}from"./ExpandableTableRow-DGmnYE2b.js";import{T as l}from"./TableRow-Dvr_sw2-.js";import{c as p}from"./paginated-table-data-ZMeh4d0Y.js";import{L as d}from"./Link-BD1p3Jpu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-BIZABrfa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DcaK8hfg.js";import"./usePreviousValue-B__mXeix.js";import"./useId-GUh6XCYW.js";import"./Expander-Dey9YgYu.js";import"./ChevronDownIcon-VK01pmeF.js";import"./Icon-BSZAwLB9.js";import"./ChevronUpIcon-BfEagEyH.js";const S={title:"Komponenter/Table/Expandable Table Row",component:t,parameters:{layout:"fullscreen"},args:{children:"Vis detaljer",align:"left",isOpen:void 0,onClick:()=>console.log("clicked"),verticalAlign:"center"},tags:["autodocs","tabular data"]},r={render:n=>e.jsxs(i,{expandedChildren:e.jsx("p",{children:"Hei"}),children:[e.jsx(l,{children:e.jsx(d,{download:`${a.rows[3]} ${new Date(a.rows[0][0]).toLocaleDateString()}`,href:"#",children:new Date(a.rows[0][0]).toLocaleDateString()})}),a.rows[0].slice(1,4).map((s,o)=>e.jsx(l,{"data-th":p[o],children:s.toLocaleString()},o)),e.jsx(t,{...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
