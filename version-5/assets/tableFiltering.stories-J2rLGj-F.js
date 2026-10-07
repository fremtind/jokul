import{r as a,j as e}from"./iframe-CZL5QpJP.js";import{b as w,a as b,c as f,T as h}from"./TableHeader-Ci1GzV93.js";import{T}from"./TableBody-C4LC6Reh.js";import{T as l,a as s}from"./TableRow-tj989KOf.js";import{f as r}from"./_index-Bb02qKwR.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{T as k}from"./TextInput-NGS853gp.js";import{S as C}from"./Select-Cl6vHFqe.js";import{B as j}from"./Button-CjOz-OeH.js";import{L as v}from"./Link-6c40IWVO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-DT_v4eM3.js";import"./Icon-_0Rb8KBj.js";import"./ChevronUpIcon-BjZIm9Gj.js";import"./InputGroup-C2tcvYSg.js";import"./useId-5rI8IeJH.js";import"./Label-C_Ac9ykU.js";import"./SupportLabel-4N9g7WJl.js";import"./SuccessIcon-Lm25257a.js";import"./WarningIcon-DMQH1fMw.js";import"./BaseTextInput-CqCSfLCP.js";import"./IconButton-CghyH2MI.js";import"./useListNavigation-C4NL44OL.js";import"./usePreviousValue-BiI-VvQ8.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B6aWV6ms.js";import"./ArrowDownIcon-BUuGjzBf.js";import"./Popover-Cx6xwHH1.js";import"./floating-ui.react-CRCqFFVD.js";import"./index-BOa-7S-L.js";import"./index-BjCjFizO.js";import"./getThemeAndSize-CZAj3IXt.js";import"./Loader-Co7O7Ovp.js";import"./useDelayedRender-Cyink7Ym.js";const de={title:"Komponenter/Table",component:h,subcomponents:{TableCaption:f,TableHead:b,TableHeader:w,TableBody:T,TableRow:s,TableCell:l}},n={name:"Filtrering av data",args:{fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:g=>{const[o,m]=a.useState(""),[i,d]=a.useState(""),[p,x]=a.useState(r.rows);return a.useEffect(()=>{x(r.rows.filter(t=>t.toString().toLowerCase().includes(o.toLowerCase())).filter(t=>t[3].toString().toLowerCase().includes(i.toLowerCase())))},[o,i]),e.jsxs("div",{style:{width:"90dvw"},children:[e.jsxs("aside",{style:{display:"flex",gap:"24px",alignItems:"end",marginBlockEnd:"24px"},children:[e.jsx(k,{label:"Søk",value:o,placeholder:"Søk",onChange:t=>m(t.target.value)}),e.jsx(C,{items:[{label:"Alle statuser",value:""},"Faktura","Påminnelse","Inkasso"],label:"Status",name:"status",value:i,onChange:t=>d(t.target.value)}),e.jsx(j,{onClick:()=>{m(""),d("")},children:"Fjern filter"})]}),e.jsxs(h,{...g,children:[e.jsx(b,{sticky:!0,children:e.jsx(s,{children:r.columns.slice(0).map((t,c)=>e.jsx(w,{bold:!0,children:t},c))})}),e.jsx(T,{children:p.length!==0?p.map((t,c)=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(v,{download:`${t[3]} ${new Date(t[0]).toLocaleDateString()}`,href:"#",children:new Date(t[0]).toLocaleDateString()})}),t.slice(1).map((S,u)=>e.jsx(l,{"data-th":r.columns[u],children:S.toLocaleString()},u))]},c)):e.jsx(s,{children:e.jsx(l,{colSpan:99,children:"Fant ingen fakturaer."})})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
