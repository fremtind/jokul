import{j as n,r as m}from"./iframe--O4Sgmp8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CwG8xrpr.js";import i from"./BaseRadioButton.stories-ZPX_rhsg.js";import{F as d}from"./FieldGroup-DGkuyu5H.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DiLOrs8n.js";import"./SupportLabel-SJ4jE4ng.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CEDZ0Jqb.js";import"./Icon-BWRctQy3.js";import"./WarningIcon-MuosO0K-.js";import"./BaseRadioButton-DNAxIe2g.js";import"./Label-DyfSKmX1.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
