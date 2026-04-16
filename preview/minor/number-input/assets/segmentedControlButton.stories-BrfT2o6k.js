import{j as e}from"./iframe-DlRt_O4I.js";import{S as m,a}from"./_index-CQKMXt2P.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-Jg7gLBb1.js";import"./useId-BbkHT4QC.js";import"./Label-9ChzBkss.js";import"./SupportLabel-BQhHr-5_.js";import"./WarningIcon-Dhjy5Ayx.js";import"./Icon-CT7ikBSz.js";import"./RadioButton-cL9gN03F.js";import"./BaseRadioButton-DQ37NGW1.js";const f={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control Button"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <SegmentedControlButton {...args} name="temavalg">
                {args.value}
            </SegmentedControlButton>
            {themeChoices.map(choice => <SegmentedControlButton value={choice} key={choice} name="temavalg">
                    {choice}
                </SegmentedControlButton>)}
        </>
}`,...r.parameters?.docs?.source}}};const y=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,y as __namedExportsOrder,f as default};
