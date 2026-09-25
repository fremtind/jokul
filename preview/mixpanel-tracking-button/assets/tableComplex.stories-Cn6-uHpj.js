import{r as i,j as e}from"./iframe-BHVNXWC0.js";import{a as W,E as z}from"./ExpandableTableRow-B5ANJwrU.js";import{a as $,T as H}from"./TableCaption-BYSo3Hez.js";import{T as q}from"./TableBody-C2kw-JVk.js";import{a as y,b as N}from"./TableRow-DY02cpVM.js";import{T as J}from"./TableFooter--ebxK-rh.js";import{a as M,T as G}from"./TableHeader-D0awxjth.js";import{c as F}from"./clsx-B-dksMZM.js";import{u as Q}from"./useId-DujS4V_U.js";import{I as A}from"./IconButton-BiQevkUV.js";import{C as U}from"./ChevronLeftIcon-B6E_kUaq.js";import{C as X}from"./ChevronRightIcon-DP3QHdxW.js";import{S as K}from"./Select-ChBGRzms.js";import{T as O}from"./TextInput-D95qgRYK.js";import{u as Y}from"./utils-DYxs2h-a.js";import{f as T}from"./_index-C1e446Mu.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{B as Z}from"./Button-2tryLUfP.js";import{L as E}from"./Link-D-o2NDPM.js";import{b as ee,D as V,a as B}from"./DescriptionList-DO3y1n23.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-Biup8SpJ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bn2CwFzn.js";import"./usePreviousValue-BLTvEOjc.js";import"./Expander-iVqtif7Y.js";import"./ChevronUpIcon-C75wmLcW.js";import"./Icon-0x92Wr0j.js";import"./tableContext-CLBX_-XA.js";import"./mergeRefs-DIkTecFL.js";import"./Flex-Br9BJssv.js";import"./SlotComponent-BlluqKlN.js";import"./InputGroup-NhxnJVsF.js";import"./Label-vSIibSXe.js";import"./SupportLabel-CfGZ_fAk.js";import"./SuccessIcon-CwLKuoaw.js";import"./WarningIcon-DETL_8Sq.js";import"./Search-CewsLP4Q.js";import"./Text-BGHLJqzp.js";import"./Title-GUZ6sCve.js";import"./useListNavigation-CQsYM-1A.js";import"./ArrowDownIcon-CRNPOCu3.js";import"./CloseIcon-22glZlsN.js";import"./BaseTextInput-Bwc2JTXV.js";import"./Loader-BTFuo0eh.js";import"./useDelayedRender-BzC1ccEE.js";function te(d,n,a){return n<d?d:n>a?a:n}const R=i.forwardRef((d,n)=>{const{activePage:a=0,totalNumberOfRows:c,rowsPerPage:h,rowsPerPageItems:C,className:x,id:f,withGoToPage:m=!1,onChange:u,onChangeRowsPerPage:j,labels:k={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...g}=d,P=Q(f||"jkl-table-pagination",{generateSuffix:!f}),w=h<=0?1:Math.ceil(c/h),[r,S]=i.useState(te(0,a,w-1)),I=i.useCallback(s=>{const o=Number.parseInt(s.currentTarget.dataset.number);u(s,o,r),S(o),l(String(o+1))},[u,r]),[t,l]=i.useState(String(r+1)),b=i.useCallback(s=>{l(s.target.value);try{const o=Number.parseInt(s.target.value)-1;if(Number.isNaN(o))return;o>=0&&o<w&&(u(s,o,r),S(o))}catch{return}},[u,r,w]),p=i.useCallback(s=>{if(r===0){u(s,r,r);return}const o=r-1;u(s,o,r),S(o),l(String(o+1))},[u,r]),L=i.useCallback(s=>{if(r===w-1){u(s,r,r);return}const o=r+1;u(s,o,r),S(o),l(String(o+1))},[u,w,r]);return e.jsxs("div",{className:F("jkl-table-pagination",x),...g,id:P,ref:n,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[k.rowsPerPage,":"]}),e.jsx(K,{className:"jkl-table-pagination__picker-input",label:k.rowsPerPage,labelProps:{srOnly:!0},name:`${P}-rows-per-page`,items:C.map(s=>typeof s=="number"?String(s):{label:s.label,value:String(s.value)}),value:String(h),onChange:j,width:"min(8rem, 100%)"})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:w!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[m&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof m=="object"?m.gotoLabel:"Gå til side",":"]}),e.jsx(O,{className:"jkl-table-pagination__picker-input",label:typeof m=="object"?m.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${P}-go-to-page`,value:t,width:"min(4rem, 100%)",onChange:b,"aria-invalid":t&&t!==String(r+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(A,{className:"jkl-table-pagination__previous",title:k.previous,"data-jkl-tracked":"TablePagination","data-jkl-variant":"previous",onClick:p,children:e.jsx(U,{})})}),e.jsx(ne,{id:P,activePage:a,numberOfPages:w,onPageClick:I}),e.jsx("li",{children:e.jsx(A,{className:"jkl-table-pagination__next",title:k.next,"data-jkl-tracked":"TablePagination","data-jkl-variant":"next",onClick:L,children:e.jsx(X,{})})})]})]})})]})}),ne=({id:d,activePage:n,numberOfPages:a,onPageClick:c})=>{if(a<=7)return e.jsx(e.Fragment,{children:Array.from({length:a}).map((k,g)=>e.jsx("li",{children:e.jsx("button",{className:F("jkl-table-pagination__page",{"jkl-table-pagination__page--active":n===g}),type:"button","data-jkl-tracked":"TablePagination","data-jkl-variant":"page","data-jkl-selected":n===g||void 0,"data-number":g,onClick:c,children:g+1})},`${d}-page-${g}`))});const h=n>3&&a>7,C=n<a-4&&a>7,x=Math.min(Math.max(n-2,1),a-6),f=Math.min(x+1,a-5),m=Math.min(f+1,a-4),u=Math.min(f+2,a-3),j=Math.min(f+3,a-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(v,{isActive:n===0,number:0,onClick:c})}),e.jsx("li",{children:h?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(v,{isActive:n===x,number:x,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===f,number:f,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===m,number:m,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===u,number:u,onClick:c})}),e.jsx("li",{children:C?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(v,{isActive:n===j,number:j,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===a-1,number:a-1,onClick:c})})]})},v=({isActive:d,number:n,onClick:a,...c})=>e.jsx("button",{className:F("jkl-table-pagination__page",{"jkl-table-pagination__page--active":d}),type:"button","data-jkl-tracked":"TablePagination","data-jkl-variant":"page","data-jkl-selected":d||void 0,"data-number":n,onClick:a,...c,children:n+1});R.displayName="TablePagination";try{R.displayName="TablePagination",R.__docgenInfo={description:"",displayName:"TablePagination",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},activePage:{defaultValue:{value:"0"},description:"",name:"activePage",required:!1,type:{name:"number"}},rowsPerPage:{defaultValue:null,description:'Null eller negativt tall tolkes som "vis alle".',name:"rowsPerPage",required:!0,type:{name:"number"}},rowsPerPageItems:{defaultValue:null,description:"",name:"rowsPerPageItems",required:!0,type:{name:"(number | { label: string; value: number; })[]"}},totalNumberOfRows:{defaultValue:null,description:"",name:"totalNumberOfRows",required:!0,type:{name:"number"}},withGoToPage:{defaultValue:{value:"false"},description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
Du kan også sende inn en custom label hvis du ønsker det, ellers bruke
true for default label`,name:"withGoToPage",required:!1,type:{name:"boolean | { gotoLabel: string; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: SyntheticEvent<Element, Event>, toPage: number, fromPage: number) => void"}},onChangeRowsPerPage:{defaultValue:null,description:"",name:"onChangeRowsPerPage",required:!0,type:{name:"ChangeEventHandler<HTMLSelectElement>"}},labels:{defaultValue:{value:'{ rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }'},description:`Dersom du ønsker å ha custom labels kan du sende inn disse. "rowsPerPage"
vises alltid på skjerm mens "next" og "previous" brukes som hint til
skjermlesere for ikon-knappene til Neste/Forrige side`,name:"labels",required:!1,type:{name:"{ rowsPerPage: string; previous: string; next: string; }"}}}}}catch{}const Ze={title:"Komponenter/Table",component:H,subcomponents:{TableCaption:$,TableHead:G,TableHeader:M,TableBody:q,TableRow:N,TableCell:y}},D={name:"Kompleks Table",args:{fullWidth:!0,caption:e.jsx($,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:d=>{const n=i.useRef(null),[a,c]=i.useState(0),[h,C]=i.useState(6),[x,f]=i.useState(T.columns[0]),[m,u]=i.useState("desc"),[j,k]=i.useState(""),[g,P]=i.useState(""),[_,w]=i.useState(T.rows),r=a*h,S=(t,l)=>{f(t),u(l)},{getSortProps:I}=Y(x,m,S);return i.useEffect(()=>{w(T.rows.filter(t=>t.toString().toLowerCase().includes(j.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(g.toLowerCase())).slice(r,r+h))},[r,h,j,g]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(O,{label:"Søk",value:j,placeholder:"Søk",onChange:t=>k(t.target.value)}),e.jsx(K,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:g,onChange:t=>P(t.target.value)}),e.jsx(Z,{onClick:()=>{k(""),P("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(H,{...d,children:[e.jsx(G,{sticky:!0,children:e.jsx(N,{children:T.columns.slice(0,6).map((t,l)=>e.jsx(M,{bold:!0,...I(t),children:t},l))})}),e.jsx(q,{children:_.length!==0?_.sort((t,l)=>{if(x==="Forfallsdato"){const b=new Date(t[0]).getTime(),p=new Date(l[0]).getTime();return m==="asc"?b-p:p-b}if(x==="Beløp"){const b=Number(t[2]),p=Number(l[2]);return m==="asc"?b-p:p-b}return 0}).map((t,l)=>e.jsxs(W,{clickable:!1,expandedChildren:e.jsxs(ee,{children:[T.columns.map((b,p)=>t.map((L,s)=>p===s&&e.jsxs(i.Fragment,{children:[e.jsx(V,{children:b}),e.jsx(B,{children:L.toLocaleString()})]},s))),e.jsx(V,{children:"Faktura"}),e.jsx(B,{children:e.jsx(E,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"},"1")}),e.jsx(B,{children:e.jsx(E,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"},"2")})]}),children:[e.jsx(y,{children:e.jsx(E,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((b,p)=>e.jsx(y,{"data-th":T.columns[p],children:b.toLocaleString()},p)),e.jsx(z,{children:"Vis detaljer"})]},l)):e.jsx(N,{children:e.jsx(y,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(J,{children:e.jsx(N,{children:e.jsx(y,{colSpan:99,children:e.jsx(R,{activePage:a,totalNumberOfRows:T.rows.length,rowsPerPage:h,rowsPerPageItems:[6,12,24,{label:"Alle",value:_.length}],onChangeRowsPerPage:t=>{const l=Number.parseInt(t.target.value);C(l),c(0),n.current&&n.current.scrollIntoView({behavior:"smooth"})},onChange:(t,l)=>{c(l),n.current&&n.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Kompleks Table",
  args: {
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
                                                        <Link key="1" external target={"_blank"} href={"#"}>
                                                            Åpne i ny fane
                                                        </Link>
                                                    </DescriptionDetail>
                                                    <DescriptionDetail>
                                                        <Link key="2" download={\`\${row[3]} \${new Date(row[0] as Date).toLocaleDateString()}\`} href={"#"}>
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
}`,...D.parameters?.docs?.source}}};const et=["TableComplex"];export{D as TableComplex,et as __namedExportsOrder,Ze as default};
