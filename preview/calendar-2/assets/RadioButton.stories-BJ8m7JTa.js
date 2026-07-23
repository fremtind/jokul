import{j as n,r as m}from"./iframe-Cp86lBAL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DLLkCOup.js";import i from"./BaseRadioButton.stories-k50980FC.js";import{F as d}from"./FieldGroup-Cj4xRW16.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DXjpdJol.js";import"./SupportLabel-IjFg-Rlk.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BswGm4f1.js";import"./Icon-BnvmPiPE.js";import"./WarningIcon-CWRGLn1z.js";import"./BaseRadioButton-BFsHxj0l.js";import"./Label-CJ3rQXbU.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
