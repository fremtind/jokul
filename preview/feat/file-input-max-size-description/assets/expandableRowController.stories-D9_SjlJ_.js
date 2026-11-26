import{j as e}from"./iframe-BHADvndi.js";import{E as t,a as i}from"./ExpandableTableRow-Bth5tlRB.js";import{a as l}from"./TableRow-BtYyUwhI.js";import{c as p}from"./paginated-table-data-ZMeh4d0Y.js";import{f as a}from"./_index-DcsdE9qR.js";import{L as d}from"./Link-BuwATNSv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-Dy329D37.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BOInQhsC.js";import"./usePreviousValue-Pa9_YHPZ.js";import"./useId-D4zZq3bp.js";import"./Expander-CskqMgI6.js";import"./ChevronDownIcon-CnjZit0J.js";import"./Icon-CvrtQvf2.js";import"./types-BlFGa32c.js";import"./ChevronUpIcon-EhcNgSvO.js";import"./tableContext-CV37kgfk.js";const $={title:"Komponenter/Table/Expandable Table Row",component:t,parameters:{layout:"fullscreen"},args:{children:"Vis detaljer",align:"left",isOpen:void 0,onClick:()=>console.log("clicked"),verticalAlign:"center"},tags:["autodocs","tabular data"]},r={render:n=>e.jsxs(i,{expandedChildren:e.jsx("p",{children:"Hei"}),children:[e.jsx(l,{children:e.jsx(d,{download:`${a.rows[3]} ${new Date(a.rows[0][0]).toLocaleDateString()}`,href:"#",children:new Date(a.rows[0][0]).toLocaleDateString()})}),a.rows[0].slice(1,4).map((s,o)=>e.jsx(l,{"data-th":p[o],children:s.toLocaleString()},o)),e.jsx(t,{...n})]})},v=["_ExpandableTableRowController"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
