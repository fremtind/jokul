import{j as n,r as m}from"./iframe-BaeIsfXD.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-N9Ky4Ail.js";import i from"./BaseRadioButton.stories-xK6ykkOA.js";import{F as d}from"./FieldGroup-CJstKT1P.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CVVuxryf.js";import"./SupportLabel-D8QTtzMm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-2pd3aG7q.js";import"./Icon-D1VP7FbD.js";import"./WarningIcon-C98j5mof.js";import"./BaseRadioButton-BoT2vOh0.js";import"./Label-C1IMJ2Ou.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
