import{j as e}from"./iframe-Cd58-eiO.js";import{E as t,a as i}from"./ExpandableTableRow-DsuHN53X.js";import{T as l}from"./TableRow-XG2O4zqW.js";import{c as p}from"./paginated-table-data-ZMeh4d0Y.js";import{f as a}from"./_index-Dc1LJiGL.js";import{L as d}from"./Link-ItJddyOm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-L8-FzWkf.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dei93gl0.js";import"./usePreviousValue-B57FAvp0.js";import"./useId-x49vx7R9.js";import"./Expander-7FQpmN2H.js";import"./ChevronDownIcon-fk6EyYOt.js";import"./Icon-5Ollpz7g.js";import"./types-IsTkoTmK.js";import"./ChevronUpIcon-w_vSRsQF.js";const _={title:"Komponenter/Table/Expandable Table Row",component:t,parameters:{layout:"fullscreen"},args:{children:"Vis detaljer",align:"left",isOpen:void 0,onClick:()=>console.log("clicked"),verticalAlign:"center"},tags:["autodocs","tabular data"]},r={render:n=>e.jsxs(i,{expandedChildren:e.jsx("p",{children:"Hei"}),children:[e.jsx(l,{children:e.jsx(d,{download:`${a.rows[3]} ${new Date(a.rows[0][0]).toLocaleDateString()}`,href:"#",children:new Date(a.rows[0][0]).toLocaleDateString()})}),a.rows[0].slice(1,4).map((s,o)=>e.jsx(l,{"data-th":p[o],children:s.toLocaleString()},o)),e.jsx(t,{...n})]})},$=["_ExpandableTableRowController"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{r as _ExpandableTableRowController,$ as __namedExportsOrder,_ as default};
