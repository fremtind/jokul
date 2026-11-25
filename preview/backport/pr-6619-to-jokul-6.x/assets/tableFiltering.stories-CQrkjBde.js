import{r as a,j as e}from"./iframe-BJSFL0jY.js";import{a as w,T as f}from"./TableCaption-B1rHecsG.js";import{T as b}from"./TableBody-D3Bwtmhm.js";import{a as l,b as o}from"./TableRow-mVwYWj_q.js";import{a as h,T as x}from"./TableHeader-2Qsg9lWi.js";import{f as r}from"./_index-DcsdE9qR.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-D9jLRecE.js";import{S as C}from"./Select-2wO71VIi.js";import{B as j}from"./Button-Dx_wOcOG.js";import{L as v}from"./Link-HvO4H6Hm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./tableContext-CG5tc_ZK.js";import"./ChevronUpIcon-CBC5m4pP.js";import"./Icon-Bfw_sYj4.js";import"./InputGroup-CNaIIao_.js";import"./useId-DFTQ_vHR.js";import"./Label-8jXvBe7O.js";import"./SupportLabel-CS6FSlss.js";import"./SuccessIcon-DislpJYr.js";import"./WarningIcon-CJfPAawV.js";import"./BaseTextInput-DKb1237K.js";import"./IconButton-BtkrNk7l.js";import"./mergeRefs-_7lZvp9j.js";import"./Flex-FsTqQS53.js";import"./SlotComponent-DVZ8YOBY.js";import"./Search-C-PpQyMh.js";import"./Text-C9xIYtUL.js";import"./Title-BNl8fUJj.js";import"./useListNavigation-D9a1Tuyb.js";import"./ArrowDownIcon-CQ9WN12V.js";import"./CloseIcon-Bw7dZiB1.js";import"./usePreviousValue-CKAvO2KC.js";import"./Loader-Bgw7Y4-5.js";import"./useDelayedRender-Dnvb8rsa.js";const ue={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:x,TableHeader:h,TableBody:b,TableRow:o,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[s,c]=a.useState(""),[i,d]=a.useState(""),[p,g]=a.useState(r.rows);return a.useEffect(()=>{g(r.rows.filter(t=>t.toString().toLowerCase().includes(s.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[s,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:s,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...T,children:[e.jsx(x,{sticky:!0,children:e.jsx(o,{children:r.columns.slice(0).map((t,m)=>e.jsx(h,{bold:!0,children:t},m))})}),e.jsx(b,{children:p.length!==0?p.map((t,m)=>e.jsxs(o,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(o,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}},we=["TableFiltering"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
