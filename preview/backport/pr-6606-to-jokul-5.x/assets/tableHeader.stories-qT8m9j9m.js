import{j as e}from"./iframe-Cd58-eiO.js";import{b as d,a as c,T as p,c as b}from"./TableHeader-BzDJ7Vh2.js";import{a as t,T}from"./TableRow-XG2O4zqW.js";import{s as o}from"./_index-Dc1LJiGL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./ChevronDownIcon-fk6EyYOt.js";import"./Icon-5Ollpz7g.js";import"./ChevronUpIcon-w_vSRsQF.js";const C={title:"Komponenter/Table/Table Header",component:d,parameters:{layout:"padded"},args:{align:"left",children:"Handling",bold:!0,srOnly:!1}},a={name:"Table Header",decorators:(r,l)=>e.jsxs(p,{caption:e.jsx(b,{children:"Hei"}),fullWidth:!0,children:[e.jsx(r,{}),o.rows.map((n,i)=>e.jsx(t,{children:n.map((m,s)=>e.jsx(T,{"data-th":o.columns[s],align:l.align,children:m},s))},i))]}),render:r=>e.jsx(c,{children:e.jsx(t,{children:o.columns.map((l,n)=>e.jsx(d,{...r,children:l},n))})})},R=["TableHeaderStory"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
