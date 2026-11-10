import{j as n,r as m}from"./iframe-DEs6YADE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CETkUQy-.js";import i from"./BaseRadioButton.stories-D_D0ykxi.js";import{F as d}from"./FieldGroup-B_Bp7kU4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-TnKhD2lu.js";import"./SupportLabel-CB_CLwp6.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BsHmD4L8.js";import"./Icon-BNZMkMg-.js";import"./WarningIcon-BqsL-VR0.js";import"./BaseRadioButton-DUqDoZgq.js";import"./Label-Bq-yY8_D.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
