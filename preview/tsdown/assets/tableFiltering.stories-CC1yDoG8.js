import{j as e,r as a}from"./iframe-BOohXgvX.js";import{a as l,b as s,c as w,d as b,e as h,f,g as r}from"./_index-B_T_ADX1.js";import{T as g}from"./TableBody-CT894US-.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-4zx-PS85.js";import{S as C}from"./Select-Csq9n1LC.js";import{B as j}from"./Button-D9wAF1Cp.js";import{L}from"./Link-CsHyFmud.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-ggSrs6az.js";import"./Icon-BSYjkIWE.js";import"./ChevronUpIcon-bdH4mLwN.js";import"./InputGroup-CTXveJ6b.js";import"./useId-DR-y4Sju.js";import"./Label-CiFrHv3-.js";import"./SupportLabel-ZJXmljTN.js";import"./WarningIcon-Bn9SfBzt.js";import"./BaseTextInput-_-Wp_3XH.js";import"./IconButton-tINOWNzC.js";import"./useAnimatedHeight-CvqgED24.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-24j3Hqre.js";import"./usePreviousValue-DAsMqggU.js";import"./useListNavigation-CEuJ9GVS.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BZHm1jiJ.js";import"./ArrowDownIcon-B3f1bVcn.js";import"./Loader-BzMpzjug.js";import"./useDelayedRender-zrAXdy8h.js";const se={title:"Komponenter/Table",component:f,subcomponents:{TableCaption:h,TableHead:b,TableHeader:w,TableBody:g,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(h,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:T=>{const[o,d]=a.useState(""),[i,m]=a.useState(""),[u,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>d(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>m(t.target.value)}),e.jsx(j,{onClick:()=>{d(""),m("")},children:"Fjern filter"})]}),e.jsxs(f,{...T,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(g,{children:u.length!==0?u.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(L,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,p)=>e.jsx(l,{"data-th":r.columns[p],children:S.toLocaleString()},p))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
