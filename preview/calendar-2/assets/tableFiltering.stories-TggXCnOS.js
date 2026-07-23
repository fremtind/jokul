import{r as a,j as e}from"./iframe-_FbqnM0t.js";import{f as r}from"./_index-BJ0aGPsr.js";import{a as w,T as f}from"./TableCaption-CXIPIQuv.js";import{T as h}from"./TableBody-Bcvo3vpM.js";import{T as l,a as s}from"./TableRow-CANZNRf-.js";import{a as b,T}from"./TableHeader-Dn3I7H8R.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-zJf9ody6.js";import{S as C}from"./Select-D9cjvfEH.js";import{B as j}from"./Button-BG_iH0eJ.js";import{L as v}from"./Link-BY9F4kG0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tableContext-CFUcUP-V.js";import"./ChevronUpIcon-xpZRcDJa.js";import"./Icon-DQEQLOwb.js";import"./InputGroup-CH2jbWG8.js";import"./useId-BazUWtdC.js";import"./Label-DvCKCHCr.js";import"./SupportLabel-B3pYR1lf.js";import"./SuccessIcon-BV3Ybpgs.js";import"./WarningIcon-DzHBKJ9H.js";import"./BaseTextInput-DeXYHA72.js";import"./IconButton-DNQCSCVd.js";import"./useListNavigation-kUjsHpPy.js";import"./usePreviousValue-DQsDZLi6.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-JmnsMlZB.js";import"./ArrowDownIcon-BHVujfqP.js";import"./Popover-BGgYaWL_.js";import"./floating-ui.react-DfbOp9P6.js";import"./index-DpT02NdU.js";import"./index-CRaJJ5Q-.js";import"./getThemeAndSize-CZAj3IXt.js";import"./Loader-dntcr9VU.js";import"./useDelayedRender-DXEUWubj.js";const pe={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:T,TableHeader:b,TableBody:h,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,c]=a.useState(""),[i,d]=a.useState(""),[p,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...g,children:[e.jsx(T,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,m)=>e.jsx(b,{bold:!0,children:t},m))})}),e.jsx(h,{children:p.length!==0?p.map((t,m)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
