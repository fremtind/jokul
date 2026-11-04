import{j as e}from"./iframe-DDRcwYpW.js";import{T as c,a as p}from"./TableCaption-CO22s7-6.js";import{b as t,a as b}from"./TableRow-CPeO5ydX.js";import{a as d,T}from"./TableHeader-Bo2tuQxn.js";import{s as o}from"./_index-DcsdE9qR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tableContext-CYknnUc7.js";import"./ChevronUpIcon-XJH8zSFl.js";import"./Icon-BPs7t1dO.js";const C={title:"Komponenter/Table/Table Header",component:d,parameters:{layout:"padded"},args:{align:"left",children:"Handling",bold:!0,srOnly:!1}},a={name:"Table Header",decorators:(r,l)=>e.jsxs(c,{caption:e.jsx(p,{children:"Hei"}),fullWidth:!0,children:[e.jsx(r,{}),o.rows.map((n,i)=>e.jsx(t,{children:n.map((m,s)=>e.jsx(b,{"data-th":o.columns[s],align:l.align,children:m},s))},i))]}),render:r=>e.jsx(T,{children:e.jsx(t,{children:o.columns.map((l,n)=>e.jsx(d,{...r,children:l},n))})})},R=["TableHeaderStory"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Table Header",
  decorators: (Story, args) => {
    return <Table caption={<TableCaption>Hei</TableCaption>} fullWidth>
                <Story />
                {skadesaker.rows.map((row, rowIndex) => <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => <TableCell key={cellIndex} data-th={skadesaker.columns[cellIndex]} align={args.align}>
                                {cell}
                            </TableCell>)}
                    </TableRow>)}
            </Table>;
  },
  render: args => {
    return <TableHead>
                <TableRow>
                    {skadesaker.columns.map((column, index) => <TableHeader key={index} {...args}>
                            {column}
                        </TableHeader>)}
                </TableRow>
            </TableHead>;
  }
}`,...a.parameters?.docs?.source}}};export{a as TableHeaderStory,R as __namedExportsOrder,C as default};
