import{j as n,r as m}from"./iframe-Be594wqm.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DmVcvRPj.js";import i from"./BaseRadioButton.stories-DUxRj4d3.js";import{F as d}from"./FieldGroup-eleyOOUd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CYIch4DL.js";import"./SupportLabel-BNU1LEXU.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Dc33qtzB.js";import"./Icon-DguHHZ_U.js";import"./BaseRadioButton-DaJ4tfV7.js";import"./Label-BAHM2iOr.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
