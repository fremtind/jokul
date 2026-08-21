import{r as i,j as e}from"./iframe-DkWzlxd-.js";import{f as S}from"./_index-CurceeMy.js";import{a as z,E as J}from"./ExpandableTableRow-pFzacTFK.js";import{a as $,T as H}from"./TableCaption-ldJX5fQc.js";import{T as M}from"./TableBody-BcJffRoG.js";import{a as D,b as y}from"./TableRow-CaXbOCQJ.js";import{T as O}from"./TableFooter-Cimx1cfv.js";import{a as V,T as K}from"./TableHeader-Bsz70fge.js";import{c as A}from"./clsx-B-dksMZM.js";import{u as Q}from"./useId-Bh0TjDrf.js";import{I as F}from"./IconButton-CJuP0V7q.js";import{C as U}from"./ChevronLeftIcon-B1Ge_p2a.js";import{C as X}from"./ChevronRightIcon-CosvVMPM.js";import{S as G}from"./Select-yOdxAp59.js";import{T as W}from"./TextInput-BSa2ZMRm.js";import{u as Y}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{B as Z}from"./Button-CMyYvT5D.js";import{L}from"./Link-bWEz236F.js";import{b as ee,D as E,a as B}from"./DescriptionList-CUtIeFCT.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-D3SaFcNM.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CqkS_cet.js";import"./usePreviousValue-DJEfkI-V.js";import"./Expander-CMyjDND-.js";import"./ChevronUpIcon-C9DHhBuG.js";import"./Icon-CEH0yyGC.js";import"./tableContext-DlwjkdNw.js";import"./mergeRefs-DlasLgYa.js";import"./Flex-DgR9zN_l.js";import"./SlotComponent-H_cWLzDU.js";import"./InputGroup-CaFfjJS8.js";import"./Label-B0iIqUDx.js";import"./SupportLabel-Ec81dW36.js";import"./SuccessIcon-DfDVkpsR.js";import"./WarningIcon-BBmxHX54.js";import"./Search-BdVYKL7R.js";import"./Text-DH-bTwj1.js";import"./Title-DPAsKNfk.js";import"./useListNavigation-DHfgsgU5.js";import"./ArrowDownIcon-vWdr9GWX.js";import"./CloseIcon-B-YCyNQI.js";import"./BaseTextInput-DN5qYbEK.js";import"./Loader-rp8cfTm2.js";import"./useDelayedRender-Da02rP2Z.js";function te(b,n,a){return n<b?b:n>a?a:n}const q=i.forwardRef((b,n)=>{const{activePage:a=0,totalNumberOfRows:c,rowsPerPage:g,rowsPerPageItems:v,className:w,id:h,withGoToPage:p=!1,onChange:m,onChangeRowsPerPage:f,labels:k={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...x}=b,T=Q(h||"jkl-table-pagination",{generateSuffix:!h}),j=g<=0?1:Math.ceil(c/g),[r,C]=i.useState(te(0,a,j-1)),R=i.useCallback(s=>{const l=Number.parseInt(s.currentTarget.dataset.number);m(s,l,r),C(l),o(String(l+1))},[m,r]),[t,o]=i.useState(String(r+1)),u=i.useCallback(s=>{o(s.target.value);try{const l=Number.parseInt(s.target.value)-1;if(Number.isNaN(l))return;l>=0&&l<j&&(m(s,l,r),C(l))}catch{return}},[m,r,j]),d=i.useCallback(s=>{if(r===0){m(s,r,r);return}const l=r-1;m(s,l,r),C(l),o(String(l+1))},[m,r]),I=i.useCallback(s=>{if(r===j-1){m(s,r,r);return}const l=r+1;m(s,l,r),C(l),o(String(l+1))},[m,j,r]);return e.jsxs("div",{className:A("jkl-table-pagination",w),...x,id:T,ref:n,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[k.rowsPerPage,":"]}),e.jsx(G,{className:"jkl-table-pagination__picker-input",label:k.rowsPerPage,labelProps:{srOnly:!0},name:`${T}-rows-per-page`,items:v.map(s=>typeof s=="number"?String(s):{label:s.label,value:String(s.value)}),value:String(g),onChange:f,width:"min(8rem, 100%)"})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:j!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[p&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof p=="object"?p.gotoLabel:"Gå til side",":"]}),e.jsx(W,{className:"jkl-table-pagination__picker-input",label:typeof p=="object"?p.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${T}-go-to-page`,value:t,width:"min(4rem, 100%)",onChange:u,"aria-invalid":t&&t!==String(r+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(F,{className:"jkl-table-pagination__previous",title:k.previous,onClick:d,children:e.jsx(U,{})})}),e.jsx(ne,{id:T,activePage:a,numberOfPages:j,onPageClick:R}),e.jsx("li",{children:e.jsx(F,{className:"jkl-table-pagination__next",title:k.next,onClick:I,children:e.jsx(X,{})})})]})]})})]})}),ne=({id:b,activePage:n,numberOfPages:a,onPageClick:c})=>{if(a<=7)return e.jsx(e.Fragment,{children:Array.from({length:a}).map((k,x)=>e.jsx("li",{children:e.jsx("button",{className:A("jkl-table-pagination__page",{"jkl-table-pagination__page--active":n===x}),type:"button","data-number":x,onClick:c,children:x+1})},`${b}-page-${x}`))});const g=n>3&&a>7,v=n<a-4&&a>7,w=Math.min(Math.max(n-2,1),a-6),h=Math.min(w+1,a-5),p=Math.min(h+1,a-4),m=Math.min(h+2,a-3),f=Math.min(h+3,a-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(P,{isActive:n===0,number:0,onClick:c})}),e.jsx("li",{children:g?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===w,number:w,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===h,number:h,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===p,number:p,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===m,number:m,onClick:c})}),e.jsx("li",{children:v?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===f,number:f,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===a-1,number:a-1,onClick:c})})]})},P=({isActive:b,number:n,onClick:a,...c})=>e.jsx("button",{className:A("jkl-table-pagination__page",{"jkl-table-pagination__page--active":b}),type:"button","data-number":n,onClick:a,...c,children:n+1});q.displayName="TablePagination";const Ze={title:"Komponenter/Table",component:H,subcomponents:{TableCaption:$,TableHead:K,TableHeader:V,TableBody:M,TableRow:y,TableCell:D}},_={name:"Kompleks Table",args:{fullWidth:!0,caption:e.jsx($,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:b=>{const n=i.useRef(null),[a,c]=i.useState(0),[g,v]=i.useState(6),[w,h]=i.useState(S.columns[0]),[p,m]=i.useState("desc"),[f,k]=i.useState(""),[x,T]=i.useState(""),[N,j]=i.useState(S.rows),r=a*g,C=(t,o)=>{h(t),m(o)},{getSortProps:R}=Y(w,p,C);return i.useEffect(()=>{j(S.rows.filter(t=>t.toString().toLowerCase().includes(f.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(x.toLowerCase())).slice(r,r+g))},[r,g,f,x]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(W,{label:"Søk",value:f,placeholder:"Søk",onChange:t=>k(t.target.value)}),e.jsx(G,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:x,onChange:t=>T(t.target.value)}),e.jsx(Z,{onClick:()=>{k(""),T("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(H,{...b,children:[e.jsx(K,{sticky:!0,children:e.jsx(y,{children:S.columns.slice(0,6).map((t,o)=>e.jsx(V,{bold:!0,...R(t),children:t},o))})}),e.jsx(M,{children:N.length!==0?N.sort((t,o)=>{if(w==="Forfallsdato"){const u=new Date(t[0]).getTime(),d=new Date(o[0]).getTime();return p==="asc"?u-d:d-u}if(w==="Beløp"){const u=Number(t[2]),d=Number(o[2]);return p==="asc"?u-d:d-u}return 0}).map((t,o)=>e.jsxs(z,{clickable:!1,expandedChildren:e.jsxs(ee,{children:[S.columns.map((u,d)=>t.map((I,s)=>d===s&&e.jsxs(i.Fragment,{children:[e.jsx(E,{children:u}),e.jsx(B,{children:I.toLocaleString()})]},s))),e.jsx(E,{children:"Faktura"}),e.jsx(B,{children:e.jsx(L,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"},"1")}),e.jsx(B,{children:e.jsx(L,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"},"2")})]}),children:[e.jsx(D,{children:e.jsx(L,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((u,d)=>e.jsx(D,{"data-th":S.columns[d],children:u.toLocaleString()},d)),e.jsx(J,{children:"Vis detaljer"})]},o)):e.jsx(y,{children:e.jsx(D,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(O,{children:e.jsx(y,{children:e.jsx(D,{colSpan:99,children:e.jsx(q,{activePage:a,totalNumberOfRows:S.rows.length,rowsPerPage:g,rowsPerPageItems:[6,12,24,{label:"Alle",value:S.rows.length}],onChangeRowsPerPage:t=>{const o=Number.parseInt(t.target.value);v(o),c(0),n.current&&n.current.scrollIntoView({behavior:"smooth"})},onChange:(t,o)=>{c(o),n.current&&n.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
                  value: faktura.rows.length
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
}`,..._.parameters?.docs?.source}}};const et=["TableComplex"];export{_ as TableComplex,et as __namedExportsOrder,Ze as default};
