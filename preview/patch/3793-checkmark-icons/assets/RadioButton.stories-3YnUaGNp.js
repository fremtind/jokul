import{j as n,r as m}from"./iframe-C7e2jQVA.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-xOhG6kqo.js";import i from"./BaseRadioButton.stories-RiHqhh5h.js";import{F as d}from"./FieldGroup-Dw28HrOK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-sZRjx2oH.js";import"./SupportLabel-BcOUNaJr.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Ba38EYm5.js";import"./Icon-FM4wcNJl.js";import"./BaseRadioButton-DpZNup5r.js";import"./Label-1N8IP247.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
