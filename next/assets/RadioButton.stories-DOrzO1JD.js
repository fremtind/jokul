import{j as n,r as m}from"./iframe-ConuVp4c.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cnv6j9iG.js";import i from"./BaseRadioButton.stories-BaaaYWUb.js";import{F as d}from"./FieldGroup-BTlFRKwV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BU8mB7Vl.js";import"./SupportLabel-CYmL6leB.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CRlriY24.js";import"./Icon-DbXTBHUo.js";import"./WarningIcon-WCqs-vqM.js";import"./BaseRadioButton-DnKrnj3P.js";import"./Label-lqNFCtL5.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
