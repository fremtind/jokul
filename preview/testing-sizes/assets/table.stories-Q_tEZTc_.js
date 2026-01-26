import{j as e,r as x}from"./iframe-BFSAkX8i.js";import{s as b,f as p}from"./_index-Bb_qH3gG.js";import{b as T,a as h,c as f,T as S}from"./TableHeader-C5-xkBid.js";import{T as g}from"./TableBody-DLGaBD6q.js";import{a as d,T as l}from"./TableRow-Bd7Lwnrh.js";import{c as k}from"./paginated-table-data-ZMeh4d0Y.js";import{u as w}from"./utils-DYxs2h-a.js";import{B as D}from"./Button-Bm2pRcVr.js";import{I as C}from"./Icon-DAIWM6d9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./ChevronDownIcon-qz5UJeiN.js";import"./ChevronUpIcon-DcN9giCQ.js";import"./usePreviousValue-Bq00YMV6.js";import"./Loader-u8ie7o9C.js";import"./useDelayedRender-gbrgZTDF.js";const G={title:"Komponenter/Table",component:S,subcomponents:{TableCaption:f,TableHead:h,TableHeader:T,TableBody:g,TableRow:l,TableCell:d},args:{collapseToList:!0,fullWidth:!0,caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"}),children:e.jsxs(e.Fragment,{children:[e.jsx(h,{sticky:!0,children:e.jsx(l,{children:b.columns.map((i,o)=>e.jsx(T,{bold:!0,children:i},o))})}),e.jsx(g,{children:b.rows.map((i,o)=>e.jsx(l,{children:i.map((u,a)=>e.jsx(d,{"data-th":b.columns[a],align:[1,2].includes(a)?"right":"left",children:u},a))},o))})]})}},c={},m={name:"useSortableTableHeader",args:{caption:e.jsx(f,{srOnly:!0,children:"Overskrift for skjermlesere"})},render:i=>{const[o,u]=x.useState(p.columns[0]),[a,B]=x.useState("desc"),j=(r,n)=>{u(r),B(n)},{getSortProps:y}=w(o,a,j);return e.jsxs(S,{caption:i.caption,fullWidth:!0,children:[e.jsx(h,{sticky:!0,children:e.jsx(l,{children:p.columns.slice(0,4).map((r,n)=>e.jsx(T,{bold:!0,...y(r),children:r},n))})}),e.jsx(g,{children:p.rows.sort((r,n)=>{if(o==="Forfallsdato"){const s=new Date(r[0]).getTime(),t=new Date(n[0]).getTime();return a==="asc"?s-t:t-s}if(o==="Beløp"){const s=Number(r[2]),t=Number(n[2]);return a==="asc"?s-t:t-s}return 0}).map((r,n)=>e.jsxs(l,{children:[r.slice(0,4).map((s,t)=>e.jsx(d,{"data-th":k[t],align:[1,2].includes(t)?"right":"left",children:s.toLocaleString()},t)),e.jsx(d,{children:e.jsx(D,{variant:"ghost",icon:e.jsx(C,{children:"download"}),iconPosition:"right",children:"Last ned"})})]},n))})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "useSortableTableHeader",
  args: {
    caption: <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
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
                                <TableCell>
                                    {<Button variant="ghost" icon={<Icon>download</Icon>} iconPosition="right">
                                            Last ned
                                        </Button>}
                                </TableCell>
                            </TableRow>)}
                </TableBody>
            </Table>;
  }
}`,...m.parameters?.docs?.source}}};const J=["TableStory","StortableTable"];export{m as StortableTable,c as TableStory,J as __namedExportsOrder,G as default};
