import{j as n,r as m}from"./iframe-Nvp5l-ln.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D-mAO3qk.js";import i from"./BaseRadioButton.stories-Dd7--U1o.js";/* empty css               */import{F as p}from"./FieldGroup-C6PIsj8P.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-tu3xuOch.js";import"./SupportLabel-B0qFR3Yu.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CiIMDh8K.js";import"./Icon-DJVK3AMz.js";import"./BaseRadioButton-BGkpArOh.js";import"./Label-DenBK_Wi.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
