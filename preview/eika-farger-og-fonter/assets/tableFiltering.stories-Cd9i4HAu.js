import{r as a,j as e}from"./iframe-CpjE09ZT.js";import{a as w,T as f}from"./TableCaption-B5GpoW8K.js";import{T as b}from"./TableBody-BYJmL-Eg.js";import{a as l,b as o}from"./TableRow-DWOsN4VN.js";import{a as h,T as x}from"./TableHeader-CoiLAL0H.js";import{f as r}from"./_index-DcsdE9qR.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-Bb3OgY5N.js";import{S as C}from"./Select-CPsCq_Tw.js";import{B as j}from"./Button-DoXCULlV.js";import{L as v}from"./Link-cX8DFq2C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./tableContext-3c9XGbFW.js";import"./ChevronUpIcon-CKMlhW-J.js";import"./Icon-3txnnQXp.js";import"./InputGroup-Be5s9fP2.js";import"./useId-AqVQ_QMd.js";import"./Label-Bm8r1d79.js";import"./SupportLabel-BY929WKb.js";import"./SuccessIcon-Dg7i1Z3V.js";import"./WarningIcon-67MixeAi.js";import"./BaseTextInput-eu9kkn5-.js";import"./IconButton-B0j-s1KW.js";import"./mergeRefs-_7lZvp9j.js";import"./Flex-BLxOKUru.js";import"./SlotComponent-DgG28txs.js";import"./Search-B7SmYQQB.js";import"./Text-DgA2TONx.js";import"./Title-CeLnhNeW.js";import"./useListNavigation-DctE7fqK.js";import"./ArrowDownIcon-BBmJwEM7.js";import"./CloseIcon-BudOuERL.js";import"./usePreviousValue-B_g86ocX.js";import"./Loader-rGq_P8Wv.js";import"./useDelayedRender-EYEVPfKQ.js";const ue={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:x,TableHeader:h,TableBody:b,TableRow:o,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[s,c]=a.useState(""),[i,d]=a.useState(""),[p,g]=a.useState(r.rows);return a.useEffect(()=>{g(r.rows.filter(t=>t.toString().toLowerCase().includes(s.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[s,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:s,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...T,children:[e.jsx(x,{sticky:!0,children:e.jsx(o,{children:r.columns.slice(0).map((t,m)=>e.jsx(h,{bold:!0,children:t},m))})}),e.jsx(b,{children:p.length!==0?p.map((t,m)=>e.jsxs(o,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(o,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}},we=["TableFiltering"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Filtrering av data",
  args: {
    fullWidth: true,
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>,
    children: ""
  },
  render: args => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [filteredRows, setFilteredRows] = useState(faktura.rows);
    useEffect(() => {
      setFilteredRows(faktura.rows.filter(row => row.toString().toLowerCase().includes(search.toLowerCase())).filter(row => row[3].toString().toLowerCase().includes(status.toLowerCase())));
    }, [search, status]);
    return <div style={{
      width: "90dvw"
    }}>
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
                <Table {...args}>
                    <TableHead sticky={true}>
                        <TableRow>
                            {faktura.columns.slice(0).map((column, index) => <TableHeader key={index} bold>
                                    {column}
                                </TableHeader>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.length !== 0 ? filteredRows.map((row, rowIndex) => <TableRow key={rowIndex}>
                                    <TableCell>
                                        <Link download={\`\${row[3]} \${new Date(row[0] as Date).toLocaleDateString()}\`} href={"#"}>
                                            {new Date(row[0] as Date).toLocaleDateString()}
                                        </Link>
                                    </TableCell>
                                    {row.slice(1).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={faktura.columns[cellIndex]}>
                                            {cell.toLocaleString()}
                                        </TableCell>)}
                                </TableRow>) : <TableRow>
                                <TableCell colSpan={99}>
                                    Fant ingen fakturaer.
                                </TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </div>;
  }
}`,...n.parameters?.docs?.source}}};export{n as TableFiltering,we as __namedExportsOrder,ue as default};
