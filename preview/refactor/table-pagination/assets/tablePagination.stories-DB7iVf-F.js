import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{R as m}from"./index-Bv6P490N.js";import{F as T}from"./Flex-DAYRz_h9.js";import{g as n,f as h,d as x,a as p,c as v,b as R,T as P,e as f}from"./_index-B1DctrOV.js";import{T as d}from"./TablePagination-da27ES0x.js";import{c as k}from"./paginated-table-data-ZMeh4d0Y.js";/* empty css               *//* empty css               */import{L as y}from"./Link-C9ugz-5z.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";import"./ArrowVerticalAnimated-DxukZOje.js";import"./ArrowDownIcon-CDuWY9sD.js";import"./Icon-DYEEOjBa.js";import"./Pagination-jxtGHhws.js";import"./IconButton-9XUYZjY_.js";import"./ChevronLeftIcon-9oYStCk-.js";import"./ChevronRightIcon-B1bQ5uAI.js";import"./NativeSelect-Dq0rzBEf.js";import"./valuePair-Bn6SadUn.js";import"./InputGroup-Cl7hE9X0.js";import"./useId-B1yQ3ow-.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./TextInput-CuQXZqTY.js";import"./BaseTextInput-BSs526x8.js";const ne={title:"Komponenter/Table/TablePagination",component:d,parameters:{layout:"centered"},tags:["autodocs"]},t={name:"TablePagination",args:{labels:{next:"Neste side",previous:"Forrige side",rowsPerPage:"Fakturaer per side"},activePage:1,totalNumberOfRows:n.rows.length,rowsPerPage:12,rowsPerPageItems:[5,10,12,{label:"Alle",value:-1}],withGoToPage:{gotoLabel:"Side"},onChangeRowsPerPage:()=>"",onChange:()=>""},argTypes:{activePage:{control:{type:"number",min:0}},totalNumberOfRows:{control:{type:"number",min:n.rows.length,max:n.rows.length}},rowsPerPage:{control:{type:"number",min:-1,max:n.rows.length}},withGoToPage:{control:"boolean",description:"Du kan også velge å endre teksten ved siden av input-feltet med en optional goToPageLabel-prop."}},render:r=>{const[l,i]=m.useState(r.activePage||1),[s,w]=m.useState(r.rowsPerPage),g=(l-1)*s,b=n.rows.slice(g,g+s);return e.jsxs(T,{direction:"column",children:[e.jsxs(h,{caption:e.jsx(f,{children:"Eksempel på paginering"}),children:[e.jsx(x,{sticky:!0,children:e.jsx(p,{children:n.columns.slice(0,5).map((a,o)=>e.jsx(v,{bold:!0,children:a},o))})}),e.jsx(R,{children:b.map((a,o)=>e.jsxs(p,{children:[e.jsx(P,{children:e.jsx(y,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:new Date(a[0]).toLocaleDateString()})}),a.slice(1,5).map((u,c)=>e.jsx(P,{"data-th":k[c],children:u.toLocaleString()},c))]},o))})]}),e.jsx(d,{...r,activePage:l,rowsPerPage:s,onChange:i,onChangeRowsPerPage:a=>{const o=Number.parseInt(a.target.value);w(o),i(1)}})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "TablePagination",
  args: {
    labels: {
      next: "Neste side",
      previous: "Forrige side",
      rowsPerPage: "Fakturaer per side"
    },
    activePage: 1,
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
    const [activePage, setActivePage] = React.useState(args.activePage || 1);
    const [rowsPerPage, setRowsPerPage] = React.useState(args.rowsPerPage);
    const startIndex = (activePage - 1) * rowsPerPage;
    const visibleRows = faktura.rows.slice(startIndex, startIndex + rowsPerPage);
    return <Flex direction="column">
                <Table caption={<TableCaption>Eksempel på paginering</TableCaption>}>
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
                </Table>
                <TablePagination {...args} activePage={activePage} rowsPerPage={rowsPerPage} onChange={setActivePage} onChangeRowsPerPage={e => {
        const newRowsPerPage = Number.parseInt(e.target.value);
        setRowsPerPage(newRowsPerPage);
        setActivePage(1);
      }} />
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};const oe=["TablePaginationStory"];export{t as TablePaginationStory,oe as __namedExportsOrder,ne as default};
