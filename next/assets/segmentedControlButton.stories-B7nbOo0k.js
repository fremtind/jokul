import{j as e}from"./iframe-DzTuKauP.js";import{a as m,S as a}from"./SegmentedControlButton-DoyaA15f.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-BKIONSFo.js";import"./useId-BMkVc4Wk.js";import"./Label-DhCxIqh_.js";import"./SupportLabel-ClfhNeRx.js";import"./SuccessIcon-CqguTowU.js";import"./Icon-QQfnwt3Z.js";import"./types-BlFGa32c.js";import"./WarningIcon-B9daxtNv.js";import"./RadioButton-MGuFqiO7.js";import"./BaseRadioButton-DCDGZ17i.js";const T={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},k=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
