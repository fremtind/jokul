import{j as e,r as a}from"./iframe-Bc_2fOra.js";import{f as r}from"./_index-CDQRe8ON.js";import{b as w,a as b,c as f,T as h}from"./TableHeader-CUm3krwf.js";import{T}from"./TableBody-g2RAM7SD.js";import{a as l,T as s}from"./TableRow-DHEIjJjR.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-RjqM8Hp7.js";import{S as C}from"./Select-IbbiEZL8.js";import{B as j}from"./Button-CjE-86cb.js";import{L as v}from"./Link-CctjvPjC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-rYb2-Pv7.js";import"./Icon-BfQNpJPf.js";import"./ChevronUpIcon-CTkYyACi.js";import"./InputGroup-wQ2OzNi-.js";import"./useId-DkrM6KkE.js";import"./Label-DHmT-EGC.js";import"./SupportLabel-BkkmX9RI.js";import"./WarningIcon-B_wtQUVN.js";import"./BaseTextInput-Dh6i3t1z.js";import"./IconButton-BT9U1NjP.js";import"./useAnimatedHeight-DdppmrMA.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cr6kqVbz.js";import"./usePreviousValue-cjkDEB_c.js";import"./useListNavigation-C7ggvMvC.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Xs0Yc38y.js";import"./ArrowDownIcon-QIWl_ZEL.js";import"./Loader-C8fFRZrf.js";import"./useDelayedRender-DGWrp5fq.js";const ie={title:"Komponenter/Table",component:h,subcomponents:{TableCaption:f,TableHead:b,TableHeader:w,TableBody:T,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,d]=a.useState(""),[i,m]=a.useState(""),[u,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>d(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>m(t.target.value)}),e.jsx(j,{onClick:()=>{d(""),m("")},children:"Fjern filter"})]}),e.jsxs(h,{...g,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(T,{children:u.length!==0?u.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,p)=>e.jsx(l,{"data-th":r.columns[p],children:S.toLocaleString()},p))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ce=["TableFiltering"];export{n as TableFiltering,ce as __namedExportsOrder,ie as default};
