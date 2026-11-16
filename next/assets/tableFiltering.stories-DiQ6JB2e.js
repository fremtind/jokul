import{r as a,j as e}from"./iframe-CvW20-Vt.js";import{a as w,T as f}from"./TableCaption-VS4wtizA.js";import{T as b}from"./TableBody-BFtCiFYV.js";import{a as l,b as o}from"./TableRow-BWLi1L1U.js";import{a as h,T as x}from"./TableHeader-DOrIdG-r.js";import{f as r}from"./_index-DcsdE9qR.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-BuLkbZIw.js";import{S as C}from"./Select-B22l6Fs0.js";import{B as j}from"./Button-2Ed_42L1.js";import{L as v}from"./Link-DPvQpYW_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./tableContext-hbl5u-YK.js";import"./ChevronUpIcon-BIKRY589.js";import"./Icon-CJv7wQ8F.js";import"./InputGroup-D4LFzO0H.js";import"./useId-CwmMFnP7.js";import"./Label-BI0lbtUO.js";import"./SupportLabel-BYXNe-qj.js";import"./SuccessIcon-m2Nxh-uT.js";import"./WarningIcon-nx1-_aaD.js";import"./BaseTextInput-DgfKl0M4.js";import"./IconButton-BTtdR28o.js";import"./mergeRefs-_7lZvp9j.js";import"./Flex-LOJ1Je6d.js";import"./SlotComponent-CrgTxekP.js";import"./Search-BMb8dBhj.js";import"./Text-MfXSeNNn.js";import"./Title-b4PeJ5IQ.js";import"./useListNavigation-BgFUDhnZ.js";import"./ArrowDownIcon-4pw9VxK-.js";import"./CloseIcon-Cc-87Pq8.js";import"./usePreviousValue-BMONNKi2.js";import"./Loader-B25bEzZY.js";import"./useDelayedRender-BngMEFUo.js";const ue={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:x,TableHeader:h,TableBody:b,TableRow:o,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[s,c]=a.useState(""),[i,d]=a.useState(""),[p,g]=a.useState(r.rows);return a.useEffect(()=>{g(r.rows.filter(t=>t.toString().toLowerCase().includes(s.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[s,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:s,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...T,children:[e.jsx(x,{sticky:!0,children:e.jsx(o,{children:r.columns.slice(0).map((t,m)=>e.jsx(h,{bold:!0,children:t},m))})}),e.jsx(b,{children:p.length!==0?p.map((t,m)=>e.jsxs(o,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(o,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}},we=["TableFiltering"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
