import{j as n,r as m}from"./iframe-CKVt722I.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BH26btRb.js";import i from"./BaseRadioButton.stories-CUBAPgvY.js";import{F as d}from"./FieldGroup-Cn6k31-9.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bq5viX2P.js";import"./SupportLabel-BRyq9M8s.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CR9l8rRS.js";import"./Icon-D8CVEmzD.js";import"./WarningIcon-B8zyywpE.js";import"./BaseRadioButton-BA51dVIx.js";import"./Label-CEkw0Pdg.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
