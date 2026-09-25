import{r as i,j as e}from"./iframe-h1E6QDzg.js";import{a as W,E as z}from"./ExpandableTableRow-DGFoc0Ug.js";import{a as $,T as H}from"./TableCaption-iK8mPVNF.js";import{T as q}from"./TableBody-BA0nA9Gr.js";import{a as y,b as N}from"./TableRow-CqgdPok-.js";import{T as J}from"./TableFooter-DfkDXxcV.js";import{a as M,T as G}from"./TableHeader-DuKxlhsR.js";import{c as F}from"./clsx-B-dksMZM.js";import{u as Q}from"./useId-Djj_4nYv.js";import{I as A}from"./IconButton-Dgl46D0J.js";import{C as U}from"./ChevronLeftIcon-DXrK4CaO.js";import{C as X}from"./ChevronRightIcon-DUkszTUO.js";import{S as K}from"./Select-CsuyZ68-.js";import{T as O}from"./TextInput-TNmZ_uq9.js";import{u as Y}from"./utils-DYxs2h-a.js";import{f as S}from"./_index-CurceeMy.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{B as Z}from"./Button-Be-00q6_.js";import{L as E}from"./Link-Cw7Q06VM.js";import{b as ee,D as V,a as B}from"./DescriptionList-BSLwWTrN.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-FOAb7W2o.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DtY47GzM.js";import"./usePreviousValue-Yt1h1DXN.js";import"./Expander-B6dp3UJ3.js";import"./ChevronUpIcon-Cw2Sn4uv.js";import"./Icon-vHGO0lh0.js";import"./tableContext-BYgCTZvL.js";import"./mergeRefs-Dv2ShNeu.js";import"./Flex-CT-gjCAG.js";import"./SlotComponent-DeutYDHI.js";import"./InputGroup-DCOk3Rce.js";import"./Label-DIDSL5kV.js";import"./SupportLabel-BQdWUnRD.js";import"./SuccessIcon-WvXFD5pJ.js";import"./WarningIcon-2jnemetF.js";import"./Search-DKEtkksZ.js";import"./Text-v7hNAv2t.js";import"./Title-Cb1WvX4Y.js";import"./useListNavigation-BxtWLYls.js";import"./ArrowDownIcon-BwZBNtKo.js";import"./CloseIcon-B0qkluLt.js";import"./BaseTextInput-4Bep5qnG.js";import"./Loader-DQtdxkub.js";import"./useDelayedRender-WETI09R2.js";function te(p,n,a){return n<p?p:n>a?a:n}const R=i.forwardRef((p,n)=>{const{activePage:a=0,totalNumberOfRows:c,rowsPerPage:b,rowsPerPageItems:C,className:x,id:h,withGoToPage:m=!1,onChange:u,onChangeRowsPerPage:j,labels:k={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...f}=p,P=Q(h||"jkl-table-pagination",{generateSuffix:!h}),w=b<=0?1:Math.ceil(c/b),[r,v]=i.useState(te(0,a,w-1)),I=i.useCallback(s=>{const o=Number.parseInt(s.currentTarget.dataset.number);u(s,o,r),v(o),l(String(o+1))},[u,r]),[t,l]=i.useState(String(r+1)),g=i.useCallback(s=>{l(s.target.value);try{const o=Number.parseInt(s.target.value)-1;if(Number.isNaN(o))return;o>=0&&o<w&&(u(s,o,r),v(o))}catch{return}},[u,r,w]),d=i.useCallback(s=>{if(r===0){u(s,r,r);return}const o=r-1;u(s,o,r),v(o),l(String(o+1))},[u,r]),L=i.useCallback(s=>{if(r===w-1){u(s,r,r);return}const o=r+1;u(s,o,r),v(o),l(String(o+1))},[u,w,r]);return e.jsxs("div",{className:F("jkl-table-pagination",x),...f,id:P,ref:n,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[k.rowsPerPage,":"]}),e.jsx(K,{className:"jkl-table-pagination__picker-input",label:k.rowsPerPage,labelProps:{srOnly:!0},name:`${P}-rows-per-page`,items:C.map(s=>typeof s=="number"?String(s):{label:s.label,value:String(s.value)}),value:String(b),onChange:j,width:"min(8rem, 100%)"})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:w!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[m&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof m=="object"?m.gotoLabel:"Gå til side",":"]}),e.jsx(O,{className:"jkl-table-pagination__picker-input",label:typeof m=="object"?m.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${P}-go-to-page`,value:t,width:"min(4rem, 100%)",onChange:g,"aria-invalid":t&&t!==String(r+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(A,{className:"jkl-table-pagination__previous",title:k.previous,onClick:d,children:e.jsx(U,{})})}),e.jsx(ne,{id:P,activePage:a,numberOfPages:w,onPageClick:I}),e.jsx("li",{children:e.jsx(A,{className:"jkl-table-pagination__next",title:k.next,onClick:L,children:e.jsx(X,{})})})]})]})})]})}),ne=({id:p,activePage:n,numberOfPages:a,onPageClick:c})=>{if(a<=7)return e.jsx(e.Fragment,{children:Array.from({length:a}).map((k,f)=>e.jsx("li",{children:e.jsx("button",{className:F("jkl-table-pagination__page",{"jkl-table-pagination__page--active":n===f}),type:"button","data-number":f,onClick:c,children:f+1})},`${p}-page-${f}`))});const b=n>3&&a>7,C=n<a-4&&a>7,x=Math.min(Math.max(n-2,1),a-6),h=Math.min(x+1,a-5),m=Math.min(h+1,a-4),u=Math.min(h+2,a-3),j=Math.min(h+3,a-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(T,{isActive:n===0,number:0,onClick:c})}),e.jsx("li",{children:b?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(T,{isActive:n===x,number:x,onClick:c})}),e.jsx("li",{children:e.jsx(T,{isActive:n===h,number:h,onClick:c})}),e.jsx("li",{children:e.jsx(T,{isActive:n===m,number:m,onClick:c})}),e.jsx("li",{children:e.jsx(T,{isActive:n===u,number:u,onClick:c})}),e.jsx("li",{children:C?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(T,{isActive:n===j,number:j,onClick:c})}),e.jsx("li",{children:e.jsx(T,{isActive:n===a-1,number:a-1,onClick:c})})]})},T=({isActive:p,number:n,onClick:a,...c})=>e.jsx("button",{className:F("jkl-table-pagination__page",{"jkl-table-pagination__page--active":p}),type:"button","data-number":n,onClick:a,...c,children:n+1});R.displayName="TablePagination";try{R.displayName="TablePagination",R.__docgenInfo={description:"",displayName:"TablePagination",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},activePage:{defaultValue:{value:"0"},description:"",name:"activePage",required:!1,type:{name:"number"}},rowsPerPage:{defaultValue:null,description:'Null eller negativt tall tolkes som "vis alle".',name:"rowsPerPage",required:!0,type:{name:"number"}},rowsPerPageItems:{defaultValue:null,description:"",name:"rowsPerPageItems",required:!0,type:{name:"(number | { label: string; value: number; })[]"}},totalNumberOfRows:{defaultValue:null,description:"",name:"totalNumberOfRows",required:!0,type:{name:"number"}},withGoToPage:{defaultValue:{value:"false"},description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
Du kan også sende inn en custom label hvis du ønsker det, ellers bruke
true for default label`,name:"withGoToPage",required:!1,type:{name:"boolean | { gotoLabel: string; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: SyntheticEvent<Element, Event>, toPage: number, fromPage: number) => void"}},onChangeRowsPerPage:{defaultValue:null,description:"",name:"onChangeRowsPerPage",required:!0,type:{name:"ChangeEventHandler<HTMLSelectElement>"}},labels:{defaultValue:{value:'{ rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }'},description:`Dersom du ønsker å ha custom labels kan du sende inn disse. "rowsPerPage"
vises alltid på skjerm mens "next" og "previous" brukes som hint til
skjermlesere for ikon-knappene til Neste/Forrige side`,name:"labels",required:!1,type:{name:"{ rowsPerPage: string; previous: string; next: string; }"}}}}}catch{}const Ze={title:"Komponenter/Table",component:H,subcomponents:{TableCaption:$,TableHead:G,TableHeader:M,TableBody:q,TableRow:N,TableCell:y}},D={name:"Kompleks Table",args:{fullWidth:!0,caption:e.jsx($,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:p=>{const n=i.useRef(null),[a,c]=i.useState(0),[b,C]=i.useState(6),[x,h]=i.useState(S.columns[0]),[m,u]=i.useState("desc"),[j,k]=i.useState(""),[f,P]=i.useState(""),[_,w]=i.useState(S.rows),r=a*b,v=(t,l)=>{h(t),u(l)},{getSortProps:I}=Y(x,m,v);return i.useEffect(()=>{w(S.rows.filter(t=>t.toString().toLowerCase().includes(j.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(f.toLowerCase())).slice(r,r+b))},[r,b,j,f]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(O,{label:"Søk",value:j,placeholder:"Søk",onChange:t=>k(t.target.value)}),e.jsx(K,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:f,onChange:t=>P(t.target.value)}),e.jsx(Z,{onClick:()=>{k(""),P("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(H,{...p,children:[e.jsx(G,{sticky:!0,children:e.jsx(N,{children:S.columns.slice(0,6).map((t,l)=>e.jsx(M,{bold:!0,...I(t),children:t},l))})}),e.jsx(q,{children:_.length!==0?_.sort((t,l)=>{if(x==="Forfallsdato"){const g=new Date(t[0]).getTime(),d=new Date(l[0]).getTime();return m==="asc"?g-d:d-g}if(x==="Beløp"){const g=Number(t[2]),d=Number(l[2]);return m==="asc"?g-d:d-g}return 0}).map((t,l)=>e.jsxs(W,{clickable:!1,expandedChildren:e.jsxs(ee,{children:[S.columns.map((g,d)=>t.map((L,s)=>d===s&&e.jsxs(i.Fragment,{children:[e.jsx(V,{children:g}),e.jsx(B,{children:L.toLocaleString()})]},s))),e.jsx(V,{children:"Faktura"}),e.jsx(B,{children:e.jsx(E,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"},"1")}),e.jsx(B,{children:e.jsx(E,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"},"2")})]}),children:[e.jsx(y,{children:e.jsx(E,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((g,d)=>e.jsx(y,{"data-th":S.columns[d],children:g.toLocaleString()},d)),e.jsx(z,{children:"Vis detaljer"})]},l)):e.jsx(N,{children:e.jsx(y,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(J,{children:e.jsx(N,{children:e.jsx(y,{colSpan:99,children:e.jsx(R,{activePage:a,totalNumberOfRows:S.rows.length,rowsPerPage:b,rowsPerPageItems:[6,12,24,{label:"Alle",value:_.length}],onChangeRowsPerPage:t=>{const l=Number.parseInt(t.target.value);C(l),c(0),n.current&&n.current.scrollIntoView({behavior:"smooth"})},onChange:(t,l)=>{c(l),n.current&&n.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
