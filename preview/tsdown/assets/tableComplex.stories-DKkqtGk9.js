import{r as n,j as e,R as I}from"./iframe-01dd3rVd.js";import{c as P}from"./clsx-B-dksMZM.js";import{u as W}from"./useAnimatedHeight-laLwiyn0.js";import{u as O}from"./useId-Dkkelk-t.js";import{E as G}from"./Expander-DJsnZv1A.js";import{u as z,T as x,a as y,g as J,b as H,c as q,d as V,e as $,f as g}from"./_index-B9qSyYS9.js";import{T as K}from"./TableBody-cF3EnBmC.js";import{T as Q}from"./TablePagination-B7-VWaeK.js";import{u as U}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as X}from"./TextInput-DP7cRV0F.js";import{S as Y}from"./Select-1cks17ro.js";import{B as Z}from"./Button-Bn9_gqyn.js";import{L as E}from"./Link-BpT9uVDR.js";import{b as ee,D as _,a as B}from"./DescriptionList-Ca7SVWVv.js";import"./preload-helper-PPVm8Dsz.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-JfXbX6b2.js";import"./usePreviousValue-BmPKLmUo.js";import"./ChevronDownIcon-D3OgjE8A.js";import"./Icon-CuPpdcnC.js";import"./ChevronUpIcon-CMcZ9DZb.js";import"./Pagination-VZu62q72.js";import"./IconButton-BP5Rz98P.js";import"./ChevronLeftIcon-rtcRAEXq.js";import"./ChevronRightIcon-B_m9LN-R.js";import"./NativeSelect-DYtc6kk1.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CJNVsmoU.js";import"./ArrowDownIcon-DbiYSYsd.js";import"./InputGroup-CvSTsUxP.js";import"./Label-BMlncn0Y.js";import"./SupportLabel-oIMBDzdZ.js";import"./WarningIcon-F9dwpPZ5.js";import"./BaseTextInput-Bus7Uj6F.js";import"./useListNavigation-Bwzd5cPR.js";import"./Loader-D9bDWm5h.js";import"./useDelayedRender-DWLuhDIb.js";const D=n.forwardRef(({isOpen:d,onClick:r,children:l,className:f,id:b,"aria-controls":T,...p},k)=>{if(d===void 0||typeof r!="function")throw new Error("ExpandableTableRowController must have ExpandableTableRow as parent");const{collapseToList:i}=z(),w=p["data-th"],a=i?w:void 0;return e.jsx(x,{className:P("jkl-table-cell--expand",{"jkl-table-cell--expand-without-text":!l},f),...p,ref:k,children:e.jsx(G,{as:"button",className:P("jkl-table-row-expand-button",{"jkl-table-row-expand-button--expanded":d}),id:b,open:d,"aria-controls":T,"aria-label":l?void 0:w||"Ekspander rad",onClick:o=>{o.stopPropagation(),r()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.stopPropagation(),o.preventDefault(),r())},children:l??a})})});D.displayName="ExpandableTableRowController";D.__docgenInfo={description:"",methods:[],displayName:"ExpandableTableRowController",props:{density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:`Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal innholdet være venstrejustert, men for eksempel summer er høyrejustert.
@default "left"`},verticalAlign:{required:!1,tsType:{name:"union",raw:'"center" | "top"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"top"'}]},description:`Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være toppjustert, men dersom raden har knapper kan midtstilling fungere bedre.
@default "top"`},isOpen:{required:!1,tsType:{name:"boolean"},description:"Settes automatisk av ExpandableTableRow"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settes automatisk av ExpandableTableRow"}},composes:["TdHTMLAttributes"]};const F=n.forwardRef((d,r)=>{const{className:l,clickable:f,children:b,expandedChildren:T,onToggle:p,colSpan:k=100,isOpen:i,...w}=d,[a,o]=n.useState(i??!1);n.useEffect(()=>{typeof i>"u"||o(i)},[i]);const[S]=W(a,{timing:"expressive"}),j=()=>{const m=!a;p&&p(m),o(m)},v=P("jkl-table-row--expandable",l,{"jkl-table-row--expanded":a,"jkl-expandable-table-row--clickable-external":f}),L=P("jkl-expandable-table-row__expanded-row",{"jkl-expandable-table-row__expanded-row--expanded":a}),h=O("jkl-expandable-table-row"),R=O("jkl-expandable-table-row-controller");return e.jsxs(e.Fragment,{children:[e.jsx(y,{className:v,clickable:f??{onClick:()=>j()},...w,ref:r,children:I.Children.map(b,m=>I.isValidElement(m)&&m.type===D?I.cloneElement(m,{isOpen:a,onClick:()=>j(),"aria-controls":h,id:R}):m)}),e.jsx("tr",{"aria-hidden":!a,children:e.jsx("td",{colSpan:k,children:e.jsx("fieldset",{ref:S,className:L,id:h,"aria-labelledby":R,hidden:!a,children:T})})})]})});F.displayName="ExpandableTableRow";F.__docgenInfo={description:"",methods:[],displayName:"ExpandableTableRow",props:{clickable:{required:!1,tsType:{name:"ClickableRowProps"},description:"Gir raden interaktivitet og en click-handler."},expandedChildren:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},colSpan:{required:!1,tsType:{name:"number"},description:`Setter bredden på raden som blir åpnet
@default 100`},isOpen:{required:!1,tsType:{name:"boolean"},description:"Om du ønsker en controlled komponent. Hvis du ikke setter denne vil komponenten håndtere state selv."},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};const N=n.forwardRef(({className:d,...r},l)=>e.jsx(J,{state:{isTableHead:!1,isTableBody:!1,isTableFooter:!0},children:e.jsx("tfoot",{className:P("jkl-table-foot",d),...r,ref:l})}));N.displayName="TableFooter";N.__docgenInfo={description:"",methods:[],displayName:"TableFooter",composes:["HTMLAttributes"]};const Ke={title:"Komponenter/Table",component:$,subcomponents:{TableCaption:V,TableHead:q,TableHeader:H,TableBody:K,TableRow:y,TableCell:x}},C={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(V,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:d=>{const r=n.useRef(null),[l,f]=n.useState(1),[b,T]=n.useState(6),[p,k]=n.useState(g.columns[0]),[i,w]=n.useState("desc"),[a,o]=n.useState(""),[S,j]=n.useState(""),[v,L]=n.useState(g.rows),h=(l-1)*b,R=(t,s)=>{k(t),w(s)},{getSortProps:m}=U(p,i,R);return n.useEffect(()=>{L(g.rows.filter(t=>t.toString().toLowerCase().includes(a.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(S.toLowerCase())).slice(h,h+b))},[h,b,a,S]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(X,{label:"Søk",value:a,placeholder:"Søk",onChange:t=>o(t.target.value)}),e.jsx(Y,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:S,onChange:t=>j(t.target.value)}),e.jsx(Z,{onClick:()=>{o(""),j("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs($,{...d,children:[e.jsx(q,{sticky:!0,children:e.jsx(y,{children:g.columns.slice(0,6).map((t,s)=>e.jsx(H,{bold:!0,...m(t),children:t},s))})}),e.jsx(K,{children:v.length!==0?v.sort((t,s)=>{if(p==="Forfallsdato"){const u=new Date(t[0]).getTime(),c=new Date(s[0]).getTime();return i==="asc"?u-c:c-u}if(p==="Beløp"){const u=Number(t[2]),c=Number(s[2]);return i==="asc"?u-c:c-u}return 0}).map((t,s)=>e.jsxs(F,{clickable:!1,expandedChildren:e.jsxs(ee,{children:[g.columns.map((u,c)=>t.map((M,A)=>c===A&&e.jsxs(n.Fragment,{children:[e.jsx(_,{children:u}),e.jsx(B,{children:M.toLocaleString()})]},A))),e.jsx(_,{children:"Faktura"}),e.jsx(B,{children:e.jsx(E,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"})}),e.jsx(B,{children:e.jsx(E,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"})})]}),children:[e.jsx(x,{children:e.jsx(E,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((u,c)=>e.jsx(x,{"data-th":g.columns[c],children:u.toLocaleString()},c)),e.jsx(D,{children:"Vis detaljer"})]},s)):e.jsx(y,{children:e.jsx(x,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(N,{children:e.jsx(y,{children:e.jsx(x,{colSpan:99,children:e.jsx(Q,{activePage:l,totalNumberOfRows:g.rows.length,rowsPerPage:b,rowsPerPageItems:[6,12,24,{label:"Alle",value:v.length}],onChangeRowsPerPage:t=>{const s=Number.parseInt(t.target.value);T(s),f(1),r.current&&r.current.scrollIntoView({behavior:"smooth"})},onChange:(t,s)=>{f(s),r.current&&r.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const Me=["TableComplex"];export{C as TableComplex,Me as __namedExportsOrder,Ke as default};
