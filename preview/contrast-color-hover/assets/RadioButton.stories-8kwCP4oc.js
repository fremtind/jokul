import{j as n,r as m}from"./iframe-DhpyhEJb.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-rE7ZXUBf.js";import i from"./BaseRadioButton.stories-F-de8vdT.js";import{F as d}from"./FieldGroup-B_DhhR9c.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DcW_Zgty.js";import"./SupportLabel-AffsYaX_.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dd7Fvii5.js";import"./Icon-DZcN2KYX.js";import"./WarningIcon-DG07b4Om.js";import"./BaseRadioButton-BAci7faq.js";import"./Label-B3waza7o.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
