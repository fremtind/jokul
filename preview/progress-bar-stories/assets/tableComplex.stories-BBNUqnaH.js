import{r as s,j as e}from"./iframe-DVEDpXBm.js";import{b as J,u as Q,a as y,T as R,f as T}from"./_index-EB7zHXyL.js";import{a as U,E as X}from"./ExpandableTableRow-CSILOtUI.js";import{b as M,a as V,c as K,T as G}from"./TableHeader-D5gaxVzd.js";import{T as W}from"./TableBody-DupvpxzR.js";import{c as L}from"./clsx-B-dksMZM.js";import{u as Y}from"./useId-BmLwIRUs.js";import{I as H}from"./IconButton-CFuNDxY4.js";import{C as Z}from"./ChevronLeftIcon-CEj52Pcl.js";import{C as ee}from"./ChevronRightIcon-CTURkDXT.js";import{N as te}from"./NativeSelect-DLWvnVyu.js";import{T as O}from"./TextInput-CjDLF-52.js";import{u as ne}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{S as ae}from"./Select-BYgXdkgu.js";import{B as re}from"./Button-DVziKj0u.js";import{L as A}from"./Link-D4MDUW-J.js";import{b as se,D as $,a as E}from"./DescriptionList-BMdvpdVK.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-BaasTv2L.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-B_Crx14B.js";import"./usePreviousValue-CtCGoWAN.js";import"./Expander-0TJ9semF.js";import"./ChevronDownIcon-DMkM6-Zk.js";import"./Icon-C-HwJC3C.js";import"./ChevronUpIcon-10gPUmCC.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BHsKHkRv.js";import"./ArrowDownIcon-Bo-McXzQ.js";import"./InputGroup-BR1jT3pt.js";import"./Label-BhdGESsQ.js";import"./SupportLabel-DrnxFu4e.js";import"./WarningIcon-CfBq8oWj.js";import"./BaseTextInput-hMC9-9Ym.js";import"./useListNavigation-CVcPNz9B.js";import"./Loader-WmaXVPF6.js";import"./useDelayedRender-DkM1BD2d.js";const F=s.forwardRef(({className:g,...n},a)=>e.jsx(J,{state:{isTableHead:!1,isTableBody:!1,isTableFooter:!0},children:e.jsx("tfoot",{className:L("jkl-table-foot",g),...n,ref:a})}));F.displayName="TableFooter";F.__docgenInfo={description:"",methods:[],displayName:"TableFooter",composes:["HTMLAttributes"]};function ie(g,n,a){return n<g?g:n>a?a:n}const q=s.forwardRef((g,n)=>{const{activePage:a=0,totalNumberOfRows:c,rowsPerPage:b,rowsPerPageItems:P,className:f,density:x,id:w,withGoToPage:h=!1,onChange:i,onChangeRowsPerPage:S,labels:d={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...C}=g,k=Y(w||"jkl-table-pagination",{generateSuffix:!w}),{density:I}=Q(),j=b<=0?1:Math.ceil(c/b),[r,t]=s.useState(ie(0,a,j-1)),m=s.useCallback(l=>{const o=Number.parseInt(l.currentTarget.dataset.number);i(l,o,r),t(o),u(String(o+1))},[i,r]),[p,u]=s.useState(String(r+1)),B=s.useCallback(l=>{u(l.target.value);try{const o=Number.parseInt(l.target.value)-1;if(Number.isNaN(o))return;o>=0&&o<j&&(i(l,o,r),t(o))}catch{return}},[i,r,j]),_=s.useCallback(l=>{if(r===0){i(l,r,r);return}const o=r-1;i(l,o,r),t(o),u(String(o+1))},[i,r]),z=s.useCallback(l=>{if(r===j-1){i(l,r,r);return}const o=r+1;i(l,o,r),t(o),u(String(o+1))},[i,j,r]);return e.jsxs("div",{className:L("jkl-table-pagination",f),...C,id:k,"data-density":x||I,ref:n,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[d.rowsPerPage,":"]}),e.jsx(te,{className:"jkl-table-pagination__picker-input",label:d.rowsPerPage,labelProps:{srOnly:!0},name:`${k}-rows-per-page`,items:P.map(l=>typeof l=="number"?String(l):{label:l.label,value:String(l.value)}),value:String(b),onChange:S,width:"min(8rem, 100%)",inline:!0})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:j!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[h&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof h=="object"?h.gotoLabel:"Gå til side",":"]}),e.jsx(O,{className:"jkl-table-pagination__picker-input",label:typeof h=="object"?h.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${k}-go-to-page`,value:p,width:"min(4rem, 100%)",onChange:B,"aria-invalid":p&&p!==String(r+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(H,{className:"jkl-table-pagination__previous",title:d.previous,onClick:_,children:e.jsx(Z,{})})}),e.jsx(le,{id:k,activePage:a,numberOfPages:j,onPageClick:m}),e.jsx("li",{children:e.jsx(H,{className:"jkl-table-pagination__next",title:d.next,onClick:z,children:e.jsx(ee,{})})})]})]})})]})}),le=({id:g,activePage:n,numberOfPages:a,onPageClick:c})=>{if(a<=7)return e.jsx(e.Fragment,{children:Array.from({length:a}).map((S,d)=>e.jsx("li",{children:e.jsx("button",{className:L("jkl-table-pagination__page",{"jkl-table-pagination__page--active":n===d}),type:"button","data-number":d,onClick:c,children:d+1})},`${g}-page-${d}`))});const b=n>3&&a>7,P=n<a-4&&a>7,f=Math.min(Math.max(n-2,1),a-6),x=Math.min(f+1,a-5),w=Math.min(x+1,a-4),h=Math.min(x+2,a-3),i=Math.min(x+3,a-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(v,{isActive:n===0,number:0,onClick:c})}),e.jsx("li",{children:b?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(v,{isActive:n===f,number:f,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===x,number:x,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===w,number:w,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===h,number:h,onClick:c})}),e.jsx("li",{children:P?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(v,{isActive:n===i,number:i,onClick:c})}),e.jsx("li",{children:e.jsx(v,{isActive:n===a-1,number:a-1,onClick:c})})]})},v=({isActive:g,number:n,onClick:a,...c})=>e.jsx("button",{className:L("jkl-table-pagination__page",{"jkl-table-pagination__page--active":g}),type:"button","data-number":n,onClick:a,...c,children:n+1});q.displayName="TablePagination";q.__docgenInfo={description:"",methods:[],displayName:"TablePagination",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},activePage:{required:!1,tsType:{name:"number"},description:"@default 0"},rowsPerPage:{required:!0,tsType:{name:"number"},description:'Null eller negativt tall tolkes som "vis alle".'},rowsPerPageItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | { label: string; value: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string; value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"Array<number | { label: string; value: number }>"},description:""},totalNumberOfRows:{required:!0,tsType:{name:"number"},description:""},withGoToPage:{required:!1,tsType:{name:"union",raw:"boolean | { gotoLabel: string }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ gotoLabel: string }",signature:{properties:[{key:"gotoLabel",value:{name:"string",required:!0}}]}}]},description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
Du kan også sende inn en custom label hvis du ønsker det, ellers bruke
true for default label
@default false`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e: React.SyntheticEvent,
    toPage: number,
    fromPage: number,
) => void`,signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"e"},{type:{name:"number"},name:"toPage"},{type:{name:"number"},name:"fromPage"}],return:{name:"void"}}},description:""},onChangeRowsPerPage:{required:!0,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLSelectElement"}],raw:"ChangeEventHandler<HTMLSelectElement>"},description:""},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    rowsPerPage: string;
    previous: string;
    next: string;
}`,signature:{properties:[{key:"rowsPerPage",value:{name:"string",required:!0}},{key:"previous",value:{name:"string",required:!0}},{key:"next",value:{name:"string",required:!0}}]}},description:`Dersom du ønsker å ha custom labels kan du sende inn disse. "rowsPerPage"
vises alltid på skjerm mens "next" og "previous" brukes som hint til
skjermlesere for ikon-knappene til Neste/Forrige side
@default { rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }`}}};const Ue={title:"Komponenter/Table",component:G,subcomponents:{TableCaption:K,TableHead:V,TableHeader:M,TableBody:W,TableRow:R,TableCell:y}},N={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(K,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const n=s.useRef(null),[a,c]=s.useState(0),[b,P]=s.useState(6),[f,x]=s.useState(T.columns[0]),[w,h]=s.useState("desc"),[i,S]=s.useState(""),[d,C]=s.useState(""),[k,I]=s.useState(T.rows),D=a*b,j=(t,m)=>{x(t),h(m)},{getSortProps:r}=ne(f,w,j);return s.useEffect(()=>{I(T.rows.filter(t=>t.toString().toLowerCase().includes(i.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(d.toLowerCase())).slice(D,D+b))},[D,b,i,d]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(O,{label:"Søk",value:i,placeholder:"Søk",onChange:t=>S(t.target.value)}),e.jsx(ae,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:d,onChange:t=>C(t.target.value)}),e.jsx(re,{onClick:()=>{S(""),C("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(G,{...g,children:[e.jsx(V,{sticky:!0,children:e.jsx(R,{children:T.columns.slice(0,6).map((t,m)=>e.jsx(M,{bold:!0,...r(t),children:t},m))})}),e.jsx(W,{children:k.length!==0?k.sort((t,m)=>{if(f==="Forfallsdato"){const p=new Date(t[0]).getTime(),u=new Date(m[0]).getTime();return w==="asc"?p-u:u-p}if(f==="Beløp"){const p=Number(t[2]),u=Number(m[2]);return w==="asc"?p-u:u-p}return 0}).map((t,m)=>e.jsxs(U,{clickable:!1,expandedChildren:e.jsxs(se,{children:[T.columns.map((p,u)=>t.map((B,_)=>u===_&&e.jsxs(s.Fragment,{children:[e.jsx($,{children:p}),e.jsx(E,{children:B.toLocaleString()})]},_))),e.jsx($,{children:"Faktura"}),e.jsx(E,{children:e.jsx(A,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"})}),e.jsx(E,{children:e.jsx(A,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"})})]}),children:[e.jsx(y,{children:e.jsx(A,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((p,u)=>e.jsx(y,{"data-th":T.columns[u],children:p.toLocaleString()},u)),e.jsx(X,{children:"Vis detaljer"})]},m)):e.jsx(R,{children:e.jsx(y,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(F,{children:e.jsx(R,{children:e.jsx(y,{colSpan:99,children:e.jsx(q,{activePage:a,totalNumberOfRows:T.rows.length,rowsPerPage:b,rowsPerPageItems:[6,12,24,{label:"Alle",value:k.length}],onChangeRowsPerPage:t=>{const m=Number.parseInt(t.target.value);P(m),c(0),n.current&&n.current.scrollIntoView({behavior:"smooth"})},onChange:(t,m)=>{c(m),n.current&&n.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const Xe=["TableComplex"];export{N as TableComplex,Xe as __namedExportsOrder,Ue as default};
