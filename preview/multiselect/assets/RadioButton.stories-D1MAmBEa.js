import{j as n,r as m}from"./iframe-IeXOE1xG.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DrlNCNjJ.js";import i from"./BaseRadioButton.stories-D1oFqp2v.js";import{F as d}from"./FieldGroup-BuL1HzuD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DY4OQRGl.js";import"./BaseRadioButton-YFgPbJp7.js";import"./clsx-B-dksMZM.js";import"./Label-RbnQIPKB.js";import"./SupportLabel-BjeGjqaX.js";import"./SuccessIcon-BsnM87L1.js";import"./Icon-Co9uLyg7.js";import"./WarningIcon-BP9ZIQ-G.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
