import{R as e,r}from"./index-siqcju79.js";import{a as j,E as V}from"./ExpandableTableRow-BEKU88aF.js";import{T as s,a as u,b as x,c as y,d as R,e as v,f as L,g as l}from"./_index-BYNv_LSx.js";import{T as _,a as K}from"./TablePagination-mBuq8QCl.js";import{u as W}from"./utils-QVdaF3ec.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as M}from"./TextInput-CWffCVAW.js";import{S as q}from"./Select-okvEZ4pp.js";import{B as z}from"./Button-Dng0c-UK.js";import{b as G,D as C,a as T}from"./DescriptionList-BkNFVB_x.js";import{L as S}from"./Link-Dwdm3rDB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-RiQMQofH.js";import"./tokens-CmXyXTIM.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./useId-CahK3IZ3.js";import"./Expander-D4NFiOdd.js";import"./ChevronDownIcon-fl1APhkk.js";import"./Icon-mINJCSxV.js";import"./ChevronUpIcon-CVpRESJ9.js";import"./ArrowVerticalAnimated-CU3StSif.js";import"./IconButton-B7cUPyFx.js";import"./ChevronLeftIcon-2lcKNR9H.js";import"./ChevronRightIcon-DUrPUeX8.js";import"./NativeSelect-CLDXEBU6.js";import"./valuePair-Bn6SadUn.js";import"./InputGroup-jkm-2-wj.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseTextInput-Un_Ktj_I.js";import"./useListNavigation-Bf1PKTdz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const He={title:"Komponenter/Table",component:L,subcomponents:{TableCaption:v,TableHead:R,TableHeader:y,TableBody:x,TableRow:u,TableCell:s},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.createElement(v,{srOnly:!0},"Overskrift for skjermlesere"),children:""},render:B=>{const i=r.useRef(null),[h,P]=r.useState(0),[c,I]=r.useState(6),[p,F]=r.useState(l.columns[0]),[d,A]=r.useState("desc"),[b,k]=r.useState(""),[g,D]=r.useState(""),[w,H]=r.useState(l.rows),f=h*c,N=(t,n)=>{F(t),A(n)},{getSortProps:$}=W(p,d,N);return r.useEffect(()=>{H(l.rows.filter(t=>t.toString().toLowerCase().includes(b.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(g.toLowerCase())).slice(f,f+c))},[f,c,b,g]),e.createElement(e.Fragment,null,e.createElement("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"}},e.createElement(M,{label:"Søk",value:b,placeholder:"Søk",onChange:t=>k(t.target.value)}),e.createElement(q,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:g,onChange:t=>D(t.target.value)}),e.createElement(z,{onClick:()=>{k(""),D("")}},"Fjern filter")),e.createElement("div",{style:{width:"90dvw"}},e.createElement(L,{...B},e.createElement(R,{sticky:!0},e.createElement(u,null,l.columns.slice(0,6).map((t,n)=>e.createElement(y,{key:n,bold:!0,...$(t)},t)))),e.createElement(x,null,w.length!==0?w.sort((t,n)=>{if(p==="Forfallsdato"){const o=new Date(t[0]).getTime(),a=new Date(n[0]).getTime();return d==="asc"?o-a:a-o}if(p==="Beløp"){const o=Number(t[2]),a=Number(n[2]);return d==="asc"?o-a:a-o}return 0}).map((t,n)=>e.createElement(j,{clickable:!1,key:n,expandedChildren:e.createElement(G,null,l.columns.map((o,a)=>t.map((O,E)=>a===E&&e.createElement(r.Fragment,{key:E},e.createElement(C,null,o),e.createElement(T,null,O.toLocaleString())))),e.createElement(C,null,"Faktura"),e.createElement(T,null,e.createElement(S,{external:!0,target:"_blank",href:"#"},"Åpne i ny fane")),e.createElement(T,null,e.createElement(S,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#"},"Last ned")))},e.createElement(s,null,e.createElement(S,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#"},new Date(t[0]).toLocaleDateString())),t.slice(1,6).map((o,a)=>e.createElement(s,{key:a,"data-th":l.columns[a]},o.toLocaleString())),e.createElement(V,null,"Vis detaljer"))):e.createElement(u,null,e.createElement(s,{colSpan:99},"Fant ingen fakturaer."))),e.createElement(_,null,e.createElement(u,null,e.createElement(s,{colSpan:99},e.createElement(K,{activePage:h,totalNumberOfRows:l.rows.length,rowsPerPage:c,rowsPerPageItems:[6,12,24,{label:"Alle",value:w.length}],onChangeRowsPerPage:t=>{const n=Number.parseInt(t.target.value);I(n),P(0),i.current&&i.current.scrollIntoView({behavior:"smooth"})},onChange:(t,n)=>{P(n),i.current&&i.current.scrollIntoView({behavior:"smooth"})}})))))))}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
