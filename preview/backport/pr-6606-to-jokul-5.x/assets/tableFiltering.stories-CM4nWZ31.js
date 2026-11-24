import{r as a,j as e}from"./iframe-DP8Xf_qW.js";import{b as w,a as b,c as f,T as h}from"./TableHeader-F05hElM3.js";import{T as x}from"./TableBody-CTxp0xIN.js";import{T as l,a as s}from"./TableRow-DsySdbEa.js";import{f as r}from"./_index-Dc1LJiGL.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-ChSnwcFr.js";import{S as C}from"./Select-B2g6ep8A.js";import{B as j}from"./Button-6hsN6QCv.js";import{L as v}from"./Link-B2QsPhVC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./ChevronDownIcon-DEemnFk9.js";import"./Icon-k8xo1fZn.js";import"./ChevronUpIcon-DfbXVBEU.js";import"./InputGroup-RhmGcLKT.js";import"./useId-DCOUoPrx.js";import"./Label-DF5EMnl-.js";import"./SupportLabel-BKFe5kWx.js";import"./SuccessIcon-CbZ15OhW.js";import"./WarningIcon-1AHRTzaM.js";import"./BaseTextInput-BiMYAzfk.js";import"./IconButton-DAuzWytR.js";import"./useListNavigation-Ca2AAO1z.js";import"./usePreviousValue-DKNtJSDr.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BFcFvqIz.js";import"./ArrowDownIcon-Dnm97vJR.js";import"./Popover-B-yFmBvS.js";import"./floating-ui.react-BAKwdp29.js";import"./index-DdGUQhhW.js";import"./index-B4dBWWjW.js";import"./getThemeAndSize-CZAj3IXt.js";import"./Loader-BxavIFyp.js";import"./useDelayedRender-DoXz-Ftb.js";const pe={title:"Komponenter/Table",component:h,subcomponents:{TableCaption:f,TableHead:b,TableHeader:w,TableBody:x,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[o,m]=a.useState(""),[i,d]=a.useState(""),[p,g]=a.useState(r.rows);return a.useEffect(()=>{g(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>m(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{m(""),d("")},children:"Fjern filter"})]}),e.jsxs(h,{...T,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(x,{children:p.length!==0?p.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}},ue=["TableFiltering"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
