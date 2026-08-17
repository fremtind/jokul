import{j as n,r as m}from"./iframe-BCKlvBPi.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CdNdhXxn.js";import i from"./BaseRadioButton.stories-D33zh3VW.js";import{F as d}from"./FieldGroup-M4mz4gKp.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CAe3LYCj.js";import"./SupportLabel-CivR48Gm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D3-abZ34.js";import"./Icon-TUraWuCa.js";import"./WarningIcon-TRRTzBpJ.js";import"./BaseRadioButton-BPjf9e09.js";import"./Label-DIbL7KmW.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
