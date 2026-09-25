import{r as a,j as e}from"./iframe-BBQ_8FxR.js";import{a as w,T as f}from"./TableCaption-CwJlM559.js";import{T as b}from"./TableBody-C_UdtM-H.js";import{a as l,b as s}from"./TableRow-Bl1PYE56.js";import{a as h,T}from"./TableHeader-C-sjNpL1.js";import{f as r}from"./_index-C1e446Mu.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-CUw_Acab.js";import{S as C}from"./Select-DN1LHKlL.js";import{B as j}from"./Button-CycWb-4D.js";import{L as v}from"./Link-DtmNkIxi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tableContext-BBd3-xMg.js";import"./ChevronUpIcon-DrOEKaZn.js";import"./Icon-PfIlFl4q.js";import"./InputGroup-Dz0izBUm.js";import"./useId-DIXol0A3.js";import"./Label-9hYeBLUz.js";import"./SupportLabel-BUdnrLLA.js";import"./SuccessIcon-Ca5m4NCE.js";import"./WarningIcon-C5fVS7Qy.js";import"./BaseTextInput-Xt2nPqTi.js";import"./IconButton-BhQEeWPU.js";import"./mergeRefs-CJYIewL-.js";import"./Flex-C--ZzOFS.js";import"./SlotComponent-Bbh2VytA.js";import"./Search-eq-v_r0Q.js";import"./Text-D7Yv_EgN.js";import"./Title-CmyvkLL6.js";import"./useListNavigation-DWe3dB4v.js";import"./ArrowDownIcon-BVFM2znk.js";import"./CloseIcon-BwY83nmp.js";import"./usePreviousValue-DqFrnf_p.js";import"./Loader-DPjWdjdn.js";import"./useDelayedRender-D9lBpN70.js";const pe={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:T,TableHeader:h,TableBody:b,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,c]=a.useState(""),[i,d]=a.useState(""),[p,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...g,children:[e.jsx(T,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,m)=>e.jsx(h,{bold:!0,children:t},m))})}),e.jsx(b,{children:p.length!==0?p.map((t,m)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
