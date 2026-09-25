import{r as a,j as e}from"./iframe-tF_CnVKD.js";import{a as w,T as f}from"./TableCaption-DwmIJThR.js";import{T as b}from"./TableBody-DD0ubUvp.js";import{a as l,b as s}from"./TableRow-BIYP2vWG.js";import{a as h,T}from"./TableHeader-OsUNNycJ.js";import{f as r}from"./_index-C1e446Mu.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-DCtTGHkm.js";import{S as C}from"./Select-BDH0Qj1C.js";import{B as j}from"./Button-DcQI9tPz.js";import{L as v}from"./Link-DOoZuDz8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tableContext-ZmUdOhnO.js";import"./ChevronUpIcon-C17xU2Pl.js";import"./Icon-DoM_Brou.js";import"./InputGroup-CX4F5p-_.js";import"./useId-CIFzEpsK.js";import"./Label-BepanNqi.js";import"./SupportLabel-BDHOOh0H.js";import"./SuccessIcon-Cp4HEYx5.js";import"./WarningIcon-DHDBZGUq.js";import"./BaseTextInput-2LGtGmoP.js";import"./IconButton-57H2Nqu2.js";import"./mergeRefs-tBIqzsLa.js";import"./Flex-WY5wPI5J.js";import"./SlotComponent-DjFSykP9.js";import"./Search-BQ6g557_.js";import"./Text-LPr1l4I6.js";import"./Title-C1E2_ho1.js";import"./useListNavigation-CMIoz3LX.js";import"./ArrowDownIcon-2jl8YBvH.js";import"./CloseIcon-B58wl-yy.js";import"./usePreviousValue-BSNs7mtE.js";import"./Loader-CK4QW_c6.js";import"./useDelayedRender-CR5b2a_S.js";const pe={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:T,TableHeader:h,TableBody:b,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,c]=a.useState(""),[i,d]=a.useState(""),[p,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...g,children:[e.jsx(T,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,m)=>e.jsx(h,{bold:!0,children:t},m))})}),e.jsx(b,{children:p.length!==0?p.map((t,m)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ue=["TableFiltering"];export{n as TableFiltering,ue as __namedExportsOrder,pe as default};
