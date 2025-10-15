import{R as e,r as a}from"./index-siqcju79.js";import{T as l,a as o,b as w,c as b,d as f,e as g,f as T,g as n}from"./_index-CUz054PZ.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as C}from"./TextInput-ziLWZWeG.js";import{S as E}from"./Select-9wG0ycvO.js";import{B as y}from"./Button-Bm5jRD6q.js";import{L}from"./Link-Dwdm3rDB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./ArrowVerticalAnimated-BAkArw06.js";import"./ArrowUpIcon-CFNLzgG_.js";import"./Icon-mINJCSxV.js";import"./InputGroup-BJwbXp8L.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseTextInput-BcWqlF22.js";import"./IconButton-BsqD9nTf.js";import"./useAnimatedHeight-B4AinHXK.js";import"./tokens-CvksrKef.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./useListNavigation-Bf1PKTdz.js";import"./valuePair-Bn6SadUn.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const re={title:"Komponenter/Table",component:T,subcomponents:{TableCaption:g,TableHead:f,TableHeader:b,TableBody:w,TableRow:o,TableCell:l},parameters:{layout:"centered"},tags:["autodocs"]},r={name:"Filtrering av data",args:{collapseToList:!0,fullWidth:!0,caption:e.createElement(g,{srOnly:!0},"Overskrift for skjermlesere"),children:""},render:S=>{const[s,m]=a.useState(""),[i,u]=a.useState(""),[p,k]=a.useState(n.rows);return a.useEffect(()=>{k(n.rows.filter(t=>t.toString().toLowerCase().includes(s.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[s,i]),e.createElement("div",{style:{width:"90dvw"}},e.createElement("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"}},e.createElement(C,{label:"Søk",value:s,placeholder:"Søk",onChange:t=>m(t.target.value)}),e.createElement(E,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>u(t.target.value)}),e.createElement(y,{onClick:()=>{m(""),u("")}},"Fjern filter")),e.createElement(T,{...S},e.createElement(f,{sticky:!0},e.createElement(o,null,n.columns.slice(0).map((t,c)=>e.createElement(b,{key:c,bold:!0},t)))),e.createElement(w,null,p.length!==0?p.map((t,c)=>e.createElement(o,{key:c},e.createElement(l,null,e.createElement(L,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#"},new Date(t[0]).toLocaleDateString())),t.slice(1).map((h,d)=>e.createElement(l,{key:d,"data-th":n.columns[d]},h.toLocaleString())))):e.createElement(o,null,e.createElement(l,{colSpan:99},"Fant ingen fakturaer.")))))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Filtrering av data",
  args: {
    collapseToList: true,
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
}`,...r.parameters?.docs?.source}}};const le=["TableFiltering"];export{r as TableFiltering,le as __namedExportsOrder,re as default};
