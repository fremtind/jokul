import{j as n,r as m}from"./iframe-CeDTOySA.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-1iE07D_0.js";import i from"./BaseRadioButton.stories-DTpm26_g.js";import{F as d}from"./FieldGroup-hUSQU2Pr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-3gM9UmNr.js";import"./SupportLabel-BldxnoLh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DsUxl2FE.js";import"./Icon-DCW0X8Ah.js";import"./WarningIcon-HaLITINC.js";import"./BaseRadioButton-KH6T39w5.js";import"./Label-CQrSDD8d.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
