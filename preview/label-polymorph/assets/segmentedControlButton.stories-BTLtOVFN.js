import{j as e}from"./iframe-KbORsCiT.js";import{S as a,a as m}from"./_index-D0L8pTyf.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-CEXjklWl.js";import"./useId-SGkDPlhg.js";import"./SupportLabel-D4XCd4hh.js";import"./WarningIcon-Rjd63akh.js";import"./Icon-DI1Inwwd.js";import"./RadioButton-CaGhzlbX.js";import"./BaseRadioButton-Csxhg-as.js";const j={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:a,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(m,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(a,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const f=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,f as __namedExportsOrder,j as default};
