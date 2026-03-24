import{j as n,r as m}from"./iframe-wO2UT801.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cf8FmaAT.js";import i from"./BaseRadioButton.stories-Doh6s46P.js";import{F as d}from"./FieldGroup-DNV7adWu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-0LaIJzsl.js";import"./SupportLabel-BcdI4Kgf.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-RhduDqhM.js";import"./Icon-BYX0wgTH.js";import"./BaseRadioButton-BbPp1_Et.js";import"./Label-BnHr_VvC.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
