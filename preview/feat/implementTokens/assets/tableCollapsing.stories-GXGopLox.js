import{R as e,r as E}from"./index-siqcju79.js";import{E as b,a as u}from"./ExpandableTableRow-Bzy28aqm.js";import{f as w,e as k,d as x,a as f,g as o,c as m,b as g,T as p}from"./_index-CUz054PZ.js";import{c as L}from"./paginated-table-data-ZMeh4d0Y.js";/* empty css               *//* empty css               */import{b as y,D as d,a as i}from"./DescriptionList-BkNFVB_x.js";import{L as c}from"./Link-Dwdm3rDB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-B4AinHXK.js";import"./tokens-CvksrKef.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./useId-CahK3IZ3.js";import"./Expander-Cpo7VSwA.js";import"./ChevronDownIcon-fl1APhkk.js";import"./Icon-mINJCSxV.js";import"./ChevronUpIcon-CVpRESJ9.js";import"./ArrowVerticalAnimated-BAkArw06.js";import"./ArrowUpIcon-CFNLzgG_.js";const M={title:"Komponenter/Table/ExpandableTableRow",component:u,subcomponents:{ExpandableTableRowController:b},parameters:{layout:"centered"},tags:["autodocs"]},t={name:"Expandable Table",args:{colSpan:99,clickable:!1,isOpen:!1,expandedChildren:""},render:T=>e.createElement("div",{style:{width:"90dvw"}},e.createElement(w,{fullWidth:!0,caption:e.createElement(k,null,"Eksempel på ekspanderbare rader")},e.createElement(x,{sticky:!0},e.createElement(f,null,o.columns.slice(0,4).map((a,l)=>e.createElement(m,{key:l,bold:!0},a)),e.createElement(m,null))),e.createElement(g,null,o.rows.map((a,l)=>e.createElement(u,{...T,key:l,expandedChildren:e.createElement(y,null,o.columns.map((r,n)=>a.map((D,s)=>n===s&&e.createElement(E.Fragment,{key:s},e.createElement(d,null,r),e.createElement(i,null,D.toLocaleString())))),e.createElement(d,null,"Faktura"),e.createElement(i,null,e.createElement(c,{external:!0,target:"_blank",href:"#"},"Åpne i ny fane")),e.createElement(i,null,e.createElement(c,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#"},"Last ned")))},e.createElement(p,null,e.createElement(c,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#"},new Date(a[0]).toLocaleDateString())),a.slice(1,4).map((r,n)=>e.createElement(p,{key:n,"data-th":L[n]},r.toLocaleString())),e.createElement(b,null,"Vis detaljer"))))))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["TableCollapse"];export{t as TableCollapse,N as __namedExportsOrder,M as default};
