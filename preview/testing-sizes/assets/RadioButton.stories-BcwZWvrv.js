import{j as n,r as m}from"./iframe-sZfDv0Z7.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-GNgBs6bS.js";import i from"./BaseRadioButton.stories-CufvXnPS.js";import{F as d}from"./FieldGroup-C6C9ERQX.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CK4ZDaCw.js";import"./SupportLabel-BIZEexaM.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-lGBpQl69.js";import"./Icon-DzYcyYW4.js";import"./BaseRadioButton-Dus_I4AI.js";import"./Label-DiTuBc8b.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
