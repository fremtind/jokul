import{j as n,r as m}from"./iframe-CoFjYjH0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-1ToXGoC9.js";import i from"./BaseRadioButton.stories-BGTR34tx.js";import{F as d}from"./FieldGroup-Vnt3skxb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D5iuTEFF.js";import"./SupportLabel-BzeHnh6F.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DrJ1NK3M.js";import"./Icon-EjDXN5Lj.js";import"./WarningIcon-BLnLAeUB.js";import"./BaseRadioButton-CG5COFRI.js";import"./Label-BOxkr0JB.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
