import{j as n,r as m}from"./iframe-BAoOH_0Y.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BvQlF1SL.js";import i from"./BaseRadioButton.stories-Cn5TPjiq.js";import{F as d}from"./FieldGroup-TS0Hn-mu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DcDtDYgL.js";import"./SupportLabel-BkEeb1BY.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D_JqTzFK.js";import"./Icon-HWjH8CiS.js";import"./BaseRadioButton-DX5gpKeC.js";import"./Label-Cat3hR7y.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
