import{j as n,r as m}from"./iframe-BRQ1N0J2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-VSHEWt5P.js";import i from"./BaseRadioButton.stories-Br4PeH2I.js";import{F as d}from"./FieldGroup-CY1JlWAe.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B7EFyzwZ.js";import"./SupportLabel-C1Jykn3n.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DyEsKJnd.js";import"./Icon-BE0_XbeF.js";import"./BaseRadioButton-CfemQrQ3.js";import"./Label-Bc0oeFVY.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
