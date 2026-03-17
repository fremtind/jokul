import{j as n,r as m}from"./iframe-CFjl-NK5.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-eED_OEN_.js";import i from"./BaseRadioButton.stories-D7dnwbX4.js";import{F as d}from"./FieldGroup-BYWOG3df.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CgkwdTow.js";import"./SupportLabel-MjaeEj-E.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-yCYLc5al.js";import"./Icon-wLhIYsIH.js";import"./BaseRadioButton-C_ZM0kMe.js";import"./Label-DqqABxmt.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
