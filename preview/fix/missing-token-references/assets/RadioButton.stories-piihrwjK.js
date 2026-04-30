import{j as n,r as m}from"./iframe-S8j4lm7c.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BMth09fs.js";import i from"./BaseRadioButton.stories-DVosaqw4.js";import{F as d}from"./FieldGroup-q_4Ve8Sy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CO0xw5ws.js";import"./SupportLabel-fFt8owYd.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DbSOY1UB.js";import"./Icon-Dw7hQHVp.js";import"./BaseRadioButton-n0t6Lt75.js";import"./Label-RVbF0N9t.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
