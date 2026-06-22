import{r as a,j as e}from"./iframe-DECrqAgD.js";import{f as r}from"./_index-BJ0aGPsr.js";import{b as w,a as b,c as f,T as h}from"./TableHeader-DDU8Op7C.js";import{T}from"./TableBody-BJxx2MK2.js";import{T as l,a as s}from"./TableRow-cCCE_zGv.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-CP5-pyZE.js";import{S as C}from"./Select-kyjVBzS1.js";import{B as j}from"./Button-BE-hsX-8.js";import{L as v}from"./Link-DJ3LwZFn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-DlA8aFBy.js";import"./Icon-BCQk59Ds.js";import"./ChevronUpIcon-BPYOnww0.js";import"./InputGroup-BqVYUs1H.js";import"./useId-v0YU8Q5R.js";import"./Label-CxnBLO9q.js";import"./SupportLabel-CBt7kgVR.js";import"./SuccessIcon-Bzqc9ZZ6.js";import"./WarningIcon-BE_0lku-.js";import"./BaseTextInput-H7xhb6XU.js";import"./IconButton-DDtOjNs1.js";import"./useListNavigation-BRqaa6vd.js";import"./usePreviousValue-DBKqodMP.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BdiFHU42.js";import"./ArrowDownIcon-CkDMAbZE.js";import"./Popover-Ds3GzlZE.js";import"./floating-ui.react-CqkPVN51.js";import"./index-CLz_m0RF.js";import"./index-DXcnNiQP.js";import"./getThemeAndSize-CZAj3IXt.js";import"./Loader-wlf3OyO3.js";import"./useDelayedRender-Cc7pmPzg.js";const de={title:"Komponenter/Table",component:h,subcomponents:{TableCaption:f,TableHead:b,TableHeader:w,TableBody:T,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,m]=a.useState(""),[i,d]=a.useState(""),[p,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>m(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{m(""),d("")},children:"Fjern filter"})]}),e.jsxs(h,{...g,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(T,{children:p.length!==0?p.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pe=["TableFiltering"];export{n as TableFiltering,pe as __namedExportsOrder,de as default};
