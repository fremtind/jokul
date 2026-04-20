import{j as n,r as m}from"./iframe-C72mq8sh.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BWLipQaH.js";import i from"./BaseRadioButton.stories-D35uJev6.js";import{F as d}from"./FieldGroup-D2yKQdKd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CryekSjM.js";import"./SupportLabel-BGqzvBzi.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BdAZB8hq.js";import"./Icon-CP6593Vk.js";import"./BaseRadioButton-BLIP70dC.js";import"./Label-BYLoNrFV.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
