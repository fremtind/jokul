import{j as n,r as m}from"./iframe-BJRY17Xz.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DVJ4Q1Uf.js";import i from"./BaseRadioButton.stories-DaPSAkmY.js";import{F as d}from"./FieldGroup-D2AXmiOS.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BC8bvml_.js";import"./SupportLabel-CaG3sFnq.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CKmcMyoV.js";import"./Icon-C7i3mUoD.js";import"./BaseRadioButton-aUk9oyJW.js";import"./Label-B9CivQ1K.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
