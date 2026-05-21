import{j as n,r as m}from"./iframe-CkyTt8ht.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Ba_I8yqX.js";import i from"./BaseRadioButton.stories-C_zyqIwJ.js";import{F as d}from"./FieldGroup-D2aw_hST.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DX9Wy9sW.js";import"./SupportLabel-DvwgCOpD.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B9xzQhsW.js";import"./Icon-DKSFJicx.js";import"./BaseRadioButton-C6VfE6p9.js";import"./Label-Ba_2O1yB.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
