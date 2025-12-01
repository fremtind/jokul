import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as g}from"./index-Bv6P490N.js";import{e as p,T,a as w,b as u,c as P,d as x}from"./TablePagination-CqSRNUZZ.js";import{b as h,f as o,T as i,a as c,c as f}from"./_index-Bur7aFCs.js";import{c as k}from"./clsx-B-dksMZM.js";import{L as v}from"./Link-C9ugz-5z.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./ChevronDownIcon-ulgFH_bH.js";import"./Icon-DYEEOjBa.js";import"./ChevronUpIcon-CAkXFTAT.js";import"./useId-B1yQ3ow-.js";import"./IconButton-9XUYZjY_.js";import"./ChevronLeftIcon-9oYStCk-.js";import"./ChevronRightIcon-B1bQ5uAI.js";import"./NativeSelect-Dq0rzBEf.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DxukZOje.js";import"./ArrowDownIcon-CDuWY9sD.js";import"./InputGroup-Cl7hE9X0.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./TextInput-CuQXZqTY.js";import"./BaseTextInput-BSs526x8.js";const m=g.forwardRef(({className:a,...r},l)=>e.jsx(h,{state:{isTableHead:!1,isTableBody:!1,isTableFooter:!0},children:e.jsx("tfoot",{className:k("jkl-table-foot",a),...r,ref:l})}));m.displayName="TableFooter";m.__docgenInfo={description:"",methods:[],displayName:"TableFooter",composes:["HTMLAttributes"]};const Q={title:"Komponenter/Table",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"]},t={args:{labels:{next:"Neste side",previous:"Forrige side",rowsPerPage:"Fakturaer per side"},activePage:0,totalNumberOfRows:o.rows.length,rowsPerPage:12,rowsPerPageItems:[5,10,12,{label:"Alle",value:-1}],withGoToPage:{gotoLabel:"Side"},onChangeRowsPerPage:()=>"",onChange:()=>""},argTypes:{activePage:{control:{type:"number",min:0}},totalNumberOfRows:{control:{type:"number",min:o.rows.length,max:o.rows.length}},rowsPerPage:{control:{type:"number",min:-1,max:o.rows.length}},withGoToPage:{control:"boolean",description:"Du kan også velge å endre teksten ved siden av input-feltet med en optional goToPageLabel-prop."}},render:a=>{const r=(a.activePage||0)*a.rowsPerPage,l=o.rows.slice(r,r+a.rowsPerPage);return e.jsxs(T,{caption:e.jsx(x,{children:"Eksempel på paginering"}),fullWidth:!0,children:[e.jsx(w,{sticky:!0,children:e.jsx(i,{children:o.columns.slice(0,5).map((n,s)=>e.jsx(u,{bold:!0,children:n},s))})}),e.jsx(P,{children:l.map((n,s)=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsx(v,{download:`${n[3]} ${new Date(n[0]).toLocaleDateString()}`,href:"#",children:new Date(n[0]).toLocaleDateString()})}),n.slice(1,5).map((b,d)=>e.jsx(c,{"data-th":f[d],children:b.toLocaleString()},d))]},s))}),e.jsx(m,{children:e.jsx(i,{children:e.jsx(c,{colSpan:99,children:e.jsx(p,{...a})})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    return <Table caption={<TableCaption>Eksempel på paginering</TableCaption>} fullWidth>
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
}`,...t.parameters?.docs?.source}}};const U=["_TablePagination"];export{t as _TablePagination,U as __namedExportsOrder,Q as default};
