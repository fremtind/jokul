import{j as n,r as m}from"./iframe-GQYOqIlP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-j5CRRq_X.js";import i from"./BaseRadioButton.stories-dYvFoMAO.js";import{F as d}from"./FieldGroup-Ds6t8-Sz.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CwKEMfR_.js";import"./SupportLabel-C_b4zvCc.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CYBWqIaB.js";import"./Icon-DBrhSzBz.js";import"./WarningIcon-DM9R_CGj.js";import"./BaseRadioButton-CxIUKx_N.js";import"./Label-BHOyGF1D.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
