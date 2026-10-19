import{j as n,r as m}from"./iframe-auPq4eww.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-m5z2tFX7.js";import i from"./BaseRadioButton.stories-B8GFV9yl.js";import{F as d}from"./FieldGroup-BcoUs3Dr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-cNq4WhzD.js";import"./SupportLabel-CjSg7RMu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-K1xg5WER.js";import"./Icon-CgQ1I1gE.js";import"./WarningIcon-DjKnIp6i.js";import"./BaseRadioButton-DcvlZPYu.js";import"./Label-BjdU1JP4.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
