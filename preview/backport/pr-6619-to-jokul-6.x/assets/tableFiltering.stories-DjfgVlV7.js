import{r as a,j as e}from"./iframe-DVdARoXG.js";import{a as w,T as f}from"./TableCaption-SPyGOuoW.js";import{T as b}from"./TableBody-D8_5Nyoj.js";import{a as l,b as s}from"./TableRow-Bqg2zKF1.js";import{a as h,T as x}from"./TableHeader-BpeGtOpO.js";import{f as r}from"./_index-DcsdE9qR.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-B4vHF5tR.js";import{S as C}from"./Select-B2YbzmGT.js";import{B as j}from"./Button-enJqUy6U.js";import{L as v}from"./Link-aIxsMkbc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tableContext-D5Z7-T0N.js";import"./ChevronUpIcon-_LmF028u.js";import"./Icon-Sy3tFS9h.js";import"./InputGroup-DY3UIxQx.js";import"./useId-dfs2t7lU.js";import"./Label-Cr8FRJ8N.js";import"./SupportLabel-CTIdXkD-.js";import"./SuccessIcon-DliUF6gI.js";import"./WarningIcon-DRDdMsBw.js";import"./BaseTextInput-CRXiUOAd.js";import"./IconButton-DXS7LeND.js";import"./mergeRefs-_7lZvp9j.js";import"./Flex-CCpu7a-R.js";import"./SlotComponent-DSj0NG2p.js";import"./Search-BzS4NGkm.js";import"./Text-B7B4Ka2d.js";import"./Title-D6bMJx7P.js";import"./useListNavigation-D61GtGgk.js";import"./ArrowDownIcon-D5IyxZoL.js";import"./CloseIcon-Dqr50sJU.js";import"./usePreviousValue-BuVZ3InM.js";import"./Loader-DCjCro3l.js";import"./useDelayedRender-Be5Dfv3o.js";const pe={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:x,TableHeader:h,TableBody:b,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[o,c]=a.useState(""),[i,d]=a.useState(""),[p,g]=a.useState(r.rows);return a.useEffect(()=>{g(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...T,children:[e.jsx(x,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,m)=>e.jsx(h,{bold:!0,children:t},m))})}),e.jsx(b,{children:p.length!==0?p.map((t,m)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}},ue=["TableFiltering"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{n as TableFiltering,ue as __namedExportsOrder,pe as default};
