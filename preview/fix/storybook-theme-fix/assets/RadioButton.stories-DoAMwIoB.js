import{j as n,r as m}from"./iframe-BESaWyIY.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-KlS-H2Td.js";import i from"./BaseRadioButton.stories-Bb9tpTGK.js";import{F as d}from"./FieldGroup-dcHeKLx7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B7SJbAvb.js";import"./SupportLabel-B_9eL8xk.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DU_oB05m.js";import"./Icon-CMvZzIhB.js";import"./WarningIcon-DDCsJM7Z.js";import"./BaseRadioButton-ClxflWVr.js";import"./Label-C2w0RKgF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
