import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as x}from"./index-Bv6P490N.js";import{S as F}from"./Search-vMwSKOIW.js";import{a as R,E as H}from"./ExpandableTableRow-C3lnkhpK.js";import{e as E,b as T,a as h,d as C,c as w,T as g}from"./TablePagination-CqSRNUZZ.js";import{T as u,a as p,s as y,f as i,c as I}from"./_index-Bur7aFCs.js";import{L as j}from"./Link-C9ugz-5z.js";import{b as $,D as B,a as L}from"./DescriptionList-C_7ONglC.js";import{S as v}from"./Select-Ck0QnSi0.js";import{B as A}from"./Button-7xZWz2K4.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./InputGroup-Cl7hE9X0.js";import"./useId-B1yQ3ow-.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./Icon-DYEEOjBa.js";import"./useAnimatedHeight-x0eECUB-.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./usePreviousValue-CFxVqUaX.js";import"./Expander-B7oCzgli.js";import"./ChevronDownIcon-ulgFH_bH.js";import"./ChevronUpIcon-CAkXFTAT.js";import"./IconButton-9XUYZjY_.js";import"./ChevronLeftIcon-9oYStCk-.js";import"./ChevronRightIcon-B1bQ5uAI.js";import"./NativeSelect-Dq0rzBEf.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DxukZOje.js";import"./ArrowDownIcon-CDuWY9sD.js";import"./TextInput-CuQXZqTY.js";import"./BaseTextInput-BSs526x8.js";import"./useListNavigation-BF5Y0bzc.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";const P=(c,r,o)=>({getSortProps:a=>{const d=c===a?r:"none",l={asc:"desc",desc:"none",none:"asc"}[d]??"asc";return{sortable:{onClick:()=>o(a,l),direction:d}}}}),Se={title:"Komponenter/Table",component:g,subcomponents:{ExpandableTableRow:R,TableBody:w,TableCell:p,TableCaption:C,TableHead:h,TableHeader:T,TableRow:u,TablePagination:E},parameters:{layout:"fullscreen"},args:{collapseToList:!1,fullWidth:!0,caption:e.jsx(C,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},tags:["autodocs","tabular data"]},f={render:c=>e.jsxs(g,{...c,children:[e.jsx(h,{sticky:!0,children:e.jsx(u,{children:y.columns.map((r,o)=>e.jsx(T,{bold:!0,children:r},o))})}),e.jsx(w,{children:y.rows.map((r,o)=>e.jsx(u,{children:r.map((t,a)=>e.jsx(p,{"data-th":y.columns[a],children:t},a))},o))})]})},S={name:"Sortering",args:{caption:e.jsx(C,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:c=>{const[r,o]=x.useState(i.columns[0]),[t,a]=x.useState("desc"),b=(n,l)=>{o(n),a(l)},{getSortProps:d}=P(r,t,b);return e.jsxs(g,{caption:c.caption,fullWidth:!0,children:[e.jsx(h,{sticky:!0,children:e.jsx(u,{children:i.columns.slice(0,4).map((n,l)=>e.jsx(T,{bold:!0,...d(n),children:n},l))})}),e.jsx(w,{children:i.rows.sort((n,l)=>{if(r==="Forfallsdato"){const m=new Date(n[0]).getTime(),s=new Date(l[0]).getTime();return t==="asc"?m-s:s-m}if(r==="Beløp"){const m=Number(n[2]),s=Number(l[2]);return t==="asc"?m-s:s-m}return 0}).map((n,l)=>e.jsx(u,{children:n.slice(0,4).map((m,s)=>e.jsx(p,{"data-th":I[s],children:m.toLocaleString()},s))},l))})]})}},k={render:c=>e.jsxs(g,{...c,children:[e.jsx(h,{sticky:!0,children:e.jsxs(u,{children:[i.columns.slice(0,4).map((r,o)=>e.jsx(T,{bold:!0,children:r},o)),e.jsx(T,{})]})}),e.jsx(w,{children:i.rows.map((r,o)=>e.jsxs(R,{expandedChildren:e.jsxs($,{children:[i.columns.map((t,a)=>r.map((b,d)=>a===d&&e.jsxs(x.Fragment,{children:[e.jsx(B,{children:t}),e.jsx(L,{children:b.toLocaleString()})]},d))),e.jsx(B,{children:"Faktura"}),e.jsx(L,{children:e.jsx(j,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"})}),e.jsx(L,{children:e.jsx(j,{download:`${r[3]} ${new Date(r[0]).toLocaleDateString()}`,href:"#",children:"Last ned"})})]}),children:[e.jsx(p,{children:e.jsx(j,{download:`${r[3]} ${new Date(r[0]).toLocaleDateString()}`,href:"#",children:new Date(r[0]).toLocaleDateString()})}),r.slice(1,4).map((t,a)=>e.jsx(p,{"data-th":I[a],children:t.toLocaleString()},a)),e.jsx(H,{children:"Vis detaljer"})]},o))})]})},D={name:"Filtrering av innhold",render:c=>{const[r,o]=x.useState(""),[t,a]=x.useState(""),[b,d]=x.useState(i.rows);return x.useEffect(()=>{d(i.rows.filter(n=>n.toString().toLowerCase().includes(r.toLowerCase())).filter(n=>n[3].toString().toLowerCase().includes(t.toLowerCase())))},[r,t]),e.jsxs(e.Fragment,{children:[e.jsxs("search",{"aria-label":"Filtrer fakturaer",style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(F,{}),e.jsx(v,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:t,onChange:n=>a(n.target.value)}),e.jsx(A,{onClick:()=>{o(""),a("")},children:"Fjern filter"})]}),e.jsxs(g,{...c,children:[e.jsx(h,{sticky:!0,children:e.jsx(u,{children:i.columns.slice(0).map((n,l)=>e.jsx(T,{bold:!0,children:n},l))})}),e.jsx(w,{children:b.length!==0?b.map((n,l)=>e.jsxs(u,{children:[e.jsx(p,{children:e.jsx(j,{download:`${n[3]} ${new Date(n[0]).toLocaleDateString()}`,href:"#",children:new Date(n[0]).toLocaleDateString()})}),n.slice(1).map((m,s)=>e.jsx(p,{"data-th":i.columns[s],children:m.toLocaleString()},s))]},l)):e.jsx(u,{children:e.jsx(p,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
            <TableHead sticky={true}>
                <TableRow>
                    {skadesaker.columns.map((column, index) => <TableHeader key={index} bold>
                            {column}
                        </TableHeader>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {skadesaker.rows.map((row, rowIndex) => <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => <TableCell key={cellIndex} data-th={skadesaker.columns[cellIndex]}>
                                {cell}
                            </TableCell>)}
                    </TableRow>)}
            </TableBody>
        </Table>
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Sortering",
  args: {
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>,
    children: ""
  },
  render: args => {
    const [sortBy, setSortBy] = useState(faktura.columns[0]);
    const [direction, setDirection] = useState<TableSortDirection>("desc");
    const handleSortChange = (sortKey: string, sortDirection: TableSortDirection) => {
      setSortBy(sortKey);
      setDirection(sortDirection);
    };
    const {
      getSortProps
    } = useSortableTableHeader(sortBy, direction, handleSortChange);
    return <Table caption={args.caption} fullWidth>
                <TableHead sticky={true}>
                    <TableRow>
                        {faktura.columns.slice(0, 4).map((column, index) => <TableHeader key={index} bold {...getSortProps(column)}>
                                {column}
                            </TableHeader>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {faktura.rows.sort((a, b) => {
          if (sortBy === "Forfallsdato") {
            const timeA = new Date(a[0] as Date).getTime();
            const timeB = new Date(b[0] as Date).getTime();
            if (direction === "asc") {
              return timeA - timeB;
            }
            return timeB - timeA;
          }
          if (sortBy === "Beløp") {
            const numberA = Number(a[2]);
            const numberB = Number(b[2]);
            if (direction === "asc") {
              return numberA - numberB;
            }
            return numberB - numberA;
          }
          return 0;
        }).map((row, rowIndex) => <TableRow key={rowIndex}>
                                {row.slice(0, 4).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={columns[cellIndex]}>
                                        {cell.toLocaleString()}
                                    </TableCell>)}
                            </TableRow>)}
                </TableBody>
            </Table>;
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
            <TableHead sticky={true}>
                <TableRow>
                    {faktura.columns.slice(0, 4).map((column, index) => <TableHeader key={index} bold>
                            {column}
                        </TableHeader>)}
                    <TableHeader />
                </TableRow>
            </TableHead>
            <TableBody>
                {faktura.rows.map((row, rowIndex) => <ExpandableTableRow key={rowIndex} expandedChildren={<DescriptionList>
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
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Filtrering av innhold",
  render: args => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [filteredRows, setFilteredRows] = useState(faktura.rows);
    useEffect(() => {
      setFilteredRows(faktura.rows.filter(row => row.toString().toLowerCase().includes(search.toLowerCase())).filter(row => row[3].toString().toLowerCase().includes(status.toLowerCase())));
    }, [search, status]);
    return <>
                <search aria-label="Filtrer fakturaer" style={{
        display: "flex",
        gap: "24px",
        alignItems: "end",
        marginBlockEnd: "24px"
      }}>
                    <Search />
                    <Select items={[{
          label: "Alle statuser",
          value: ""
        }, "Faktura", "Påminnelse", "Inkasso"]} label={"Status"} name={"status"} value={status} onChange={e => setStatus(e.target.value)} />

                    <Button onClick={() => {
          setSearch("");
          setStatus("");
        }}>
                        Fjern filter
                    </Button>
                </search>
                <Table {...args}>
                    <TableHead sticky={true}>
                        <TableRow>
                            {faktura.columns.slice(0).map((column, index) => <TableHeader key={index} bold>
                                    {column}
                                </TableHeader>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.length !== 0 ? filteredRows.map((row, rowIndex) => <TableRow key={rowIndex}>
                                    <TableCell>
                                        <Link download={\`\${row[3]} \${new Date(row[0] as Date).toLocaleDateString()}\`} href={"#"}>
                                            {new Date(row[0] as Date).toLocaleDateString()}
                                        </Link>
                                    </TableCell>
                                    {row.slice(1).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={faktura.columns[cellIndex]}>
                                            {cell.toLocaleString()}
                                        </TableCell>)}
                                </TableRow>) : <TableRow>
                                <TableCell colSpan={99}>
                                    Fant ingen fakturaer.
                                </TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </>;
  }
}`,...D.parameters?.docs?.source}}};const ke=["_Table","SortableTable","Expandable","Filtering"];export{k as Expandable,D as Filtering,S as SortableTable,f as _Table,ke as __namedExportsOrder,Se as default};
