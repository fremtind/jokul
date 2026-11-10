import{j as e}from"./iframe-HcF1Ni7Z.js";import{a as m,S as a}from"./SegmentedControlButton-FVNxooHl.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-C_wTU-1Y.js";import"./useId-C1Uqa4iT.js";import"./Label-BQTXb4CM.js";import"./SupportLabel-CPfJgJUU.js";import"./SuccessIcon-FSu6pBYw.js";import"./Icon-BjtCMmoX.js";import"./types-BlFGa32c.js";import"./WarningIcon-CR9EQvbZ.js";import"./RadioButton-3CFx36I_.js";import"./BaseRadioButton-8a_u0Jwr.js";const T={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},k=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{o as SegmentedControlStory,r as Temavelger,k as __namedExportsOrder,T as default};
