import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as k}from"./index-Bv6P490N.js";import{T,a as c,b as h,c as f,d as x,e as y,f as g,s as b,g as p}from"./_index-C2Qs2LB-.js";import{c as j}from"./paginated-table-data-ZMeh4d0Y.js";import{u as B}from"./utils-DYxs2h-a.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-ulgFH_bH.js";import"./Icon-DYEEOjBa.js";import"./ChevronUpIcon-CAkXFTAT.js";const K={title:"Komponenter/Table",component:g,subcomponents:{TableCaption:y,TableHead:x,TableHeader:f,TableBody:h,TableRow:c,TableCell:T},parameters:{layout:"centered"},tags:["autodocs","tabular data"]},d={name:"Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(y,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:u=>e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(g,{...u,children:[e.jsx(x,{sticky:!0,children:e.jsx(c,{children:b.columns.map((a,o)=>e.jsx(f,{bold:!0,children:a},o))})}),e.jsx(h,{children:b.rows.map((a,o)=>e.jsx(c,{children:a.map((l,i)=>e.jsx(T,{"data-th":b.columns[i],align:[1,2].includes(i)?"right":"left",children:l},i))},o))})]})})},m={name:"useSortableTableHeader",args:{caption:e.jsx(y,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:u=>{const[a,o]=k.useState(p.columns[0]),[l,i]=k.useState("desc"),w=(r,t)=>{o(r),i(t)},{getSortProps:S}=B(a,l,w);return e.jsxs(g,{caption:u.caption,fullWidth:!0,children:[e.jsx(x,{sticky:!0,children:e.jsx(c,{children:p.columns.slice(0,4).map((r,t)=>e.jsx(f,{bold:!0,...S(r),children:r},t))})}),e.jsx(h,{children:p.rows.sort((r,t)=>{if(a==="Forfallsdato"){const s=new Date(r[0]).getTime(),n=new Date(t[0]).getTime();return l==="asc"?s-n:n-s}if(a==="Beløp"){const s=Number(r[2]),n=Number(t[2]);return l==="asc"?s-n:n-s}return 0}).map((r,t)=>e.jsx(c,{children:r.slice(0,4).map((s,n)=>e.jsx(T,{"data-th":j[n],align:[1,2].includes(n)?"right":"left",children:s.toLocaleString()},n))},t))})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Table",
  args: {
    collapseToList: true,
    fullWidth: true,
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>,
    children: ""
  },
  render: args => <div style={{
    width: "90dvw"
  }}>
            <Table {...args}>
                <TableHead sticky={true}>
                    <TableRow>
                        {skadesaker.columns.map((column, index) => <TableHeader key={index} bold>
                                {column}
                            </TableHeader>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {skadesaker.rows.map((row, rowIndex) => <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => <TableCell key={cellIndex} data-th={skadesaker.columns[cellIndex]} align={[1, 2].includes(cellIndex) ? "right" : "left"}>
                                    {cell}
                                </TableCell>)}
                        </TableRow>)}
                </TableBody>
            </Table>
        </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "useSortableTableHeader",
  args: {
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>,
    children: ""
  },
  render: args => {
    const [sortBy, setSortBy] = useState(faktura.columns[0]);
    const [direction, setDirection] = useState<TableSortDirection>("desc");
    const handleSortChange = (sortKey: string, sortDirection: TableSortDirection) => {
      setSortBy(sortKey);
      setDirection(sortDirection);
    };
    const {
      getSortProps
    } = useSortableTableHeader(sortBy, direction, handleSortChange);
    return <Table caption={args.caption} fullWidth>
                <TableHead sticky={true}>
                    <TableRow>
                        {faktura.columns.slice(0, 4).map((column, index) => <TableHeader key={index} bold {...getSortProps(column)}>
                                {column}
                            </TableHeader>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {faktura.rows.sort((a, b) => {
          if (sortBy === "Forfallsdato") {
            const timeA = new Date(a[0] as Date).getTime();
            const timeB = new Date(b[0] as Date).getTime();
            if (direction === "asc") {
              return timeA - timeB;
            }
            return timeB - timeA;
          }
          if (sortBy === "Beløp") {
            const numberA = Number(a[2]);
            const numberB = Number(b[2]);
            if (direction === "asc") {
              return numberA - numberB;
            }
            return numberB - numberA;
          }
          return 0;
        }).map((row, rowIndex) => <TableRow key={rowIndex}>
                                {row.slice(0, 4).map((cell, cellIndex) => <TableCell key={cellIndex} data-th={columns[cellIndex]} align={[1, 2].includes(cellIndex) ? "right" : "left"}>
                                        {cell.toLocaleString()}
                                    </TableCell>)}
                            </TableRow>)}
                </TableBody>
            </Table>;
  }
}`,...m.parameters?.docs?.source}}};const P=["TableStory","StortableTable"];export{m as StortableTable,d as TableStory,P as __namedExportsOrder,K as default};
