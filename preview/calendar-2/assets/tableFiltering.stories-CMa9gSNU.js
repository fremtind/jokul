import{r as a,j as e}from"./iframe-DOBCU8kQ.js";import{f as r}from"./_index-Bb02qKwR.js";import{a as w,T as f}from"./TableCaption-Dh68ie9w.js";import{T as b}from"./TableBody-DpBG9aYB.js";import{a as l,b as s}from"./TableRow-Cp_N_QU2.js";import{a as h,T}from"./TableHeader-D4aoxv62.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-Zy2TDOrA.js";import{S as C}from"./Select-BuEiTgIR.js";import{B as j}from"./Button-ZR3eazAQ.js";import{L as v}from"./Link-jYU7wD1V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tableContext-SMUDCLPK.js";import"./ChevronUpIcon-DXwD3R0w.js";import"./Icon-DS9DME7z.js";import"./InputGroup-tqLjQXwH.js";import"./useId-CXB3Zr3G.js";import"./Label-C3z8vwrB.js";import"./SupportLabel-BBSXTZoR.js";import"./SuccessIcon-BKieQBzw.js";import"./WarningIcon-7n3zjhXd.js";import"./BaseTextInput-DXh78MW0.js";import"./IconButton-D0bfE_l9.js";import"./useListNavigation-C32rzu3h.js";import"./usePreviousValue-BEEbzweb.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Ca8_--qW.js";import"./ArrowDownIcon-C_H-GYYL.js";import"./Popover-CQcQ2DCv.js";import"./floating-ui.react-BXZkKMmq.js";import"./index-FgHkUaDw.js";import"./index-Cgonjl8d.js";import"./getThemeAndSize-CZAj3IXt.js";import"./Loader-D9rgRTKi.js";import"./useDelayedRender-DnM1z0OC.js";const pe={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:w,TableHead:T,TableHeader:h,TableBody:b,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(w,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,c]=a.useState(""),[i,d]=a.useState(""),[p,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>c(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{c(""),d("")},children:"Fjern filter"})]}),e.jsxs(f,{...g,children:[e.jsx(T,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,m)=>e.jsx(h,{bold:!0,children:t},m))})}),e.jsx(b,{children:p.length!==0?p.map((t,m)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},m)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
