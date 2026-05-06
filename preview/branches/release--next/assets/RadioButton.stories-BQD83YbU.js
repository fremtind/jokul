import{j as n,r as m}from"./iframe-8hnRhoKW.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-De6ox6ux.js";import i from"./BaseRadioButton.stories-QQIV2zZO.js";import{F as d}from"./FieldGroup-BsrFc-fW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D0DN8uJY.js";import"./SupportLabel-BK1m0aNN.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-JNhphA6y.js";import"./Icon-CIZRZu0o.js";import"./BaseRadioButton-C6IcRsEY.js";import"./Label-DaCBNmBf.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
