import{j as n,r as m}from"./iframe-C7JtmNjI.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CTFTL41x.js";import i from"./BaseRadioButton.stories-DsSTS9Sp.js";import{F as d}from"./FieldGroup-B8n0RYZf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CS9Tv6Mb.js";import"./SupportLabel-DcAQj_fV.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-437Q59-v.js";import"./Icon-BwlU2V2q.js";import"./WarningIcon-sVKsCHzA.js";import"./BaseRadioButton-CqYfX-ED.js";import"./Label-BW3whWWF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
