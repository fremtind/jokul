import{j as n,r as m}from"./iframe-B_zKdfLP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C3sMyWtz.js";import i from"./BaseRadioButton.stories-D5k23D77.js";import{F as d}from"./FieldGroup-DotBv56T.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BMUtJkz_.js";import"./SupportLabel-UV_0scEh.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DzOttN66.js";import"./Icon-DETZ8T6E.js";import"./BaseRadioButton-CxW6qkCl.js";import"./Label-TsCfyMtT.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
