import{j as n,r as m}from"./iframe-Cb79oK8k.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-EvGgsuFk.js";import i from"./BaseRadioButton.stories-C_8yclAF.js";import{F as d}from"./FieldGroup-DWk6bY64.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CCUY4xWL.js";import"./SupportLabel-D4Rkbh9T.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C2Y64yVe.js";import"./Icon-t2ZFZrhp.js";import"./BaseRadioButton-D259jUu_.js";import"./Label-C5Ec6fla.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
