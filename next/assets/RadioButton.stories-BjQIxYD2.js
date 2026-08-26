import{j as n,r as m}from"./iframe-CIpTeFLS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C5R-GRYi.js";import i from"./BaseRadioButton.stories-BRdtq3L5.js";import{F as d}from"./FieldGroup-BQCB8XmL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-aST94rpK.js";import"./SupportLabel-Dx8FTZiC.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DY4tQWKR.js";import"./Icon-BMMwHE7R.js";import"./WarningIcon-xj9xAPBr.js";import"./BaseRadioButton-Cz-C8ku3.js";import"./Label-fc7B67MA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
