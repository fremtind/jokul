import{j as e}from"./iframe-RT_nzz6I.js";import{T as c,a as p}from"./TableCaption-CSAQRRNQ.js";import{b as t,a as b}from"./TableRow-DhWJzSHH.js";import{a as d,T}from"./TableHeader-DxmXZ0fu.js";import{s as o}from"./_index-CurceeMy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tableContext-BD3dI-7Q.js";import"./ChevronUpIcon-Bc0plBEO.js";import"./Icon-BI8GRXG3.js";const C={title:"Komponenter/Table/Table Header",component:d,parameters:{layout:"padded"},args:{align:"left",children:"Handling",bold:!0,srOnly:!1}},a={name:"Table Header",decorators:(r,l)=>e.jsxs(c,{caption:e.jsx(p,{children:"Hei"}),fullWidth:!0,children:[e.jsx(r,{}),o.rows.map((n,i)=>e.jsx(t,{children:n.map((m,s)=>e.jsx(b,{"data-th":o.columns[s],align:l.align,children:m},s))},i))]}),render:r=>e.jsx(T,{children:e.jsx(t,{children:o.columns.map((l,n)=>e.jsx(d,{...r,children:l},n))})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const R=["TableHeaderStory"];export{a as TableHeaderStory,R as __namedExportsOrder,C as default};
