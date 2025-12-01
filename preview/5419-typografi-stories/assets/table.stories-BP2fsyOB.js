import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as g}from"./index-Bv6P490N.js";import{T as p,a as c,b as T,c as h,d as f,e as x,f as y}from"./TableRow-DZH38DeC.js";import{c as k}from"./paginated-table-data-ZMeh4d0Y.js";import{u as B}from"./utils-QVdaF3ec.js";import{s as b,f as w}from"./_index-CS-D0VQ4.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./ArrowVerticalAnimated-DxukZOje.js";import"./ArrowDownIcon-CDuWY9sD.js";import"./Icon-DYEEOjBa.js";const P={title:"Komponenter/Table",component:y,subcomponents:{TableCaption:x,TableHead:f,TableHeader:h,TableBody:T,TableRow:c,TableCell:p},parameters:{layout:"centered"},tags:["autodocs","tabular data"]},d={name:"Table",args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(x,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:u=>e.jsx("div",{style:{width:"90dvw"},children:e.jsxs(y,{...u,children:[e.jsx(f,{sticky:!0,children:e.jsx(c,{children:b.columns.map((a,s)=>e.jsx(h,{bold:!0,children:a},s))})}),e.jsx(T,{children:b.rows.map((a,s)=>e.jsx(c,{children:a.map((l,i)=>e.jsx(p,{"data-th":b.columns[i],align:[1,2].includes(i)?"right":"left",children:l},i))},s))})]})})},m={name:"useSortableTableHeader",args:{caption:e.jsx(x,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:""},render:u=>{const[a,s]=g.useState(k[0]),[l,i]=g.useState("desc"),S=(r,t)=>{s(r),i(t)},{getSortProps:j}=B(a,l,S);return e.jsxs(y,{caption:u.caption,fullWidth:!0,children:[e.jsx(f,{sticky:!0,children:e.jsx(c,{children:w.columns.slice(0,4).map((r,t)=>e.jsx(h,{bold:!0,...j(r),children:r},t))})}),e.jsx(T,{children:w.rows.sort((r,t)=>{if(a==="Forfallsdato"){const o=new Date(r[0]).getTime(),n=new Date(t[0]).getTime();return l==="asc"?o-n:n-o}if(a==="Beløp"){const o=Number(r[2]),n=Number(t[2]);return l==="asc"?o-n:n-o}return 0}).map((r,t)=>e.jsx(c,{children:r.slice(0,4).map((o,n)=>e.jsx(p,{"data-th":k[n],align:[1,2].includes(n)?"right":"left",children:o.toLocaleString()},n))},t))})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const F=["TableStory","StortableTable"];export{m as StortableTable,d as TableStory,F as __namedExportsOrder,P as default};
