import{j as n,r as m}from"./iframe-CETqyr-J.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-pZB_Edzv.js";import i from"./BaseRadioButton.stories-W_4yWrVF.js";/* empty css               */import{F as p}from"./FieldGroup-bghREMd6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BhcXEBcY.js";import"./SupportLabel-dH5xYi0s.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-3RQPuDqc.js";import"./Icon-DPPmB1fe.js";import"./BaseRadioButton-BGeIzpZH.js";import"./Label-DlyX3LAq.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
