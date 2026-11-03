import{r as i,j as e}from"./iframe-CWlPmRQd.js";import{a as W,E as z}from"./ExpandableTableRow-Bvj9j6DF.js";import{a as $,T as H}from"./TableCaption-BugXhY8I.js";import{T as q}from"./TableBody-BP5N2EfV.js";import{a as N,b as D}from"./TableRow-BtggZI6r.js";import{T as J}from"./TableFooter-owfqIuST.js";import{a as M,T as G}from"./TableHeader-3cGCt_27.js";import{c as E}from"./clsx-B-dksMZM.js";import{u as Q}from"./useId-DSPJ-YNN.js";import{I as A}from"./IconButton-CMdjsGfr.js";import{C as U}from"./ChevronLeftIcon-BWr3FoWj.js";import{C as X}from"./ChevronRightIcon-BRiuP6a6.js";import{S as K}from"./Select-BS2kcUFN.js";import{T as O}from"./TextInput-Bwet-SDD.js";import{u as Y}from"./utils-DYxs2h-a.js";import{f as T}from"./_index-CurceeMy.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{B as Z}from"./Button-DpTAg0g5.js";import{L as B}from"./Link-CtPcycI6.js";import{b as ee,D as V,a as F}from"./DescriptionList-BVoEyWVC.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-TxBVSa_l.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ncYc-8dv.js";import"./usePreviousValue-DFVdlWTf.js";import"./Expander-C95DUOZ0.js";import"./ChevronUpIcon-CIx4bVh2.js";import"./Icon-DpRevtWk.js";import"./tableContext-CQZQ1Jx-.js";import"./mergeRefs-_7lZvp9j.js";import"./Flex-CxllDsZx.js";import"./SlotComponent-CaS-ygJV.js";import"./InputGroup-D1RWkktC.js";import"./Label-DkCKs5Qb.js";import"./SupportLabel-BIwnbXoY.js";import"./SuccessIcon-7w4MqBwJ.js";import"./WarningIcon-AigLNVqk.js";import"./Search-CLLmtflm.js";import"./Text-umXM-5NA.js";import"./Title-DZwFdZmX.js";import"./useListNavigation-CIYNxIhR.js";import"./ArrowDownIcon-DrA3Sd34.js";import"./CloseIcon-BnxxJvyU.js";import"./BaseTextInput-DREt2aeB.js";import"./Loader-CvVxqobi.js";import"./useDelayedRender-Du0GYYGY.js";function ae(d,t,n){return t<d?d:t>n?n:t}const R=i.forwardRef((d,t)=>{const{activePage:n=0,totalNumberOfRows:c,rowsPerPage:b,rowsPerPageItems:v,className:f,id:k,withGoToPage:m=!1,onChange:p,onChangeRowsPerPage:P,labels:x={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...h}=d,w=Q(k||"jkl-table-pagination",{generateSuffix:!k}),j=b<=0?1:Math.ceil(c/b),[s,y]=i.useState(ae(0,n,j-1)),I=i.useCallback(r=>{const o=Number.parseInt(r.currentTarget.dataset.number);p(r,o,s),y(o),l(String(o+1))},[p,s]),[a,l]=i.useState(String(s+1)),g=i.useCallback(r=>{l(r.target.value);try{const o=Number.parseInt(r.target.value)-1;if(Number.isNaN(o))return;o>=0&&o<j&&(p(r,o,s),y(o))}catch{return}},[p,s,j]),u=i.useCallback(r=>{if(s===0){p(r,s,s);return}const o=s-1;p(r,o,s),y(o),l(String(o+1))},[p,s]),L=i.useCallback(r=>{if(s===j-1){p(r,s,s);return}const o=s+1;p(r,o,s),y(o),l(String(o+1))},[p,j,s]);return e.jsxs("div",{className:E("jkl-table-pagination",f),...h,id:w,ref:t,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[x.rowsPerPage,":"]}),e.jsx(K,{className:"jkl-table-pagination__picker-input",label:x.rowsPerPage,labelProps:{srOnly:!0},name:`${w}-rows-per-page`,items:v.map(r=>typeof r=="number"?String(r):{label:r.label,value:String(r.value)}),value:String(b),onChange:P,width:"min(8rem, 100%)"})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:j!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[m&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof m=="object"?m.gotoLabel:"Gå til side",":"]}),e.jsx(O,{className:"jkl-table-pagination__picker-input",label:typeof m=="object"?m.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${w}-go-to-page`,value:a,width:"min(4rem, 100%)",onChange:g,"aria-invalid":a&&a!==String(s+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(A,{className:"jkl-table-pagination__previous",title:x.previous,onClick:u,children:e.jsx(U,{})})}),e.jsx(te,{id:w,activePage:n,numberOfPages:j,onPageClick:I}),e.jsx("li",{children:e.jsx(A,{className:"jkl-table-pagination__next",title:x.next,onClick:L,children:e.jsx(X,{})})})]})]})})]})}),te=({id:d,activePage:t,numberOfPages:n,onPageClick:c})=>{if(n<=7)return e.jsx(e.Fragment,{children:Array.from({length:n}).map((x,h)=>e.jsx("li",{children:e.jsx("button",{className:E("jkl-table-pagination__page",{"jkl-table-pagination__page--active":t===h}),type:"button","data-number":h,onClick:c,children:h+1})},`${d}-page-${h}`))});const b=t>3&&n>7,v=t<n-4&&n>7,f=Math.min(Math.max(t-2,1),n-6),k=Math.min(f+1,n-5),m=Math.min(k+1,n-4),p=Math.min(k+2,n-3),P=Math.min(k+3,n-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(S,{isActive:t===0,number:0,onClick:c})}),e.jsx("li",{children:b?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(S,{isActive:t===f,number:f,onClick:c})}),e.jsx("li",{children:e.jsx(S,{isActive:t===k,number:k,onClick:c})}),e.jsx("li",{children:e.jsx(S,{isActive:t===m,number:m,onClick:c})}),e.jsx("li",{children:e.jsx(S,{isActive:t===p,number:p,onClick:c})}),e.jsx("li",{children:v?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(S,{isActive:t===P,number:P,onClick:c})}),e.jsx("li",{children:e.jsx(S,{isActive:t===n-1,number:n-1,onClick:c})})]})},S=({isActive:d,number:t,onClick:n,...c})=>e.jsx("button",{className:E("jkl-table-pagination__page",{"jkl-table-pagination__page--active":d}),type:"button","data-number":t,onClick:n,...c,children:t+1});R.displayName="TablePagination";try{R.displayName="TablePagination",R.__docgenInfo={description:"",displayName:"TablePagination",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/table/TablePagination.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!1,tags:{},type:{name:"string"}},activePage:{defaultValue:{value:"0"},declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:"",name:"activePage",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!1,tags:{default:"0"},type:{name:"number"}},rowsPerPage:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:'Null eller negativt tall tolkes som "vis alle".',name:"rowsPerPage",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!0,tags:{},type:{name:"number"}},rowsPerPageItems:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:"",name:"rowsPerPageItems",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!0,tags:{},type:{name:"(number | { label: string; value: number; })[]"}},totalNumberOfRows:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:"",name:"totalNumberOfRows",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!0,tags:{},type:{name:"number"}},withGoToPage:{defaultValue:{value:"false"},declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
Du kan også sende inn en custom label hvis du ønsker det, ellers bruke
true for default label`,name:"withGoToPage",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!1,tags:{default:"false"},type:{name:"boolean | { gotoLabel: string; }"}},onChange:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:"",name:"onChange",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!0,tags:{},type:{name:"(e: SyntheticEvent<Element, Event>, toPage: number, fromPage: number) => void"}},onChangeRowsPerPage:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:"",name:"onChangeRowsPerPage",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!0,tags:{},type:{name:"ChangeEventHandler<HTMLSelectElement>"}},labels:{defaultValue:{value:'{ rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }'},declarations:[{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"}],description:`Dersom du ønsker å ha custom labels kan du sende inn disse. "rowsPerPage"
vises alltid på skjerm mens "next" og "previous" brukes som hint til
skjermlesere for ikon-knappene til Neste/Forrige side`,name:"labels",parent:{fileName:"jokul/packages/jokul/src/components/table/types.ts",name:"TablePaginationProps"},required:!1,tags:{default:'{ rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }'},type:{name:"{ rowsPerPage: string; previous: string; next: string; }"}}},tags:{}}}catch{}const Ze={title:"Komponenter/Table",component:H,subcomponents:{TableCaption:$,TableHead:G,TableHeader:M,TableBody:q,TableRow:D,TableCell:N}},_={name:"Kompleks Table",args:{fullWidth:!0,caption:e.jsx($,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:d=>{const t=i.useRef(null),[n,c]=i.useState(0),[b,v]=i.useState(6),[f,k]=i.useState(T.columns[0]),[m,p]=i.useState("desc"),[P,x]=i.useState(""),[h,w]=i.useState(""),[C,j]=i.useState(T.rows),s=n*b,y=(a,l)=>{k(a),p(l)},{getSortProps:I}=Y(f,m,y);return i.useEffect(()=>{j(T.rows.filter(a=>a.toString().toLowerCase().includes(P.toLowerCase())).filter(a=>a[3].toString().toLowerCase().includes(h.toLowerCase())).slice(s,s+b))},[s,b,P,h]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(O,{label:"Søk",value:P,placeholder:"Søk",onChange:a=>x(a.target.value)}),e.jsx(K,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:h,onChange:a=>w(a.target.value)}),e.jsx(Z,{onClick:()=>{x(""),w("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(H,{...d,children:[e.jsx(G,{sticky:!0,children:e.jsx(D,{children:T.columns.slice(0,6).map((a,l)=>e.jsx(M,{bold:!0,...I(a),children:a},l))})}),e.jsx(q,{children:C.length!==0?C.sort((a,l)=>{if(f==="Forfallsdato"){const g=new Date(a[0]).getTime(),u=new Date(l[0]).getTime();return m==="asc"?g-u:u-g}if(f==="Beløp"){const g=Number(a[2]),u=Number(l[2]);return m==="asc"?g-u:u-g}return 0}).map((a,l)=>e.jsxs(W,{clickable:!1,expandedChildren:e.jsxs(ee,{children:[T.columns.map((g,u)=>a.map((L,r)=>u===r&&e.jsxs(i.Fragment,{children:[e.jsx(V,{children:g}),e.jsx(F,{children:L.toLocaleString()})]},r))),e.jsx(V,{children:"Faktura"}),e.jsx(F,{children:e.jsx(B,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"},"1")}),e.jsx(F,{children:e.jsx(B,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:"Last ned"},"2")})]}),children:[e.jsx(N,{children:e.jsx(B,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:new Date(a[0]).toLocaleDateString()})}),a.slice(1,6).map((g,u)=>e.jsx(N,{"data-th":T.columns[u],children:g.toLocaleString()},u)),e.jsx(z,{children:"Vis detaljer"})]},l)):e.jsx(D,{children:e.jsx(N,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(J,{children:e.jsx(D,{children:e.jsx(N,{colSpan:99,children:e.jsx(R,{activePage:n,totalNumberOfRows:T.rows.length,rowsPerPage:b,rowsPerPageItems:[6,12,24,{label:"Alle",value:C.length}],onChangeRowsPerPage:a=>{const l=Number.parseInt(a.target.value);v(l),c(0),t.current&&t.current.scrollIntoView({behavior:"smooth"})},onChange:(a,l)=>{c(l),t.current&&t.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}},ea=["TableComplex"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};export{_ as TableComplex,ea as __namedExportsOrder,Ze as default};
