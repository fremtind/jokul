import{r as i,j as e}from"./iframe-DWDf04O7.js";import{f as v}from"./_index-Bb_qH3gG.js";import{a as W,E as O}from"./ExpandableTableRow-By8feOyX.js";import{b as H,a as $,c as M,T as V}from"./TableHeader-Dwv_8FIN.js";import{T as K}from"./TableBody-BKBumvHB.js";import{b as z,a as C,T as R}from"./TableRow-C3TXgwAT.js";import{c as L}from"./clsx-B-dksMZM.js";import{u as J}from"./useId-BnRe4JeL.js";import{I as q}from"./IconButton-1liRNP0D.js";import{C as Q}from"./ChevronLeftIcon-Ds8EyOmb.js";import{C as U}from"./ChevronRightIcon-BPIc3G_w.js";import{N as X}from"./NativeSelect-DNlqNDr0.js";import{T as G}from"./TextInput-ZW3UK6k1.js";import{u as Y}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{S as Z}from"./Select-CC2hzYX_.js";import{B as ee}from"./Button-BWaAH5UF.js";import{L as B}from"./Link-iQClf6hE.js";import{a as A}from"./DescriptionList-BMntaOMF.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnimatedHeight-CDbmhBY5.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-CSZYlxgQ.js";import"./usePreviousValue-VSfAWouu.js";import"./Expander-SPGtjxXW.js";import"./ChevronDownIcon-1iJJC5mu.js";import"./Icon-DPaN_3jL.js";import"./ChevronUpIcon-DtDRUz8K.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BEkr9gQt.js";import"./ArrowDownIcon-DrZyBe7T.js";import"./InputGroup-DbyDLzdc.js";import"./Label-Dg8pv617.js";import"./SupportLabel-DGl8dLbw.js";import"./WarningIcon-bqKp9toA.js";import"./BaseTextInput-8JI9w2dP.js";import"./useListNavigation-BEGn-h2V.js";import"./Loader-DruBE1pe.js";import"./useDelayedRender-PTZyKvdD.js";const E=i.forwardRef(({className:m,...n},a)=>e.jsx(z,{state:{isTableHead:!1,isTableBody:!1,isTableFooter:!0},children:e.jsx("tfoot",{className:L("jkl-table-foot",m),...n,ref:a})}));E.displayName="TableFooter";E.__docgenInfo={description:"",methods:[],displayName:"TableFooter",composes:["HTMLAttributes"]};function te(m,n,a){return n<m?m:n>a?a:n}const F=i.forwardRef((m,n)=>{const{activePage:a=0,totalNumberOfRows:c,rowsPerPage:b,rowsPerPageItems:y,className:w,id:h,withGoToPage:d=!1,onChange:u,onChangeRowsPerPage:k,labels:j={rowsPerPage:"Rader per side",previous:"Forrige",next:"Neste"},...f}=m,T=J(h||"jkl-table-pagination",{generateSuffix:!h}),x=b<=0?1:Math.ceil(c/b),[r,S]=i.useState(te(0,a,x-1)),I=i.useCallback(s=>{const o=Number.parseInt(s.currentTarget.dataset.number);u(s,o,r),S(o),l(String(o+1))},[u,r]),[t,l]=i.useState(String(r+1)),g=i.useCallback(s=>{l(s.target.value);try{const o=Number.parseInt(s.target.value)-1;if(Number.isNaN(o))return;o>=0&&o<x&&(u(s,o,r),S(o))}catch{return}},[u,r,x]),p=i.useCallback(s=>{if(r===0){u(s,r,r);return}const o=r-1;u(s,o,r),S(o),l(String(o+1))},[u,r]),D=i.useCallback(s=>{if(r===x-1){u(s,r,r);return}const o=r+1;u(s,o,r),S(o),l(String(o+1))},[u,x,r]);return e.jsxs("div",{className:L("jkl-table-pagination",w),...f,id:T,ref:n,children:[e.jsx("div",{className:"jkl-table-pagination__left",children:e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--rows",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[j.rowsPerPage,":"]}),e.jsx(X,{className:"jkl-table-pagination__picker-input",label:j.rowsPerPage,labelProps:{srOnly:!0},name:`${T}-rows-per-page`,items:y.map(s=>typeof s=="number"?String(s):{label:s.label,value:String(s.value)}),value:String(b),onChange:k,width:"min(8rem, 100%)",inline:!0})]})}),e.jsxs("span",{className:"jkl-table-pagination__total-rows",children:["Treff: ",c]}),e.jsx("div",{className:"jkl-table-pagination__right",children:x!==1&&e.jsxs("nav",{className:"jkl-table-pagination__nav",children:[d&&e.jsxs("div",{className:"jkl-table-pagination__picker jkl-table-pagination__picker--page",children:[e.jsxs("span",{className:"jkl-table-pagination__picker-label","aria-hidden":"true",children:[typeof d=="object"?d.gotoLabel:"Gå til side",":"]}),e.jsx(G,{className:"jkl-table-pagination__picker-input",label:typeof d=="object"?d.gotoLabel:"Gå til side",labelProps:{srOnly:!0},name:`${T}-go-to-page`,value:t,width:"min(4rem, 100%)",onChange:g,"aria-invalid":t&&t!==String(r+1)?"true":void 0})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(q,{className:"jkl-table-pagination__previous",title:j.previous,onClick:p,children:e.jsx(Q,{})})}),e.jsx(ne,{id:T,activePage:a,numberOfPages:x,onPageClick:I}),e.jsx("li",{children:e.jsx(q,{className:"jkl-table-pagination__next",title:j.next,onClick:D,children:e.jsx(U,{})})})]})]})})]})}),ne=({id:m,activePage:n,numberOfPages:a,onPageClick:c})=>{if(a<=7)return e.jsx(e.Fragment,{children:Array.from({length:a}).map((j,f)=>e.jsx("li",{children:e.jsx("button",{className:L("jkl-table-pagination__page",{"jkl-table-pagination__page--active":n===f}),type:"button","data-number":f,onClick:c,children:f+1})},`${m}-page-${f}`))});const b=n>3&&a>7,y=n<a-4&&a>7,w=Math.min(Math.max(n-2,1),a-6),h=Math.min(w+1,a-5),d=Math.min(h+1,a-4),u=Math.min(h+2,a-3),k=Math.min(h+3,a-2);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(P,{isActive:n===0,number:0,onClick:c})}),e.jsx("li",{children:b?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===w,number:w,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===h,number:h,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===d,number:d,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===u,number:u,onClick:c})}),e.jsx("li",{children:y?e.jsx("span",{className:"jkl-table-pagination__ellipsis","aria-hidden":!0,children:"..."}):e.jsx(P,{isActive:n===k,number:k,onClick:c})}),e.jsx("li",{children:e.jsx(P,{isActive:n===a-1,number:a-1,onClick:c})})]})},P=({isActive:m,number:n,onClick:a,...c})=>e.jsx("button",{className:L("jkl-table-pagination__page",{"jkl-table-pagination__page--active":m}),type:"button","data-number":n,onClick:a,...c,children:n+1});F.displayName="TablePagination";F.__docgenInfo={description:"",methods:[],displayName:"TablePagination",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},activePage:{required:!1,tsType:{name:"number"},description:"@default 0"},rowsPerPage:{required:!0,tsType:{name:"number"},description:'Null eller negativt tall tolkes som "vis alle".'},rowsPerPageItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | { label: string; value: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string; value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"Array<number | { label: string; value: number }>"},description:""},totalNumberOfRows:{required:!0,tsType:{name:"number"},description:""},withGoToPage:{required:!1,tsType:{name:"union",raw:"boolean | { gotoLabel: string }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ gotoLabel: string }",signature:{properties:[{key:"gotoLabel",value:{name:"string",required:!0}}]}}]},description:`Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
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
@default { rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }`}}};const Oe={title:"Komponenter/Table",component:V,subcomponents:{TableCaption:M,TableHead:$,TableHeader:H,TableBody:K,TableRow:R,TableCell:C}},N={name:"Kompleks Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(M,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:m=>{const n=i.useRef(null),[a,c]=i.useState(0),[b,y]=i.useState(6),[w,h]=i.useState(v.columns[0]),[d,u]=i.useState("desc"),[k,j]=i.useState(""),[f,T]=i.useState(""),[_,x]=i.useState(v.rows),r=a*b,S=(t,l)=>{h(t),u(l)},{getSortProps:I}=Y(w,d,S);return i.useEffect(()=>{x(v.rows.filter(t=>t.toString().toLowerCase().includes(k.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(f.toLowerCase())).slice(r,r+b))},[r,b,k,f]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(G,{label:"Søk",value:k,placeholder:"Søk",onChange:t=>j(t.target.value)}),e.jsx(Z,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:f,onChange:t=>T(t.target.value)}),e.jsx(ee,{onClick:()=>{j(""),T("")},children:"Fjern filter"})]}),e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(V,{...m,children:[e.jsx($,{sticky:!0,children:e.jsx(R,{children:v.columns.slice(0,6).map((t,l)=>e.jsx(H,{bold:!0,...I(t),children:t},l))})}),e.jsx(K,{children:_.length!==0?_.sort((t,l)=>{if(w==="Forfallsdato"){const g=new Date(t[0]).getTime(),p=new Date(l[0]).getTime();return d==="asc"?g-p:p-g}if(w==="Beløp"){const g=Number(t[2]),p=Number(l[2]);return d==="asc"?g-p:p-g}return 0}).map((t,l)=>e.jsxs(W,{clickable:!1,expandedChildren:e.jsxs(A,{children:[v.columns.map((g,p)=>t.map((D,s)=>p===s&&e.jsx(A.Item,{terms:g,details:D.toLocaleString()},s))),e.jsx(A.Item,{terms:"Faktura",details:[e.jsx(B,{external:!0,target:"_blank",href:"#",children:"Åpne i ny fane"},"1"),e.jsx(B,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:"Last ned"},"2")]})]}),children:[e.jsx(C,{children:e.jsx(B,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1,6).map((g,p)=>e.jsx(C,{"data-th":v.columns[p],children:g.toLocaleString()},p)),e.jsx(O,{children:"Vis detaljer"})]},l)):e.jsx(R,{children:e.jsx(C,{colSpan:99,children:"Fant ingen fakturaer."})})}),e.jsx(E,{children:e.jsx(R,{children:e.jsx(C,{colSpan:99,children:e.jsx(F,{activePage:a,totalNumberOfRows:v.rows.length,rowsPerPage:b,rowsPerPageItems:[6,12,24,{label:"Alle",value:_.length}],onChangeRowsPerPage:t=>{const l=Number.parseInt(t.target.value);y(l),c(0),n.current&&n.current.scrollIntoView({behavior:"smooth"})},onChange:(t,l)=>{c(l),n.current&&n.current.scrollIntoView({behavior:"smooth"})}})})})})]})})]})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
                                                    {faktura.columns.map((column, columnIndex) => row.map((cell, rowIndex) => columnIndex === rowIndex && <DescriptionList.Item key={rowIndex} terms={column} details={cell.toLocaleString()} />))}
                                                    <DescriptionList.Item terms="Faktura" details={[<Link key="1" external target={"_blank"} href={"#"}>
                                                                Åpne i ny fane
                                                            </Link>, <Link key="2" download={\`\${row[3]} \${new Date(row[0] as Date).toLocaleDateString()}\`} href={"#"}>
                                                                Last ned
                                                            </Link>]} />
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
}`,...N.parameters?.docs?.source}}};const ze=["TableComplex"];export{N as TableComplex,ze as __namedExportsOrder,Oe as default};
