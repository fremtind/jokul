import{j as e}from"./iframe-C-ypBE70.js";import{S as m,a}from"./SegmentedControlButton-CytHsuMd.js";/* empty css               *//* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-1lkaRwad.js";import"./useId-B8BlCDSA.js";import"./Label-DTdlpVx_.js";import"./SupportLabel-D_kq0xk5.js";import"./SuccessIcon-Dgakuara.js";import"./Icon-Cu4AHOkf.js";import"./types-BlFGa32c.js";import"./WarningIcon-CeEg-qws.js";import"./RadioButton-CwdS5i9z.js";import"./BaseRadioButton-DqLKiV6a.js";const k={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},A=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{o as SegmentedControlStory,r as Temavelger,A as __namedExportsOrder,k as default};
