import{r as i,j as e}from"./iframe-CJC-gKdl.js";import{f as v}from"./_index-B3s-ufym.js";import{a as O,E as z}from"./ExpandableTableRow-C-Pu-oeV.js";import{b as $,a as M,c as V,T as K}from"./TableHeader-Cz9TTs76.js";import{T as G}from"./TableBody-CzKHyHb7.js";import{b as J,a as C,T as N}from"./TableRow-ClsX1api.js";import{c as R}from"./clsx-B-dksMZM.js";import{u as Q}from"./useId-IgzJ_9Cy.js";import{I as q}from"./IconButton-DLfpp1p8.js";import{C as U}from"./ChevronLeftIcon-CX2vtpOW.js";import{C as X}from"./ChevronRightIcon-B958IwtS.js";import{N as Y}from"./NativeSelect-bD490a0D.js";import{T as W}from"./TextInput-ChzkZtbT.js";import{u as Z}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{S as ee}from"./Select-CJGkgD3a.js";import{B as te}from"./Button-BgknnngK.js";import{L as B}from"./Link-Dspdppuc.js";import{D as ne,a as H,b as A}from"./DescriptionList-CWCsVQYX.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-BcqslypA.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-CJtNkP00.js";import"./usePreviousValue-CPer9xMX.js";import"./Expander-D10phkhO.js";import"./ChevronDownIcon-DeVVf5Gj.js";import"./Icon-BZpM8QvX.js";import"./ChevronUpIcon-o4vE-xZk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CKIxc_kg.js";import"./ArrowDownIcon-CgozGjVI.js";import"./InputGroup-K5TOCmJc.js";import"./Label-aGT48Cas.js";import"./SupportLabel-WNVZPiAE.js";import"./WarningIcon-CyIPJFEC.js";import"./BaseTextInput-CH8Q25BN.js";import"./useListNavigation-CRnAq_dw.js";import"./Loader-DJaXmofR.js";import"./useDelayedRender-DPDbmcCx.js";const E=i.forwardRef(({className:m,...n},a)=>e.jsx(J,{state:{isTableHead:!1,isTableBody:!1,isTableFooter:!0},children:e.jsx("tfoot",{className:R("jkl-table-foot",m),...n,ref:a})}));E.displayName="TableFooter";E.__docgenInfo={description:"",methods:[],displayName:"TableFooter",composes:["HTMLAttributes"]};function ae(m,n,a){return n<m?m:n>a?a:n}const F=i.forwardRef((m,n)=>{const{activePage:a=0,totalNumberOfRows:c,rowsPerPage:b,rowsPerPageItems:y,className:w,id:h,withGoToPage:d=!1,onChange:u,onChangeRowsPerPage:j,labels:k={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...f}=m,T=Q(h||"jkl-table-pagination",{generateSuffix:!h}),x=b<=0?1:Math.ceil(c/b),[r,S]=i.useState(ae(0,a,x-1)),L=i.useCallback(s=>{const o=Number.parseInt(s.currentTarget.dataset.number);u(s,o,r),S(o),l(String(o+1))},[u,r]),[t,l]=i.useState(String(r+1)),g=i.useCallback(s=>{l(s.target.value);try{const o=Number.parseInt(s.target.value)-1;if(Number.isNaN(o))return;o>=0&&o<x&&(u(s,o,r),S(o))}catch{return}},[u,r,x]),p=i.useCallback(s=>{if(r===0){u(s,r,r);return}const o=r-1;u(s,o,r),S(o),l(String(o+1))},[u,r]),I=i.useCallback(s=>{if(r===x-1){u(s,r,r);return}const o=r+1;u(s,o,r),S(o),l(String(o+1))},[u,x,r]);return e.jsxs("div",{className:R("jkl-table-pagination",w),...f,id:T,ref:n,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[k.rowsPerPage,":"]}),e.jsx(Y,{className:"jkl-table-pagination__picker-input",label:k.rowsPerPage,labelProps:{srOnly:!0},name:`${T}-rows-per-page`,items:y.map(s=>typeof s=="number"?String(s):{label:s.label,value:String(s.value)}),value:String(b),onChange:j,width:"min(8rem, 100%)",inline:!0})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:x!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[d&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof d=="object"?d.gotoLabel:"Gå til side",":"]}),e.jsx(W,{className:"jkl-table-pagination__picker-input",label:typeof d=="object"?d.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${T}-go-to-page`,value:t,width:"min(4rem, 100%)",onChange:g,"aria-invalid":t&&t!==String(r+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(q,{className:"jkl-table-pagination__previous",title:k.previous,onClick:p,children:e.jsx(U,{})})}),e.jsx(re,{id:T,activePage:a,numberOfPages:x,onPageClick:L}),e.jsx("li",{children:e.jsx(q,{className:"jkl-table-pagination__next",title:k.next,onClick:I,children:e.jsx(X,{})})})]})]})})]})}),re=({id:m,activePage:n,numberOfPages:a,onPageClick:c})=>{if(a<=7)return e.jsx(e.Fragment,{children:Array.from({length:a}).map((k,f)=>e.jsx("li",{children:e.jsx("button",{className:R("jkl-table-pagination__page",{"jkl-table-pagination__page--active":n===f}),type:"button","data-number":f,onClick:c,children:f+1})},`${m}-page-${f}`))});const b=n>3&&a>7,y=n<a-4&&a>7,w=Math.min(Math.max(n-2,1),a-6),h=Math.min(w+1,a-5),d=Math.min(h+1,a-4),u=Math.min(h+2,a-3),j=Math.min(h+3,a-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(P,{isActive:n===0,number:0,onClick:c})}),e.jsx("li",{children:b?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===w,number:w,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===h,number:h,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===d,number:d,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===u,number:u,onClick:c})}),e.jsx("li",{children:y?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===j,number:j,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===a-1,number:a-1,onClick:c})})]})},P=({isActive:m,number:n,onClick:a,...c})=>e.jsx("button",{className:R("jkl-table-pagination__page",{"jkl-table-pagination__page--active":m}),type:"button","data-number":n,onClick:a,...c,children:n+1});F.displayName="TablePagination";F.__docgenInfo={description:"",methods:[],displayName:"TablePagination",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},activePage:{required:!1,tsType:{name:"number"},description:"@default 0"},rowsPerPage:{required:!0,tsType:{name:"number"},description:'Null eller negativt tall tolkes som "vis alle".'},rowsPerPageItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | { label: string; value: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string; value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"Array<number | { label: string; value: number }>"},description:""},totalNumberOfRows:{required:!0,tsType:{name:"number"},description:""},withGoToPage:{required:!1,tsType:{name:"union",raw:"boolean | { gotoLabel: string }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ gotoLabel: string }",signature:{properties:[{key:"gotoLabel",value:{name:"string",required:!0}}]}}]},description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
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
@default { rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }`}}};const Je={title:"Komponenter/Table",component:K,subcomponents:{TableCaption:V,TableHead:M,TableHeader:$,TableBody:G,TableRow:N,TableCell:C}},_={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(V,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:m=>{const n=i.useRef(null),[a,c]=i.useState(0),[b,y]=i.useState(6),[w,h]=i.useState(v.columns[0]),[d,u]=i.useState("desc"),[j,k]=i.useState(""),[f,T]=i.useState(""),[D,x]=i.useState(v.rows),r=a*b,S=(t,l)=>{h(t),u(l)},{getSortProps:L}=Z(w,d,S);return i.useEffect(()=>{x(v.rows.filter(t=>t.toString().toLowerCase().includes(j.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(f.toLowerCase())).slice(r,r+b))},[r,b,j,f]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(W,{label:"Søk",value:j,placeholder:"Søk",onChange:t=>k(t.target.value)}),e.jsx(ee,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:f,onChange:t=>T(t.target.value)}),e.jsx(te,{onClick:()=>{k(""),T("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(K,{...m,children:[e.jsx(M,{sticky:!0,children:e.jsx(N,{children:v.columns.slice(0,6).map((t,l)=>e.jsx($,{bold:!0,...L(t),children:t},l))})}),e.jsx(G,{children:D.length!==0?D.sort((t,l)=>{if(w==="Forfallsdato"){const g=new Date(t[0]).getTime(),p=new Date(l[0]).getTime();return d==="asc"?g-p:p-g}if(w==="Beløp"){const g=Number(t[2]),p=Number(l[2]);return d==="asc"?g-p:p-g}return 0}).map((t,l)=>e.jsxs(O,{clickable:!1,expandedChildren:e.jsxs(ne,{children:[v.columns.map((g,p)=>t.map((I,s)=>p===s&&e.jsxs(i.Fragment,{children:[e.jsx(H,{children:g}),e.jsx(A,{children:I.toLocaleString()})]},s))),e.jsx(H,{children:"Faktura"}),e.jsx(A,{children:e.jsx(B,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"},"1")}),e.jsx(A,{children:e.jsx(B,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"},"2")})]}),children:[e.jsx(C,{children:e.jsx(B,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((g,p)=>e.jsx(C,{"data-th":v.columns[p],children:g.toLocaleString()},p)),e.jsx(z,{children:"Vis detaljer"})]},l)):e.jsx(N,{children:e.jsx(C,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(E,{children:e.jsx(N,{children:e.jsx(C,{colSpan:99,children:e.jsx(F,{activePage:a,totalNumberOfRows:v.rows.length,rowsPerPage:b,rowsPerPageItems:[6,12,24,{label:"Alle",value:D.length}],onChangeRowsPerPage:t=>{const l=Number.parseInt(t.target.value);y(l),c(0),n.current&&n.current.scrollIntoView({behavior:"smooth"})},onChange:(t,l)=>{c(l),n.current&&n.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const Qe=["TableComplex"];export{_ as TableComplex,Qe as __namedExportsOrder,Je as default};
