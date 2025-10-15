import{R as e}from"./index-siqcju79.js";import{g as n,f as b,e as d,d as w,a as l,c as u,b as T,T as s}from"./_index-7Kjmik-R.js";import{a as c,T as P}from"./TablePagination-C2ztY509.js";import{c as k}from"./paginated-table-data-ZMeh4d0Y.js";/* empty css               *//* empty css               */import{L as f}from"./Link-Dwdm3rDB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./ArrowVerticalAnimated-BAkArw06.js";import"./ArrowUpIcon-CFNLzgG_.js";import"./Icon-mINJCSxV.js";import"./useId-CahK3IZ3.js";import"./IconButton-BsqD9nTf.js";import"./ChevronLeftIcon-2lcKNR9H.js";import"./ChevronRightIcon-DUrPUeX8.js";import"./valuePair-Bn6SadUn.js";import"./InputGroup-BJwbXp8L.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./TextInput-ziLWZWeG.js";import"./BaseTextInput-BcWqlF22.js";const J={title:"Komponenter/Table/TablePagination",component:c,parameters:{layout:"centered"},tags:["autodocs"]},o={name:"TablePagination",args:{labels:{next:"Neste side",previous:"Forrige side",rowsPerPage:"Fakturaer per side"},activePage:0,totalNumberOfRows:n.rows.length,rowsPerPage:12,rowsPerPageItems:[5,10,12,{label:"Alle",value:-1}],withGoToPage:{gotoLabel:"Side"},onChangeRowsPerPage:()=>"",onChange:()=>""},argTypes:{activePage:{control:{type:"number",min:0}},totalNumberOfRows:{control:{type:"number",min:n.rows.length,max:n.rows.length}},rowsPerPage:{control:{type:"number",min:-1,max:n.rows.length}},withGoToPage:{control:"boolean",description:"Du kan også velge å endre teksten ved siden av input-feltet med en optional goToPageLabel-prop."}},render:t=>{const i=(t.activePage||0)*t.rowsPerPage,g=n.rows.slice(i,i+t.rowsPerPage);return e.createElement(b,{caption:e.createElement(d,null,"Eksempel på paginering")},e.createElement(w,{sticky:!0},e.createElement(l,null,n.columns.slice(0,5).map((a,r)=>e.createElement(u,{key:r,bold:!0},a)))),e.createElement(T,null,g.map((a,r)=>e.createElement(l,{key:r},e.createElement(s,null,e.createElement(f,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#"},new Date(a[0]).toLocaleDateString())),a.slice(1,5).map((p,m)=>e.createElement(s,{key:m,"data-th":k[m]},p.toLocaleString()))))),e.createElement(P,null,e.createElement(l,null,e.createElement(s,{colSpan:99},e.createElement(c,{...t})))))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const M=["TablePaginationStory"];export{o as TablePaginationStory,M as __namedExportsOrder,J as default};
