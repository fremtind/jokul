import{j as n,r as m}from"./iframe-CaOTu9UQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ZfiWaU86.js";import i from"./BaseRadioButton.stories-BnpaS9xs.js";import{F as d}from"./FieldGroup-BG-H5BBk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DY6a1q6E.js";import"./SupportLabel-CO9YLr9u.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DEnqrz7C.js";import"./Icon-BwoEOxJc.js";import"./WarningIcon-DyqsDIhr.js";import"./BaseRadioButton-apHD8vJg.js";import"./Label-BPqrtZmj.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
