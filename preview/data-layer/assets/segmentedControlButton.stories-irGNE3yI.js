import{j as e}from"./iframe-C5mqiCLF.js";import{a as m,S as a}from"./SegmentedControlButton-zKDDz_zQ.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-pac7nFRV.js";import"./useId-DtC_nmmh.js";import"./Label-XUot8IJ4.js";import"./SupportLabel-IUODpl5q.js";import"./SuccessIcon-CWAgkxzi.js";import"./Icon-CSRiLZ8e.js";import"./types-YjSsgwWY.js";import"./WarningIcon-CXvAnsoL.js";import"./RadioButton-D7JKxMgD.js";import"./BaseRadioButton-D2VGNGUO.js";const T={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const k=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,k as __namedExportsOrder,T as default};
