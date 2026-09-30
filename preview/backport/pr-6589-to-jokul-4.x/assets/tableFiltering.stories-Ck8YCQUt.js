import{r as a,j as e}from"./iframe-BAeiJg2I.js";import{f as r}from"./_index-DcNxBp11.js";import{b as w,a as b,c as f,T as h}from"./TableHeader-BWcGFEqo.js";import{T}from"./TableBody-BNvjRbB7.js";import{T as l,a as s}from"./TableRow-o9aVzanE.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-Csk8wz1B.js";import{S as C}from"./Select-CJNRoF0v.js";import{B as j}from"./Button-BthLL355.js";import{L as v}from"./Link-COBLBPXC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-C6ID1Zhs.js";import"./Icon-B-u3l2Nb.js";import"./ChevronUpIcon-QgIcs_XT.js";import"./InputGroup-C71EZZn1.js";import"./useId-DnAYrqQB.js";import"./Label-CNmy_e27.js";import"./SupportLabel-Dcw46ClR.js";import"./WarningIcon-DF51wsE7.js";import"./BaseTextInput-CoWt8KCw.js";import"./IconButton-C6AO0n9r.js";import"./useListNavigation-DWkYdnTK.js";import"./usePreviousValue-DlMBWeDi.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BooEGtDd.js";import"./ArrowDownIcon-CZ8qK1g-.js";import"./Popover-Ckt0FVrN.js";import"./floating-ui.react-D07-dUOF.js";import"./index-CKeyHE-k.js";import"./index-CsAHOwmm.js";import"./getThemeAndSize-CIzqY74s.js";import"./Loader-BqT2LBs8.js";import"./useDelayedRender-BCYkMD0x.js";const me={title:"Komponenter/Table",component:h,subcomponents:{TableCaption:f,TableHead:b,TableHeader:w,TableBody:T,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,m]=a.useState(""),[i,d]=a.useState(""),[p,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>m(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{m(""),d("")},children:"Fjern filter"})]}),e.jsxs(h,{...g,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(T,{children:p.length!==0?p.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const de=["TableFiltering"];export{n as TableFiltering,de as __namedExportsOrder,me as default};
