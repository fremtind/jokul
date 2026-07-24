import{j as n,r as m}from"./iframe-CRj1-ffI.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-zohCBrk4.js";import i from"./BaseRadioButton.stories-DFJZpQyR.js";import{F as d}from"./FieldGroup-D8uem-4V.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BQjP9cWe.js";import"./SupportLabel-E9Ja3xKn.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C1xxEch7.js";import"./Icon-BmKMr4vt.js";import"./WarningIcon-DZdjRWSf.js";import"./BaseRadioButton-DsUA3tnr.js";import"./Label-lOk_nmdg.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
