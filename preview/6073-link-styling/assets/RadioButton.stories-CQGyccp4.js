import{j as n,r as m}from"./iframe-CmO7dn95.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CUg-a2q4.js";import i from"./BaseRadioButton.stories-CK0Beixk.js";/* empty css               */import{F as p}from"./FieldGroup-CNYhL35m.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ycxFZW9_.js";import"./SupportLabel-DXjBum3l.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CWsxDl13.js";import"./Icon-C_nwbsWC.js";import"./BaseRadioButton-CtMSPIGd.js";import"./Label-C0By6y6X.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
