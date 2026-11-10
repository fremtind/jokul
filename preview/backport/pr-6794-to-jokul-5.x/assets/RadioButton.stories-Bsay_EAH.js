import{j as n,r as m}from"./iframe-BngQjpXI.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-pAUk4M6F.js";import i from"./BaseRadioButton.stories-BoBTyQfC.js";import{F as d}from"./FieldGroup-nUVhtAQU.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CatgwIho.js";import"./SupportLabel-BpTjCM80.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BjmJbtXm.js";import"./Icon-hNcfuKal.js";import"./WarningIcon-us5W9aMz.js";import"./BaseRadioButton-BTCyPRPO.js";import"./Label-C__yCaC1.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
