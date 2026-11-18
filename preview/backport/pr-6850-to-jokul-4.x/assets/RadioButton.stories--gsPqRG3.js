import{j as n,r as m}from"./iframe-CwyxsR1E.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CbKaK1Zc.js";import i from"./BaseRadioButton.stories-wcbWH-w_.js";/* empty css               */import{F as p}from"./FieldGroup-BJ6J5NO1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BWQSm14f.js";import"./SupportLabel-DeG2dukw.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DI9sA-2y.js";import"./Icon-ClFq79UX.js";import"./BaseRadioButton-CG60h6EL.js";import"./Label-DDgUtyVr.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
