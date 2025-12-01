import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as a}from"./index-Bv6P490N.js";import{a as O,E as V}from"./ExpandableTableRow-lcM8DDTi.js";import{T as l,a as u,b as C,c as v,d as L,e as R,f as y,g as s}from"./_index-BClxPbK9.js";import{T as _,a as K}from"./TablePagination-7TJpQHvR.js";import{u as W}from"./utils-QVdaF3ec.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as M}from"./TextInput-CuQXZqTY.js";import{S as q}from"./Select-Ck0QnSi0.js";import{B as z}from"./Button-7xZWz2K4.js";import{L as f}from"./Link-C9ugz-5z.js";import{b as G,D as j,a as x}from"./DescriptionList-C_7ONglC.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-x0eECUB-.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./usePreviousValue-CFxVqUaX.js";import"./useId-B1yQ3ow-.js";import"./Expander-B7oCzgli.js";import"./ChevronDownIcon-ulgFH_bH.js";import"./Icon-DYEEOjBa.js";import"./ChevronUpIcon-CAkXFTAT.js";import"./ArrowVerticalAnimated-DxukZOje.js";import"./ArrowDownIcon-CDuWY9sD.js";import"./IconButton-9XUYZjY_.js";import"./ChevronLeftIcon-9oYStCk-.js";import"./ChevronRightIcon-B1bQ5uAI.js";import"./NativeSelect-Dq0rzBEf.js";import"./valuePair-Bn6SadUn.js";import"./InputGroup-Cl7hE9X0.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./BaseTextInput-BSs526x8.js";import"./useListNavigation-BF5Y0bzc.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";const He={title:"Komponenter/Table",component:y,subcomponents:{TableCaption:R,TableHead:L,TableHeader:v,TableBody:C,TableRow:u,TableCell:l},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(R,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:B=>{const i=a.useRef(null),[T,S]=a.useState(0),[c,I]=a.useState(6),[d,F]=a.useState(s.columns[0]),[p,A]=a.useState("desc"),[b,P]=a.useState(""),[g,D]=a.useState(""),[w,E]=a.useState(s.rows),h=T*c,H=(t,n)=>{F(t),A(n)},{getSortProps:N}=W(d,p,H);return a.useEffect(()=>{E(s.rows.filter(t=>t.toString().toLowerCase().includes(b.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(g.toLowerCase())).slice(h,h+c))},[h,c,b,g]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(M,{label:"Søk",value:b,placeholder:"Søk",onChange:t=>P(t.target.value)}),e.jsx(q,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:g,onChange:t=>D(t.target.value)}),e.jsx(z,{onClick:()=>{P(""),D("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(y,{...B,children:[e.jsx(L,{sticky:!0,children:e.jsx(u,{children:s.columns.slice(0,6).map((t,n)=>e.jsx(v,{bold:!0,...N(t),children:t},n))})}),e.jsx(C,{children:w.length!==0?w.sort((t,n)=>{if(d==="Forfallsdato"){const o=new Date(t[0]).getTime(),r=new Date(n[0]).getTime();return p==="asc"?o-r:r-o}if(d==="Beløp"){const o=Number(t[2]),r=Number(n[2]);return p==="asc"?o-r:r-o}return 0}).map((t,n)=>e.jsxs(O,{clickable:!1,expandedChildren:e.jsxs(G,{children:[s.columns.map((o,r)=>t.map(($,k)=>r===k&&e.jsxs(a.Fragment,{children:[e.jsx(j,{children:o}),e.jsx(x,{children:$.toLocaleString()})]},k))),e.jsx(j,{children:"Faktura"}),e.jsx(x,{children:e.jsx(f,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"})}),e.jsx(x,{children:e.jsx(f,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"})})]}),children:[e.jsx(l,{children:e.jsx(f,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((o,r)=>e.jsx(l,{"data-th":s.columns[r],children:o.toLocaleString()},r)),e.jsx(V,{children:"Vis detaljer"})]},n)):e.jsx(u,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(_,{children:e.jsx(u,{children:e.jsx(l,{colSpan:99,children:e.jsx(K,{activePage:T,totalNumberOfRows:s.rows.length,rowsPerPage:c,rowsPerPageItems:[6,12,24,{label:"Alle",value:w.length}],onChangeRowsPerPage:t=>{const n=Number.parseInt(t.target.value);I(n),S(0),i.current&&i.current.scrollIntoView({behavior:"smooth"})},onChange:(t,n)=>{S(n),i.current&&i.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Kompleks Table",
  args: {
    collapseToList: true,
    fullWidth: true,
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>,
    children: ""
  },
  render: args => {
    const ref = useRef<HTMLTableElement>(null);
    const [activePage, setActivePage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [sortBy, setSortBy] = useState(faktura.columns[0]);
    const [direction, setDirection] = useState<TableSortDirection>("desc");
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [filteredRows, setFilteredRows] = useState(faktura.rows);
    const startIndex = activePage * rowsPerPage;
    const handleSortChange = (sortKey: string, sortDirection: TableSortDirection) => {
      setSortBy(sortKey);
      setDirection(sortDirection);
    };
    const {
      getSortProps
    } = useSortableTableHeader(sortBy, direction, handleSortChange);
    useEffect(() => {
      setFilteredRows(faktura.rows.filter(row => row.toString().toLowerCase().includes(search.toLowerCase())).filter(row => row[3].toString().toLowerCase().includes(status.toLowerCase())).slice(startIndex, startIndex + rowsPerPage));
    }, [startIndex, rowsPerPage, search, status]);
    return <>
                <aside style={{
        display: "flex",
        gap: "24px",
        alignItems: "end",
        marginBlockEnd: "24px"
      }}>
                    <TextInput label={"Søk"} value={search} placeholder={"Søk"} onChange={e => setSearch(e.target.value)} />
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
                </aside>
                <div style={{
        width: "90dvw"
      }}>
                    <Table {...args}>
                        <TableHead sticky={true}>
                            <TableRow>
                                {faktura.columns.slice(0, 6).map((column, index) => <TableHeader key={index} bold {...getSortProps(column)}>
                                            {column}
                                        </TableHeader>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.length !== 0 ? filteredRows.sort((a, b) => {
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
            }).map((row, rowIndex) => <ExpandableTableRow
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            clickable={false} key={rowIndex} expandedChildren={<DescriptionList>
                                                    {faktura.columns.map((column, columnIndex) => row.map((cell, rowIndex) => columnIndex === rowIndex && <Fragment key={rowIndex}>
                                                                            <DescriptionTerm>
                                                                                {column}
                                                                            </DescriptionTerm>
                                                                            <DescriptionDetail>
                                                                                {cell.toLocaleString()}
                                                                            </DescriptionDetail>
                                                                        </Fragment>))}
                                                    <DescriptionTerm>
                                                        Faktura
                                                    </DescriptionTerm>
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
                                            {row.slice(1, 6).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={faktura.columns[cellIndex]}>
                                                        {cell.toLocaleString()}
                                                    </TableCell>)}
                                            <ExpandableTableRowController>
                                                Vis detaljer
                                            </ExpandableTableRowController>
                                        </ExpandableTableRow>) : <TableRow>
                                    <TableCell colSpan={99}>
                                        Fant ingen fakturaer.
                                    </TableCell>
                                </TableRow>}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={99}>
                                    <TablePagination activePage={activePage} totalNumberOfRows={faktura.rows.length} rowsPerPage={rowsPerPage} rowsPerPageItems={[6, 12, 24, {
                  label: "Alle",
                  value: filteredRows.length
                }]} onChangeRowsPerPage={e => {
                  const newRowsPerPage = Number.parseInt(e.target.value);
                  setRowsPerPage(newRowsPerPage);
                  setActivePage(0);
                  if (ref.current) {
                    ref.current.scrollIntoView({
                      behavior: "smooth"
                    });
                  }
                }} onChange={(_, toPage) => {
                  setActivePage(toPage);
                  if (ref.current) {
                    ref.current.scrollIntoView({
                      behavior: "smooth"
                    });
                  }
                }} />
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </>;
  }
}`,...m.parameters?.docs?.source}}};const Ne=["TableComplex"];export{m as TableComplex,Ne as __namedExportsOrder,He as default};
