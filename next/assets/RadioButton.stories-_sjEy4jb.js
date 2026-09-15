import{j as n,r as m}from"./iframe-C58mhg2S.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CKf49U9W.js";import i from"./BaseRadioButton.stories-BX7Xazu4.js";import{F as d}from"./FieldGroup-BGFfNUGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CnCSsVT1.js";import"./SupportLabel-DKq9P41k.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BAt04Y5c.js";import"./Icon-VsgLK83y.js";import"./WarningIcon-kckq3pDx.js";import"./BaseRadioButton-CDPsdxTv.js";import"./Label-DE8pFFp9.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
