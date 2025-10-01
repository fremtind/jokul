import{R as e,r as w}from"./index-siqcju79.js";import{T,a as i,b as p,c as y,d as f,e as k,f as g,s as b,g as S}from"./_index-Cb9rgWJM.js";import{c as h}from"./paginated-table-data-ZMeh4d0Y.js";import{u as x}from"./utils-QVdaF3ec.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./ArrowVerticalAnimated-CU3StSif.js";import"./Icon-mINJCSxV.js";const N={title:"Komponenter/Table",component:g,subcomponents:{TableCaption:k,TableHead:f,TableHeader:y,TableBody:p,TableRow:i,TableCell:T},parameters:{layout:"centered"},tags:["autodocs","tabular data"]},m={name:"Table",args:{collapseToList:!0,fullWidth:!0,caption:e.createElement(k,{srOnly:!0},"Overskrift for skjermlesere"),children:""},render:u=>e.createElement("div",{style:{width:"90dvw"}},e.createElement(g,{...u},e.createElement(f,{sticky:!0},e.createElement(i,null,b.columns.map((a,o)=>e.createElement(y,{key:o,bold:!0},a)))),e.createElement(p,null,b.rows.map((a,o)=>e.createElement(i,{key:o},a.map((s,c)=>e.createElement(T,{key:c,"data-th":b.columns[c],align:[1,2].includes(c)?"right":"left"},s)))))))},d={name:"useSortableTableHeader",args:{caption:e.createElement(k,{srOnly:!0},"Overskrift for skjermlesere"),children:""},render:u=>{const[a,o]=w.useState(h[0]),[s,c]=w.useState("desc"),B=(t,n)=>{o(t),c(n)},{getSortProps:E}=x(a,s,B);return e.createElement(g,{caption:u.caption,fullWidth:!0},e.createElement(f,{sticky:!0},e.createElement(i,null,S.columns.slice(0,4).map((t,n)=>e.createElement(y,{key:n,bold:!0,...E(t)},t)))),e.createElement(p,null,S.rows.sort((t,n)=>{if(a==="Forfallsdato"){const l=new Date(t[0]).getTime(),r=new Date(n[0]).getTime();return s==="asc"?l-r:r-l}if(a==="Beløp"){const l=Number(t[2]),r=Number(n[2]);return s==="asc"?l-r:r-l}return 0}).map((t,n)=>e.createElement(i,{key:n},t.slice(0,4).map((l,r)=>e.createElement(T,{key:r,"data-th":h[r],align:[1,2].includes(r)?"right":"left"},l.toLocaleString()))))))}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "useSortableTableHeader",
  args: {
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>,
    children: ""
  },
  render: args => {
    const [sortBy, setSortBy] = useState(columns[0]);
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
}`,...d.parameters?.docs?.source}}};const W=["TableStory","StortableTable"];export{d as StortableTable,m as TableStory,W as __namedExportsOrder,N as default};
