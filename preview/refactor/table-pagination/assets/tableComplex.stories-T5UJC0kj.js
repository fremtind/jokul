import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r}from"./index-siqcju79.js";import{a as O,E as V}from"./ExpandableTableRow-DCLc1Txx.js";import{h as K,T as i,a as u,b as L,c as R,d as y,e as B,f as I,g as s}from"./_index-D7j_h4mO.js";import{c as M}from"./clsx-B-dksMZM.js";import{T as W}from"./TablePagination-BJv7EhQR.js";import{u as q}from"./utils-QVdaF3ec.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as z}from"./TextInput-Ck0FVCKE.js";import{S as G}from"./Select-D0zti9dA.js";import{B as J}from"./Button-fpmiG8ZH.js";import{L as T}from"./Link-uanxgvhJ.js";import{b as Q,D as v,a as S}from"./DescriptionList-DiipGfWQ.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useAnimatedHeight-BAxzwhOL.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./useId-CahK3IZ3.js";import"./Expander-BxdOM-8M.js";import"./ChevronDownIcon-S48iRPy_.js";import"./Icon-DnRkF4CO.js";import"./ChevronUpIcon-BLgKn6fz.js";import"./ArrowVerticalAnimated-Dz5LN4Sz.js";import"./ArrowDownIcon-BlnkIUxx.js";import"./Pagination-CBopdUZa.js";import"./IconButton-CwYjR4Na.js";import"./ChevronLeftIcon-BDA7AAte.js";import"./ChevronRightIcon-DscfWr0z.js";import"./NativeSelect-DZHSFOPU.js";import"./valuePair-Bn6SadUn.js";import"./InputGroup-BFZ5w6w_.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./BaseTextInput-DDvdNY7P.js";import"./useListNavigation-Bf1PKTdz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";const P=r.forwardRef(({className:p,...l},c)=>e.jsx(K,{state:{isTableHead:!1,isTableBody:!1,isTableFooter:!0},children:e.jsx("tfoot",{className:M("jkl-table-foot",p),...l,ref:c})}));P.displayName="TableFooter";P.__docgenInfo={description:"",methods:[],displayName:"TableFooter",composes:["HTMLAttributes"]};const $e={title:"Komponenter/Table",component:I,subcomponents:{TableCaption:B,TableHead:y,TableHeader:R,TableBody:L,TableRow:u,TableCell:i},parameters:{layout:"centered"},tags:["autodocs"]},d={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(B,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:p=>{const l=r.useRef(null),[c,D]=r.useState(1),[m,F]=r.useState(6),[b,A]=r.useState(s.columns[0]),[g,E]=r.useState("desc"),[w,k]=r.useState(""),[f,j]=r.useState(""),[h,H]=r.useState(s.rows),x=(c-1)*m,N=(t,n)=>{A(t),E(n)},{getSortProps:_}=q(b,g,N);return r.useEffect(()=>{H(s.rows.filter(t=>t.toString().toLowerCase().includes(w.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(f.toLowerCase())).slice(x,x+m))},[x,m,w,f]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(z,{label:"Søk",value:w,placeholder:"Søk",onChange:t=>k(t.target.value)}),e.jsx(G,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:f,onChange:t=>j(t.target.value)}),e.jsx(J,{onClick:()=>{k(""),j("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(I,{...p,children:[e.jsx(y,{sticky:!0,children:e.jsx(u,{children:s.columns.slice(0,6).map((t,n)=>e.jsx(R,{bold:!0,..._(t),children:t},n))})}),e.jsx(L,{children:h.length!==0?h.sort((t,n)=>{if(b==="Forfallsdato"){const o=new Date(t[0]).getTime(),a=new Date(n[0]).getTime();return g==="asc"?o-a:a-o}if(b==="Beløp"){const o=Number(t[2]),a=Number(n[2]);return g==="asc"?o-a:a-o}return 0}).map((t,n)=>e.jsxs(O,{clickable:!1,expandedChildren:e.jsxs(Q,{children:[s.columns.map((o,a)=>t.map(($,C)=>a===C&&e.jsxs(r.Fragment,{children:[e.jsx(v,{children:o}),e.jsx(S,{children:$.toLocaleString()})]},C))),e.jsx(v,{children:"Faktura"}),e.jsx(S,{children:e.jsx(T,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"})}),e.jsx(S,{children:e.jsx(T,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"})})]}),children:[e.jsx(i,{children:e.jsx(T,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((o,a)=>e.jsx(i,{"data-th":s.columns[a],children:o.toLocaleString()},a)),e.jsx(V,{children:"Vis detaljer"})]},n)):e.jsx(u,{children:e.jsx(i,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(P,{children:e.jsx(u,{children:e.jsx(i,{colSpan:99,children:e.jsx(W,{activePage:c,totalNumberOfRows:s.rows.length,rowsPerPage:m,rowsPerPageItems:[6,12,24,{label:"Alle",value:h.length}],onChangeRowsPerPage:t=>{const n=Number.parseInt(t.target.value);F(n),D(1),l.current&&l.current.scrollIntoView({behavior:"smooth"})},onChange:(t,n)=>{D(n),l.current&&l.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Kompleks Table",
  args: {
    collapseToList: true,
    fullWidth: true,
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>,
    children: ""
  },
  render: args => {
    const ref = useRef<HTMLTableElement>(null);
    const [activePage, setActivePage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [sortBy, setSortBy] = useState(faktura.columns[0]);
    const [direction, setDirection] = useState<TableSortDirection>("desc");
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [filteredRows, setFilteredRows] = useState(faktura.rows);
    const startIndex = (activePage - 1) * rowsPerPage;
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
                  setActivePage(1);
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
}`,...d.parameters?.docs?.source}}};const Oe=["TableComplex"];export{d as TableComplex,Oe as __namedExportsOrder,$e as default};
