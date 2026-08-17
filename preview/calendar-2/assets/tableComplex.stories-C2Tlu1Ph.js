import{r as l,j as e}from"./iframe-pjLwb0-n.js";import{f as v}from"./_index-Bb02qKwR.js";import{a as W,E as O}from"./ExpandableTableRow-BBXwzURk.js";import{a as H,T as $}from"./TableCaption-DB6Q1CX3.js";import{T as M}from"./TableBody-Bqd6WhnD.js";import{a as C,b as N}from"./TableRow-DOeGtZ3V.js";import{T as z}from"./TableFooter-C-TGlQ8L.js";import{a as V,T as K}from"./TableHeader-D2tl4Tmz.js";import{c as A}from"./clsx-B-dksMZM.js";import{u as J}from"./useId-BfQwyt0n.js";import{I as F}from"./IconButton-VR3Elirp.js";import{C as Q}from"./ChevronLeftIcon-CE70hXpn.js";import{C as U}from"./ChevronRightIcon-B5xSzaXj.js";import{N as X}from"./NativeSelect-qMmqMgkh.js";import{T as G}from"./TextInput-DOx5bz13.js";import{u as Y}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{S as Z}from"./Select-Byv2L9Yt.js";import{B as ee}from"./Button-DgKx6Dol.js";import{L as I}from"./Link-Da6PREey.js";import{b as te,D as q,a as B}from"./DescriptionList-NknN3LOc.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-BakPTukV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DLKxE87w.js";import"./usePreviousValue-BLtqDLKt.js";import"./Expander-CrKAAhSz.js";import"./ChevronUpIcon-Dm83nsS5.js";import"./Icon-VgqaohRD.js";import"./tableContext-BWL-k4Nx.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-By7NR1xq.js";import"./ArrowDownIcon-MqFwY5nU.js";import"./InputGroup-B5ZcF47c.js";import"./Label-B8lKx5vS.js";import"./SupportLabel-B4TN6YUr.js";import"./SuccessIcon-DX_uUfBI.js";import"./WarningIcon-DFqNig3M.js";import"./BaseTextInput-Bk--ov77.js";import"./useListNavigation-B3cOgeDy.js";import"./Popover-CAHYhAVq.js";import"./floating-ui.react-r0QQyHkO.js";import"./index-BsW3q-_v.js";import"./index-BBZvlUJf.js";import"./getThemeAndSize-CZAj3IXt.js";import"./Loader-DW680bvz.js";import"./useDelayedRender-0ht1AEUI.js";function ne(g,n,r){return n<g?g:n>r?r:n}const E=l.forwardRef((g,n)=>{const{activePage:r=0,totalNumberOfRows:c,rowsPerPage:b,rowsPerPageItems:y,className:x,id:h,withGoToPage:m=!1,onChange:u,onChangeRowsPerPage:j,labels:k={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...w}=g,T=J(h||"jkl-table-pagination",{generateSuffix:!h}),f=b<=0?1:Math.ceil(c/b),[a,S]=l.useState(ne(0,r,f-1)),R=l.useCallback(s=>{const o=Number.parseInt(s.currentTarget.dataset.number);u(s,o,a),S(o),i(String(o+1))},[u,a]),[t,i]=l.useState(String(a+1)),d=l.useCallback(s=>{i(s.target.value);try{const o=Number.parseInt(s.target.value)-1;if(Number.isNaN(o))return;o>=0&&o<f&&(u(s,o,a),S(o))}catch{return}},[u,a,f]),p=l.useCallback(s=>{if(a===0){u(s,a,a);return}const o=a-1;u(s,o,a),S(o),i(String(o+1))},[u,a]),L=l.useCallback(s=>{if(a===f-1){u(s,a,a);return}const o=a+1;u(s,o,a),S(o),i(String(o+1))},[u,f,a]);return e.jsxs("div",{className:A("jkl-table-pagination",x),...w,id:T,ref:n,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[k.rowsPerPage,":"]}),e.jsx(X,{className:"jkl-table-pagination__picker-input",label:k.rowsPerPage,labelProps:{srOnly:!0},name:`${T}-rows-per-page`,items:y.map(s=>typeof s=="number"?String(s):{label:s.label,value:String(s.value)}),value:String(b),onChange:j,width:"min(8rem, 100%)",inline:!0})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:f!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[m&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof m=="object"?m.gotoLabel:"Gå til side",":"]}),e.jsx(G,{className:"jkl-table-pagination__picker-input",label:typeof m=="object"?m.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${T}-go-to-page`,value:t,width:"min(4rem, 100%)",onChange:d,"aria-invalid":t&&t!==String(a+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(F,{className:"jkl-table-pagination__previous",title:k.previous,onClick:p,children:e.jsx(Q,{})})}),e.jsx(re,{id:T,activePage:r,numberOfPages:f,onPageClick:R}),e.jsx("li",{children:e.jsx(F,{className:"jkl-table-pagination__next",title:k.next,onClick:L,children:e.jsx(U,{})})})]})]})})]})}),re=({id:g,activePage:n,numberOfPages:r,onPageClick:c})=>{if(r<=7)return e.jsx(e.Fragment,{children:Array.from({length:r}).map((k,w)=>e.jsx("li",{children:e.jsx("button",{className:A("jkl-table-pagination__page",{"jkl-table-pagination__page--active":n===w}),type:"button","data-number":w,onClick:c,children:w+1})},`${g}-page-${w}`))});const b=n>3&&r>7,y=n<r-4&&r>7,x=Math.min(Math.max(n-2,1),r-6),h=Math.min(x+1,r-5),m=Math.min(h+1,r-4),u=Math.min(h+2,r-3),j=Math.min(h+3,r-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(P,{isActive:n===0,number:0,onClick:c})}),e.jsx("li",{children:b?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===x,number:x,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===h,number:h,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===m,number:m,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===u,number:u,onClick:c})}),e.jsx("li",{children:y?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===j,number:j,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===r-1,number:r-1,onClick:c})})]})},P=({isActive:g,number:n,onClick:r,...c})=>e.jsx("button",{className:A("jkl-table-pagination__page",{"jkl-table-pagination__page--active":g}),type:"button","data-number":n,onClick:r,...c,children:n+1});E.displayName="TablePagination";E.__docgenInfo={description:"",methods:[],displayName:"TablePagination",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},activePage:{required:!1,tsType:{name:"number"},description:"@default 0"},rowsPerPage:{required:!0,tsType:{name:"number"},description:'Null eller negativt tall tolkes som "vis alle".'},rowsPerPageItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | { label: string; value: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string; value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"Array<number | { label: string; value: number }>"},description:""},totalNumberOfRows:{required:!0,tsType:{name:"number"},description:""},withGoToPage:{required:!1,tsType:{name:"union",raw:"boolean | { gotoLabel: string }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ gotoLabel: string }",signature:{properties:[{key:"gotoLabel",value:{name:"string",required:!0}}]}}]},description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
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
@default { rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }`}}};const tt={title:"Komponenter/Table",component:$,subcomponents:{TableCaption:H,TableHead:K,TableHeader:V,TableBody:M,TableRow:N,TableCell:C}},_={name:"Kompleks Table",args:{fullWidth:!0,caption:e.jsx(H,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const n=l.useRef(null),[r,c]=l.useState(0),[b,y]=l.useState(6),[x,h]=l.useState(v.columns[0]),[m,u]=l.useState("desc"),[j,k]=l.useState(""),[w,T]=l.useState(""),[D,f]=l.useState(v.rows),a=r*b,S=(t,i)=>{h(t),u(i)},{getSortProps:R}=Y(x,m,S);return l.useEffect(()=>{f(v.rows.filter(t=>t.toString().toLowerCase().includes(j.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(w.toLowerCase())).slice(a,a+b))},[a,b,j,w]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(G,{label:"Søk",value:j,placeholder:"Søk",onChange:t=>k(t.target.value)}),e.jsx(Z,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:w,onChange:t=>T(t.target.value)}),e.jsx(ee,{onClick:()=>{k(""),T("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs($,{...g,children:[e.jsx(K,{sticky:!0,children:e.jsx(N,{children:v.columns.slice(0,6).map((t,i)=>e.jsx(V,{bold:!0,...R(t),children:t},i))})}),e.jsx(M,{children:D.length!==0?D.sort((t,i)=>{if(x==="Forfallsdato"){const d=new Date(t[0]).getTime(),p=new Date(i[0]).getTime();return m==="asc"?d-p:p-d}if(x==="Beløp"){const d=Number(t[2]),p=Number(i[2]);return m==="asc"?d-p:p-d}return 0}).map((t,i)=>e.jsxs(W,{clickable:!1,expandedChildren:e.jsxs(te,{children:[v.columns.map((d,p)=>t.map((L,s)=>p===s&&e.jsxs(l.Fragment,{children:[e.jsx(q,{children:d}),e.jsx(B,{children:L.toLocaleString()})]},s))),e.jsx(q,{children:"Faktura"}),e.jsx(B,{children:e.jsx(I,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"},"1")}),e.jsx(B,{children:e.jsx(I,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"},"2")})]}),children:[e.jsx(C,{children:e.jsx(I,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((d,p)=>e.jsx(C,{"data-th":v.columns[p],children:d.toLocaleString()},p)),e.jsx(O,{children:"Vis detaljer"})]},i)):e.jsx(N,{children:e.jsx(C,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(z,{children:e.jsx(N,{children:e.jsx(C,{colSpan:99,children:e.jsx(E,{activePage:r,totalNumberOfRows:v.rows.length,rowsPerPage:b,rowsPerPageItems:[6,12,24,{label:"Alle",value:D.length}],onChangeRowsPerPage:t=>{const i=Number.parseInt(t.target.value);y(i),c(0),n.current&&n.current.scrollIntoView({behavior:"smooth"})},onChange:(t,i)=>{c(i),n.current&&n.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const nt=["TableComplex"];export{_ as TableComplex,nt as __namedExportsOrder,tt as default};
