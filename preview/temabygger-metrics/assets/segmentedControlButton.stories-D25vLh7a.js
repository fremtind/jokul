import{j as e}from"./iframe-D_fJhVbI.js";import{a as m,S as a}from"./SegmentedControlButton-zTSwqt5Z.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-C98o6A0C.js";import"./useId-BG1QCg7b.js";import"./Label-DOhBtLP2.js";import"./SupportLabel-rjuNUuHQ.js";import"./SuccessIcon-CcUGj-Mq.js";import"./Icon-iQ9tV23a.js";import"./WarningIcon-DNpeWaD8.js";import"./RadioButton-DfcoeSDW.js";import"./BaseRadioButton-BhO1i7MV.js";const y={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},T=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{o as SegmentedControlStory,r as Temavelger,T as __namedExportsOrder,y as default};
