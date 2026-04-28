import{j as e,r as a}from"./iframe-CE_CeO1a.js";import{f as r}from"./_index-CnzwcL58.js";import{b as w,a as b,c as f,T as h}from"./TableHeader-BqWf-vb_.js";import{T}from"./TableBody-Dirm3MqY.js";import{a as l,T as s}from"./TableRow-C7N2yeI5.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-B7y351Y8.js";import{S as C}from"./Select-D_0JuA9y.js";import{B as j}from"./Button-KbNd0P05.js";import{L as v}from"./Link-DuT9AQHq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-DozZw3Le.js";import"./Icon-DOtbuS8d.js";import"./ChevronUpIcon-BtVU_KUJ.js";import"./InputGroup-DDO6Bx6z.js";import"./useId-Cqh8mgXr.js";import"./Label-BKLaQ6DR.js";import"./SupportLabel-DRiEYc6Y.js";import"./WarningIcon-TtnFG471.js";import"./BaseTextInput-M9zGMVgy.js";import"./IconButton-Bi89ehcJ.js";import"./useAnimatedHeight-BLqwHY0F.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CMXk-lLI.js";import"./usePreviousValue-BWnC6nSN.js";import"./useListNavigation-BrGjtZxU.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B-QroKvY.js";import"./ArrowDownIcon-CqCCYzrr.js";import"./Loader-QMfH895d.js";import"./useDelayedRender-ByKockPP.js";const ie={title:"Komponenter/Table",component:h,subcomponents:{TableCaption:f,TableHead:b,TableHeader:w,TableBody:T,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,d]=a.useState(""),[i,m]=a.useState(""),[u,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>d(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>m(t.target.value)}),e.jsx(j,{onClick:()=>{d(""),m("")},children:"Fjern filter"})]}),e.jsxs(h,{...g,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(T,{children:u.length!==0?u.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,p)=>e.jsx(l,{"data-th":r.columns[p],children:S.toLocaleString()},p))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
