import{j as e}from"./iframe-D4OqJuqI.js";import{T as t}from"./_index-BxsKyyq9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const z={title:"Beta/Text",component:t,argTypes:{size:{control:"radio",options:["inherit",1,2,3,4,5,6,7,8,9,10],table:{defaultValue:{summary:"inherit"}}},weight:{control:"radio",options:[400,700],table:{defaultValue:{summary:"400"}}},as:{description:"By default Text renders as a <p>. You can pass another HTML tag or React component to the as prop.",table:{defaultValue:{summary:"p"}}}},args:{size:"inherit",weight:400,as:"p"},tags:["autodocs","grouping content"]},i={args:{children:"Default look of the Text component"}},n={render:s=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{...s,children:['Text size "',s.size,'" and weight ',s.weight]}),e.jsx(t,{...s,size:1,children:"Text size 1"}),e.jsx(t,{...s,size:3,children:"Text size 3"}),e.jsx(t,{...s,size:5,children:"Text size 5"}),e.jsx(t,{...s,size:7,children:"Text size 7"}),e.jsx(t,{...s,size:10,children:"Text size 10"}),e.jsx(t,{weight:400,children:"Text weight 400"}),e.jsx(t,{weight:700,children:"Text weight 700"})]})},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{size:1,children:"Font size 1"}),e.jsx(t,{size:2,children:"Font size 2"}),e.jsx(t,{size:3,children:"Font size 3"}),e.jsx(t,{size:4,children:"Font size 4"}),e.jsx(t,{size:5,children:"Font size 5"}),e.jsx(t,{size:6,children:"Font size 6"}),e.jsx(t,{size:7,children:"Font size 7"}),e.jsx(t,{size:8,children:"Font size 8"}),e.jsx(t,{size:9,children:"Font size 9"}),e.jsx(t,{size:10,children:"Font size 10"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default look of the Text component"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <>
                <BETA_Text {...args}>
                    Text size "{args.size}" and weight {args.weight}
                </BETA_Text>
                <BETA_Text {...args} size={1}>
                    Text size 1
                </BETA_Text>
                <BETA_Text {...args} size={3}>
                    Text size 3
                </BETA_Text>
                <BETA_Text {...args} size={5}>
                    Text size 5
                </BETA_Text>
                <BETA_Text {...args} size={7}>
                    Text size 7
                </BETA_Text>
                <BETA_Text {...args} size={10}>
                    Text size 10
                </BETA_Text>
                <BETA_Text weight={400}>Text weight 400</BETA_Text>
                <BETA_Text weight={700}>Text weight 700</BETA_Text>
            </>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <BETA_Text size={1}>Font size 1</BETA_Text>
            <BETA_Text size={2}>Font size 2</BETA_Text>
            <BETA_Text size={3}>Font size 3</BETA_Text>
            <BETA_Text size={4}>Font size 4</BETA_Text>
            <BETA_Text size={5}>Font size 5</BETA_Text>
            <BETA_Text size={6}>Font size 6</BETA_Text>
            <BETA_Text size={7}>Font size 7</BETA_Text>
            <BETA_Text size={8}>Font size 8</BETA_Text>
            <BETA_Text size={9}>Font size 9</BETA_Text>
            <BETA_Text size={10}>Font size 10</BETA_Text>
        </>
}`,...r.parameters?.docs?.source}}};const c=["Default","SizesAndWeights","SizeScale"];export{i as Default,r as SizeScale,n as SizesAndWeights,c as __namedExportsOrder,z as default};
