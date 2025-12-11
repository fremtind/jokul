import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as c}from"./index-Bv6P490N.js";import{E as x,a as T}from"./ExpandableTableRow-DxfpsanR.js";import{f as u,d as w,a as k,g as o,c as p,b as f,T as m,e as j}from"./_index-C2Qs2LB-.js";import{c as g}from"./paginated-table-data-ZMeh4d0Y.js";/* empty css               *//* empty css               */import{b as L,D as b,a as i}from"./DescriptionList-C_7ONglC.js";import{L as s}from"./Link-C9ugz-5z.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-x0eECUB-.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./usePreviousValue-CFxVqUaX.js";import"./useId-B1yQ3ow-.js";import"./Expander-B7oCzgli.js";import"./ChevronDownIcon-ulgFH_bH.js";import"./Icon-DYEEOjBa.js";import"./ChevronUpIcon-CAkXFTAT.js";const J={title:"Komponenter/Table/ExpandableTableRow",component:T,subcomponents:{ExpandableTableRowController:x},parameters:{layout:"centered"},tags:["autodocs"]},l={name:"Expandable Table",args:{colSpan:99,clickable:!1,isOpen:!1,expandedChildren:""},render:D=>e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(u,{fullWidth:!0,caption:e.jsx(j,{children:"Eksempel på ekspanderbare rader"}),children:[e.jsx(w,{sticky:!0,children:e.jsxs(k,{children:[o.columns.slice(0,4).map((a,r)=>e.jsx(p,{bold:!0,children:a},r)),e.jsx(p,{})]})}),e.jsx(f,{children:o.rows.map((a,r)=>c.createElement(T,{...D,key:r,expandedChildren:e.jsxs(L,{children:[o.columns.map((t,n)=>a.map((h,d)=>n===d&&e.jsxs(c.Fragment,{children:[e.jsx(b,{children:t}),e.jsx(i,{children:h.toLocaleString()})]},d))),e.jsx(b,{children:"Faktura"}),e.jsx(i,{children:e.jsx(s,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"})}),e.jsx(i,{children:e.jsx(s,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:"Last ned"})})]})},e.jsx(m,{children:e.jsx(s,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:new Date(a[0]).toLocaleDateString()})}),a.slice(1,4).map((t,n)=>e.jsx(m,{"data-th":g[n],children:t.toLocaleString()},n)),e.jsx(x,{children:"Vis detaljer"})))})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Expandable Table",
  args: {
    colSpan: 99,
    // @ts-ignore
    clickable: false,
    isOpen: false,
    expandedChildren: ""
  },
  render: args => <div style={{
    width: "90dvw"
  }}>
            <Table fullWidth={true} caption={<TableCaption>Eksempel på ekspanderbare rader</TableCaption>}>
                <TableHead sticky={true}>
                    <TableRow>
                        {faktura.columns.slice(0, 4).map((column, index) => <TableHeader key={index} bold>
                                {column}
                            </TableHeader>)}
                        <TableHeader />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {faktura.rows.map((row, rowIndex) => <ExpandableTableRow {...args} key={rowIndex} expandedChildren={<DescriptionList>
                                    {faktura.columns.map((column, columnIndex) => row.map((cell, rowIndex) => columnIndex === rowIndex && <Fragment key={rowIndex}>
                                                            <DescriptionTerm>
                                                                {column}
                                                            </DescriptionTerm>
                                                            <DescriptionDetail>
                                                                {cell.toLocaleString()}
                                                            </DescriptionDetail>
                                                        </Fragment>))}
                                    <DescriptionTerm>Faktura</DescriptionTerm>
                                    <DescriptionDetail>
                                        <Link external target={"_blank"} href={"#"}>
                                            Åpne i ny fane
                                        </Link>
                                    </DescriptionDetail>
                                    <DescriptionDetail>
                                        <Link download={\`\${row[3]} \${new Date(row[0] as Date).toLocaleDateString()}\`} href={"#"}>
                                            Last ned
                                        </Link>
                                    </DescriptionDetail>
                                </DescriptionList>}>
                            <TableCell>
                                <Link download={\`\${row[3]} \${new Date(row[0] as Date).toLocaleDateString()}\`} href={"#"}>
                                    {new Date(row[0] as Date).toLocaleDateString()}
                                </Link>
                            </TableCell>
                            {row.slice(1, 4).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={columns[cellIndex]}>
                                    {cell.toLocaleString()}
                                </TableCell>)}
                            <ExpandableTableRowController>
                                Vis detaljer
                            </ExpandableTableRowController>
                        </ExpandableTableRow>)}
                </TableBody>
            </Table>
        </div>
}`,...l.parameters?.docs?.source}}};const M=["TableCollapse"];export{l as TableCollapse,M as __namedExportsOrder,J as default};
