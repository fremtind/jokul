import{j as e,r as a}from"./iframe-DvP7N9Q0.js";import{a as l,b as s,c as w,d as b,e as h,f,g as r}from"./_index-C4Rw65e2.js";import{T as g}from"./TableBody-ZTVTGCp5.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-9PSJowd9.js";import{S as C}from"./Select-BxlDuVUA.js";import{B as j}from"./Button-BvvDw6Vv.js";import{L}from"./Link-BdMhKLm3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-NGnW7vG8.js";import"./Icon-B4XeI8eR.js";import"./ChevronUpIcon-C6A7DEA4.js";import"./InputGroup-DJNrIhqf.js";import"./useId-lHt1Depp.js";import"./Label-3F0NI7P9.js";import"./SupportLabel-CorrWaHo.js";import"./WarningIcon-D6ZoqZ14.js";import"./BaseTextInput-EKt4MbxI.js";import"./IconButton-DVl4o37Y.js";import"./useAnimatedHeight-564YsWxt.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-kg80OnC7.js";import"./usePreviousValue-NtKQN5ul.js";import"./useListNavigation-CoVOxghJ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-mm9W3Zf0.js";import"./ArrowDownIcon-aDOlVBlC.js";import"./Loader-L57BNNpo.js";import"./useDelayedRender-Bj1oSTVz.js";const se={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:h,TableHead:b,TableHeader:w,TableBody:g,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(h,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[o,d]=a.useState(""),[i,m]=a.useState(""),[u,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>d(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>m(t.target.value)}),e.jsx(j,{onClick:()=>{d(""),m("")},children:"Fjern filter"})]}),e.jsxs(f,{...T,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(g,{children:u.length!==0?u.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(L,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,p)=>e.jsx(l,{"data-th":r.columns[p],children:S.toLocaleString()},p))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const oe=["TableFiltering"];export{n as TableFiltering,oe as __namedExportsOrder,se as default};
