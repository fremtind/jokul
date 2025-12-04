import{r as l,j as e,R as B}from"./iframe-BjXEG3ty.js";import{c as y}from"./clsx-B-dksMZM.js";import{u as Z}from"./useAnimatedHeight-XXb8_D3v.js";import{u as H}from"./useId-DDzAfnN4.js";import{E as ee}from"./Expander-D3zPKe7m.js";import{u as G,a as N,b as D,T as te,c as W,d as z,e as J,f as Q,g as C}from"./_index-BWqQuG8y.js";import{T as U}from"./TableBody-DLSfyADa.js";import{I as O}from"./IconButton-DoYLOoae.js";import{C as ne}from"./ChevronLeftIcon-BKT9gw5B.js";import{C as ae}from"./ChevronRightIcon-CbiHigvf.js";import{N as re}from"./NativeSelect-mkIhVV5R.js";import{T as X}from"./TextInput-BGiMADdo.js";import{u as se}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{S as le}from"./Select-C_Mv91z0.js";import{B as oe}from"./Button-i95oGjnQ.js";import{L as F}from"./Link-CKss343o.js";import{b as ie,D as K,a as q}from"./DescriptionList-CpdcipLh.js";import"./preload-helper-PPVm8Dsz.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-JrIp1--C.js";import"./usePreviousValue-CyJP6hBA.js";import"./ChevronDownIcon-D72mxI3s.js";import"./Icon-DH5sQCcO.js";import"./ChevronUpIcon-CqY-MgiW.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-OgRW9t62.js";import"./ArrowDownIcon-B_tvvY8D.js";import"./InputGroup-efpMJeQA.js";import"./Label-DOx2JQwo.js";import"./SupportLabel-gXaapy-x.js";import"./WarningIcon-3EXZbt0f.js";import"./BaseTextInput-CpOv61AJ.js";import"./useListNavigation-DR7GVnjY.js";import"./Loader-CESkl0FW.js";import"./useDelayedRender-sYfXCEAG.js";const E=l.forwardRef(({isOpen:i,onClick:t,children:n,className:o,id:f,"aria-controls":v,...u},w)=>{if(i===void 0||typeof t!="function")throw new Error("ExpandableTableRowController must have ExpandableTableRow as parent");const{collapseToList:p}=G(),m=u["data-th"],s=p?m:void 0;return e.jsx(N,{className:y("jkl-table-cell--expand",{"jkl-table-cell--expand-without-text":!n},o),...u,ref:w,children:e.jsx(ee,{as:"button",className:y("jkl-table-row-expand-button",{"jkl-table-row-expand-button--expanded":i}),id:f,open:i,"aria-controls":v,"aria-label":n?void 0:m||"Ekspander rad",onClick:b=>{b.stopPropagation(),t()},onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.stopPropagation(),b.preventDefault(),t())},children:n??s})})});E.displayName="ExpandableTableRowController";E.__docgenInfo={description:"",methods:[],displayName:"ExpandableTableRowController",props:{density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:`Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal innholdet være venstrejustert, men for eksempel summer er høyrejustert.
@default "left"`},verticalAlign:{required:!1,tsType:{name:"union",raw:'"center" | "top"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"top"'}]},description:`Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være toppjustert, men dersom raden har knapper kan midtstilling fungere bedre.
@default "top"`},isOpen:{required:!1,tsType:{name:"boolean"},description:"Settes automatisk av ExpandableTableRow"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settes automatisk av ExpandableTableRow"}},composes:["TdHTMLAttributes"]};const M=l.forwardRef((i,t)=>{const{className:n,clickable:o,children:f,expandedChildren:v,onToggle:u,colSpan:w=100,isOpen:p,...m}=i,[s,b]=l.useState(p??!1);l.useEffect(()=>{typeof p>"u"||b(p)},[p]);const[g]=Z(s,{timing:"expressive"}),S=()=>{const r=!s;u&&u(r),b(r)},T=y("jkl-table-row--expandable",n,{"jkl-table-row--expanded":s,"jkl-expandable-table-row--clickable-external":o}),_=y("jkl-expandable-table-row__expanded-row",{"jkl-expandable-table-row__expanded-row--expanded":s}),P=H("jkl-expandable-table-row"),j=H("jkl-expandable-table-row-controller");return e.jsxs(e.Fragment,{children:[e.jsx(D,{className:T,clickable:o??{onClick:()=>S()},...m,ref:t,children:B.Children.map(f,r=>B.isValidElement(r)&&r.type===E?B.cloneElement(r,{isOpen:s,onClick:()=>S(),"aria-controls":P,id:j}):r)}),e.jsx("tr",{"aria-hidden":!s,children:e.jsx("td",{colSpan:w,children:e.jsx("fieldset",{ref:g,className:_,id:P,"aria-labelledby":j,hidden:!s,children:v})})})]})});M.displayName="ExpandableTableRow";M.__docgenInfo={description:"",methods:[],displayName:"ExpandableTableRow",props:{clickable:{required:!1,tsType:{name:"ClickableRowProps"},description:"Gir raden interaktivitet og en click-handler."},expandedChildren:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},colSpan:{required:!1,tsType:{name:"number"},description:`Setter bredden på raden som blir åpnet
@default 100`},isOpen:{required:!1,tsType:{name:"boolean"},description:"Om du ønsker en controlled komponent. Hvis du ikke setter denne vil komponenten håndtere state selv."},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};const V=l.forwardRef(({className:i,...t},n)=>e.jsx(te,{state:{isTableHead:!1,isTableBody:!1,isTableFooter:!0},children:e.jsx("tfoot",{className:y("jkl-table-foot",i),...t,ref:n})}));V.displayName="TableFooter";V.__docgenInfo={description:"",methods:[],displayName:"TableFooter",composes:["HTMLAttributes"]};function ce(i,t,n){return t<i?i:t>n?n:t}const $=l.forwardRef((i,t)=>{const{activePage:n=0,totalNumberOfRows:o,rowsPerPage:f,rowsPerPageItems:v,className:u,density:w,id:p,withGoToPage:m=!1,onChange:s,onChangeRowsPerPage:b,labels:g={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...S}=i,T=H(p||"jkl-table-pagination",{generateSuffix:!p}),{density:_}=G(),j=f<=0?1:Math.ceil(o/f),[r,a]=l.useState(ce(0,n,j-1)),x=l.useCallback(c=>{const d=Number.parseInt(c.currentTarget.dataset.number);s(c,d,r),a(d),h(String(d+1))},[s,r]),[k,h]=l.useState(String(r+1)),A=l.useCallback(c=>{h(c.target.value);try{const d=Number.parseInt(c.target.value)-1;if(Number.isNaN(d))return;d>=0&&d<j&&(s(c,d,r),a(d))}catch{return}},[s,r,j]),L=l.useCallback(c=>{if(r===0){s(c,r,r);return}const d=r-1;s(c,d,r),a(d),h(String(d+1))},[s,r]),Y=l.useCallback(c=>{if(r===j-1){s(c,r,r);return}const d=r+1;s(c,d,r),a(d),h(String(d+1))},[s,j,r]);return e.jsxs("div",{className:y("jkl-table-pagination",u),...S,id:T,"data-density":w||_,ref:t,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[g.rowsPerPage,":"]}),e.jsx(re,{className:"jkl-table-pagination__picker-input",label:g.rowsPerPage,labelProps:{srOnly:!0},name:`${T}-rows-per-page`,items:v.map(c=>typeof c=="number"?String(c):{label:c.label,value:String(c.value)}),value:String(f),onChange:b,width:"min(8rem, 100%)",inline:!0})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",o]}),e.jsx("div",{className:"jkl-table-pagination__right",children:j!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[m&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof m=="object"?m.gotoLabel:"Gå til side",":"]}),e.jsx(X,{className:"jkl-table-pagination__picker-input",label:typeof m=="object"?m.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${T}-go-to-page`,value:k,width:"min(4rem, 100%)",onChange:A,"aria-invalid":k&&k!==String(r+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(O,{className:"jkl-table-pagination__previous",title:g.previous,onClick:L,children:e.jsx(ne,{})})}),e.jsx(de,{id:T,activePage:n,numberOfPages:j,onPageClick:x}),e.jsx("li",{children:e.jsx(O,{className:"jkl-table-pagination__next",title:g.next,onClick:Y,children:e.jsx(ae,{})})})]})]})})]})}),de=({id:i,activePage:t,numberOfPages:n,onPageClick:o})=>{if(n<=7)return e.jsx(e.Fragment,{children:Array.from({length:n}).map((b,g)=>e.jsx("li",{children:e.jsx("button",{className:y("jkl-table-pagination__page",{"jkl-table-pagination__page--active":t===g}),type:"button","data-number":g,onClick:o,children:g+1})},`${i}-page-${g}`))});const f=t>3&&n>7,v=t<n-4&&n>7,u=Math.min(Math.max(t-2,1),n-6),w=Math.min(u+1,n-5),p=Math.min(w+1,n-4),m=Math.min(w+2,n-3),s=Math.min(w+3,n-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(R,{isActive:t===0,number:0,onClick:o})}),e.jsx("li",{children:f?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(R,{isActive:t===u,number:u,onClick:o})}),e.jsx("li",{children:e.jsx(R,{isActive:t===w,number:w,onClick:o})}),e.jsx("li",{children:e.jsx(R,{isActive:t===p,number:p,onClick:o})}),e.jsx("li",{children:e.jsx(R,{isActive:t===m,number:m,onClick:o})}),e.jsx("li",{children:v?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(R,{isActive:t===s,number:s,onClick:o})}),e.jsx("li",{children:e.jsx(R,{isActive:t===n-1,number:n-1,onClick:o})})]})},R=({isActive:i,number:t,onClick:n,...o})=>e.jsx("button",{className:y("jkl-table-pagination__page",{"jkl-table-pagination__page--active":i}),type:"button","data-number":t,onClick:n,...o,children:t+1});$.displayName="TablePagination";$.__docgenInfo={description:"",methods:[],displayName:"TablePagination",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},activePage:{required:!1,tsType:{name:"number"},description:"@default 0"},rowsPerPage:{required:!0,tsType:{name:"number"},description:'Null eller negativt tall tolkes som "vis alle".'},rowsPerPageItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | { label: string; value: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string; value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"Array<number | { label: string; value: number }>"},description:""},totalNumberOfRows:{required:!0,tsType:{name:"number"},description:""},withGoToPage:{required:!1,tsType:{name:"union",raw:"boolean | { gotoLabel: string }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ gotoLabel: string }",signature:{properties:[{key:"gotoLabel",value:{name:"string",required:!0}}]}}]},description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
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
@default { rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }`}}};const Xe={title:"Komponenter/Table",component:Q,subcomponents:{TableCaption:J,TableHead:z,TableHeader:W,TableBody:U,TableRow:D,TableCell:N}},I={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(J,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:i=>{const t=l.useRef(null),[n,o]=l.useState(0),[f,v]=l.useState(6),[u,w]=l.useState(C.columns[0]),[p,m]=l.useState("desc"),[s,b]=l.useState(""),[g,S]=l.useState(""),[T,_]=l.useState(C.rows),P=n*f,j=(a,x)=>{w(a),m(x)},{getSortProps:r}=se(u,p,j);return l.useEffect(()=>{_(C.rows.filter(a=>a.toString().toLowerCase().includes(s.toLowerCase())).filter(a=>a[3].toString().toLowerCase().includes(g.toLowerCase())).slice(P,P+f))},[P,f,s,g]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(X,{label:"Søk",value:s,placeholder:"Søk",onChange:a=>b(a.target.value)}),e.jsx(le,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:g,onChange:a=>S(a.target.value)}),e.jsx(oe,{onClick:()=>{b(""),S("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(Q,{...i,children:[e.jsx(z,{sticky:!0,children:e.jsx(D,{children:C.columns.slice(0,6).map((a,x)=>e.jsx(W,{bold:!0,...r(a),children:a},x))})}),e.jsx(U,{children:T.length!==0?T.sort((a,x)=>{if(u==="Forfallsdato"){const k=new Date(a[0]).getTime(),h=new Date(x[0]).getTime();return p==="asc"?k-h:h-k}if(u==="Beløp"){const k=Number(a[2]),h=Number(x[2]);return p==="asc"?k-h:h-k}return 0}).map((a,x)=>e.jsxs(M,{clickable:!1,expandedChildren:e.jsxs(ie,{children:[C.columns.map((k,h)=>a.map((A,L)=>h===L&&e.jsxs(l.Fragment,{children:[e.jsx(K,{children:k}),e.jsx(q,{children:A.toLocaleString()})]},L))),e.jsx(K,{children:"Faktura"}),e.jsx(q,{children:e.jsx(F,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"})}),e.jsx(q,{children:e.jsx(F,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:"Last ned"})})]}),children:[e.jsx(N,{children:e.jsx(F,{download:`${a[3]} ${new Date(a[0]).toLocaleDateString()}`,href:"#",children:new Date(a[0]).toLocaleDateString()})}),a.slice(1,6).map((k,h)=>e.jsx(N,{"data-th":C.columns[h],children:k.toLocaleString()},h)),e.jsx(E,{children:"Vis detaljer"})]},x)):e.jsx(D,{children:e.jsx(N,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(V,{children:e.jsx(D,{children:e.jsx(N,{colSpan:99,children:e.jsx($,{activePage:n,totalNumberOfRows:C.rows.length,rowsPerPage:f,rowsPerPageItems:[6,12,24,{label:"Alle",value:T.length}],onChangeRowsPerPage:a=>{const x=Number.parseInt(a.target.value);v(x),o(0),t.current&&t.current.scrollIntoView({behavior:"smooth"})},onChange:(a,x)=>{o(x),t.current&&t.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const Ye=["TableComplex"];export{I as TableComplex,Ye as __namedExportsOrder,Xe as default};
