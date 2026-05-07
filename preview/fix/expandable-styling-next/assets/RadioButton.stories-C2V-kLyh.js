import{j as n,r as m}from"./iframe-QTUkujP_.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DnQYqsoe.js";import i from"./BaseRadioButton.stories-C5GsrEK4.js";import{F as d}from"./FieldGroup-C43b8vPu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D3IjnUCB.js";import"./SupportLabel-BPMCM3Rj.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Dt3MiMct.js";import"./Icon-CQf2WZi4.js";import"./BaseRadioButton-BQ3KwcmQ.js";import"./Label-Dxh567Y3.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
