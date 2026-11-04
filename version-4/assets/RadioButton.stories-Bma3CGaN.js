import{j as n,r as m}from"./iframe-DR7yGEhU.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C0dTrEIU.js";import i from"./BaseRadioButton.stories-CedrhXXQ.js";/* empty css               */import{F as p}from"./FieldGroup-fm7yNqUJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CZRNCofc.js";import"./SupportLabel-C2w44MUa.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D9qWg_IM.js";import"./Icon-1-zj4suy.js";import"./BaseRadioButton-COallTYT.js";import"./Label-IsfHYsxJ.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
