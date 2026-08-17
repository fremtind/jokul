import{j as n,r as m}from"./iframe-C35WIanq.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B2RCnYRh.js";import i from"./BaseRadioButton.stories-yKyt3ck3.js";import{F as d}from"./FieldGroup-DiRC3adN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BPu9jLLw.js";import"./SupportLabel-rkmmzDmm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BwGv8Xpt.js";import"./Icon-DN0HpI1L.js";import"./WarningIcon-DJNnNv07.js";import"./BaseRadioButton-CthGHr1r.js";import"./Label-B5Rs1WcA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
