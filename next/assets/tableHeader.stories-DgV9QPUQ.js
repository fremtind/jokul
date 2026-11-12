import{j as e}from"./iframe-n17IaoCU.js";import{T as p,a as c}from"./TableCaption-BW-ftM3x.js";import{b as t,a as b}from"./TableRow-BwVabDog.js";import{a as d,T}from"./TableHeader-WFbuqqUE.js";import{s as o}from"./_index-DcsdE9qR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./tableContext-FyedivZp.js";import"./ChevronUpIcon-5B03dgU0.js";import"./Icon-C-5rp8IK.js";const R={title:"Komponenter/Table/Table Header",component:d,parameters:{layout:"padded"},args:{align:"left",children:"Handling",bold:!0,srOnly:!1}},a={name:"Table Header",decorators:(r,l)=>e.jsxs(p,{caption:e.jsx(c,{children:"Hei"}),fullWidth:!0,children:[e.jsx(r,{}),o.rows.map((n,i)=>e.jsx(t,{children:n.map((m,s)=>e.jsx(b,{"data-th":o.columns[s],align:l.align,children:m},s))},i))]}),render:r=>e.jsx(T,{children:e.jsx(t,{children:o.columns.map((l,n)=>e.jsx(d,{...r,children:l},n))})})},S=["TableHeaderStory"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as TableHeaderStory,S as __namedExportsOrder,R as default};
