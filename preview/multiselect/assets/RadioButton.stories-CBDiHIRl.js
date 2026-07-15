import{j as n,r as m}from"./iframe-D9s0L3GW.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DZMMTDRt.js";import i from"./BaseRadioButton.stories-iA-sU_91.js";import{F as d}from"./FieldGroup-CEIjZMes.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CMdGbmS8.js";import"./SupportLabel-B1l3y9lo.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DcJbX_sP.js";import"./Icon-DZL2dcXf.js";import"./WarningIcon-DxyBuNLW.js";import"./BaseRadioButton-DWMyx8vj.js";import"./Label-r4Hk7QRa.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
