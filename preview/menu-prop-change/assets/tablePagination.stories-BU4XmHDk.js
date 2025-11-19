import{j as e}from"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import{g as a,f as d,d as b,a as l,c as w,b as T,T as s,e as P}from"./_index-C0EUwGBs.js";import{a as p,T as u}from"./TablePagination-UbG2-BdF.js";import{c as x}from"./paginated-table-data-ZMeh4d0Y.js";/* empty css               *//* empty css               */import{L as h}from"./Link-C9ugz-5z.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./ArrowVerticalAnimated-DxukZOje.js";import"./ArrowDownIcon-CDuWY9sD.js";import"./Icon-DYEEOjBa.js";import"./useId-B1yQ3ow-.js";import"./IconButton-9XUYZjY_.js";import"./ChevronLeftIcon-9oYStCk-.js";import"./ChevronRightIcon-B1bQ5uAI.js";import"./NativeSelect-Dq0rzBEf.js";import"./valuePair-Bn6SadUn.js";import"./InputGroup-Cl7hE9X0.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./TextInput-CuQXZqTY.js";import"./BaseTextInput-BSs526x8.js";const M={title:"Komponenter/Table/TablePagination",component:p,parameters:{layout:"centered"},tags:["autodocs"]},r={name:"TablePagination",args:{labels:{next:"Neste side",previous:"Forrige side",rowsPerPage:"Fakturaer per side"},activePage:0,totalNumberOfRows:a.rows.length,rowsPerPage:12,rowsPerPageItems:[5,10,12,{label:"Alle",value:-1}],withGoToPage:{gotoLabel:"Side"},onChangeRowsPerPage:()=>"",onChange:()=>""},argTypes:{activePage:{control:{type:"number",min:0}},totalNumberOfRows:{control:{type:"number",min:a.rows.length,max:a.rows.length}},rowsPerPage:{control:{type:"number",min:-1,max:a.rows.length}},withGoToPage:{control:"boolean",description:"Du kan også velge å endre teksten ved siden av input-feltet med en optional goToPageLabel-prop."}},render:o=>{const i=(o.activePage||0)*o.rowsPerPage,c=a.rows.slice(i,i+o.rowsPerPage);return e.jsxs(d,{caption:e.jsx(P,{children:"Eksempel på paginering"}),children:[e.jsx(b,{sticky:!0,children:e.jsx(l,{children:a.columns.slice(0,5).map((n,t)=>e.jsx(w,{bold:!0,children:n},t))})}),e.jsx(T,{children:c.map((n,t)=>e.jsxs(l,{children:[e.jsx(s,{children:e.jsx(h,{download:`${n[3]} ${new Date(n[0]).toLocaleDateString()}`,href:"#",children:new Date(n[0]).toLocaleDateString()})}),n.slice(1,5).map((g,m)=>e.jsx(s,{"data-th":x[m],children:g.toLocaleString()},m))]},t))}),e.jsx(u,{children:e.jsx(l,{children:e.jsx(s,{colSpan:99,children:e.jsx(p,{...o})})})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "TablePagination",
  args: {
    labels: {
      next: "Neste side",
      previous: "Forrige side",
      rowsPerPage: "Fakturaer per side"
    },
    activePage: 0,
    totalNumberOfRows: faktura.rows.length,
    rowsPerPage: 12,
    rowsPerPageItems: [5, 10, 12, {
      label: "Alle",
      value: -1
    }],
    withGoToPage: {
      gotoLabel: "Side"
    },
    onChangeRowsPerPage: () => "",
    onChange: () => ""
  },
  argTypes: {
    activePage: {
      control: {
        type: "number",
        min: 0
      }
    },
    totalNumberOfRows: {
      control: {
        type: "number",
        min: faktura.rows.length,
        max: faktura.rows.length
      }
    },
    rowsPerPage: {
      control: {
        type: "number",
        min: -1,
        max: faktura.rows.length
      }
    },
    withGoToPage: {
      control: "boolean",
      description: "Du kan også velge å endre teksten ved siden av input-feltet med en optional" + " goToPageLabel-prop."
    }
  },
  render: args => {
    const startIndex = (args.activePage || 0) * args.rowsPerPage;
    const visibleRows = faktura.rows.slice(startIndex, startIndex + args.rowsPerPage);
    return <Table caption={<TableCaption>Eksempel på paginering</TableCaption>}>
                <TableHead sticky={true}>
                    <TableRow>
                        {faktura.columns.slice(0, 5).map((column, index) => <TableHeader key={index} bold>
                                {column}
                            </TableHeader>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {visibleRows.map((row, rowIndex) => <TableRow key={rowIndex}>
                            <TableCell>
                                <Link download={\`\${row[3]} \${new Date(row[0] as Date).toLocaleDateString()}\`} href={"#"}>
                                    {new Date(row[0] as Date).toLocaleDateString()}
                                </Link>
                            </TableCell>
                            {row.slice(1, 5).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={columns[cellIndex]}>
                                    {cell.toLocaleString()}
                                </TableCell>)}
                        </TableRow>)}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={99}>
                            <TablePagination {...args} />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>;
  }
}`,...r.parameters?.docs?.source}}};const Q=["TablePaginationStory"];export{r as TablePaginationStory,Q as __namedExportsOrder,M as default};
