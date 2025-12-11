import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as a}from"./index-Bv6P490N.js";import{T as s,a as l,b as w,c as b,d as h,e as f,f as g,g as r}from"./_index-B1DctrOV.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-CuQXZqTY.js";import{S as C}from"./Select-Ck0QnSi0.js";import{B as j}from"./Button-7xZWz2K4.js";import{L}from"./Link-C9ugz-5z.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./ArrowVerticalAnimated-DxukZOje.js";import"./ArrowDownIcon-CDuWY9sD.js";import"./Icon-DYEEOjBa.js";import"./InputGroup-Cl7hE9X0.js";import"./useId-B1yQ3ow-.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./BaseTextInput-BSs526x8.js";import"./IconButton-9XUYZjY_.js";import"./useAnimatedHeight-x0eECUB-.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./usePreviousValue-CFxVqUaX.js";import"./useListNavigation-BF5Y0bzc.js";import"./valuePair-Bn6SadUn.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";const ne={title:"Komponenter/Table",component:g,subcomponents:{TableCaption:f,TableHead:h,TableHeader:b,TableBody:w,TableRow:l,TableCell:s},parameters:{layout:"centered"},tags:["autodocs"]},n={name:"Filtrering av data",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[o,d]=a.useState(""),[i,u]=a.useState(""),[m,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>d(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>u(t.target.value)}),e.jsx(j,{onClick:()=>{d(""),u("")},children:"Fjern filter"})]}),e.jsxs(g,{...T,children:[e.jsx(h,{sticky:!0,children:e.jsx(l,{children:r.columns.slice(0).map((t,c)=>e.jsx(b,{bold:!0,children:t},c))})}),e.jsx(w,{children:m.length!==0?m.map((t,c)=>e.jsxs(l,{children:[e.jsx(s,{children:e.jsx(L,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,p)=>e.jsx(s,{"data-th":r.columns[p],children:S.toLocaleString()},p))]},c)):e.jsx(l,{children:e.jsx(s,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const se=["TableFiltering"];export{n as TableFiltering,se as __namedExportsOrder,ne as default};
