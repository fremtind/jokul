import{R as m,j as e}from"./iframe-R6aOaHTp.js";import{F as T}from"./Flex-BNkILn7I.js";import{f as n,e as h,c as x,a as p,b as v,T as P,d as R}from"./_index-DvmlmQUT.js";import{T as f}from"./TableBody-ClLcJdst.js";import{T as d}from"./TablePagination-C5M_2vrz.js";import{c as k}from"./paginated-table-data-ZMeh4d0Y.js";/* empty css               *//* empty css               */import{L as y}from"./Link-BcUAr24T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-D0A8WaCf.js";import"./mergeRefs-CswqJ-FZ.js";import"./ChevronDownIcon-C12FInFu.js";import"./Icon-C_eqd1IE.js";import"./ChevronUpIcon-fnpcaIO7.js";import"./Pagination-qjc5jISP.js";import"./IconButton-CFeFpgTl.js";import"./ChevronLeftIcon-Bu9kvmGc.js";import"./ChevronRightIcon-B6ZueDCh.js";import"./NativeSelect-DOjdW9Gg.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BPrNSXtA.js";import"./ArrowDownIcon-BTjL8Hh8.js";import"./InputGroup-CC2tJpd7.js";import"./useId-BUKv216K.js";import"./Label-DcGKuD_n.js";import"./SupportLabel-BXNMeyuh.js";import"./WarningIcon-BajwyuyY.js";import"./TextInput-BRRNG59a.js";import"./BaseTextInput-Bp-ifYh-.js";const te={title:"Komponenter/Table/TablePagination",component:d,parameters:{layout:"centered"},tags:["autodocs"]},t={name:"TablePagination",args:{labels:{next:"Neste side",previous:"Forrige side",rowsPerPage:"Fakturaer per side"},activePage:1,totalNumberOfRows:n.rows.length,rowsPerPage:12,rowsPerPageItems:[5,10,12,{label:"Alle",value:-1}],withGoToPage:{gotoLabel:"Side"},onChangeRowsPerPage:()=>"",onChange:()=>""},argTypes:{activePage:{control:{type:"number",min:0}},totalNumberOfRows:{control:{type:"number",min:n.rows.length,max:n.rows.length}},rowsPerPage:{control:{type:"number",min:-1,max:n.rows.length}},withGoToPage:{control:"boolean",description:"Du kan også velge å endre teksten ved siden av input-feltet med en optional goToPageLabel-prop."}},render:r=>{const[i,l]=m.useState(r.activePage||1),[s,w]=m.useState(r.rowsPerPage),g=(i-1)*s,b=n.rows.slice(g,g+s);return e.jsxs(T,{direction:"column",children:[e.jsxs(h,{caption:e.jsx(R,{children:"Eksempel på paginering"}),children:[e.jsx(x,{sticky:!0,children:e.jsx(p,{children:n.columns.slice(0,5).map((a,o)=>e.jsx(v,{bold:!0,children:a},o))})}),e.jsx(f,{children:b.map((a,o)=>e.jsxs(p,{children:[e.jsx(P,{children:e.jsx(y,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:new Date(a[0]).toLocaleDateString()})}),a.slice(1,5).map((u,c)=>e.jsx(P,{"data-th":k[c],children:u.toLocaleString()},c))]},o))})]}),e.jsx(d,{...r,activePage:i,rowsPerPage:s,onChange:l,onChangeRowsPerPage:a=>{const o=Number.parseInt(a.target.value);w(o),l(1)}})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const re=["TablePaginationStory"];export{t as TablePaginationStory,re as __namedExportsOrder,te as default};
