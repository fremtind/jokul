import{j as n,r as m}from"./iframe-Be4FwfBN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4lL1dde.js";import i from"./BaseRadioButton.stories-DWGUf3p3.js";import{F as d}from"./FieldGroup-CqZawYXn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-YZuQZIdm.js";import"./SupportLabel-CcRPn3d-.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BcqReUr_.js";import"./Icon-BVI9L6Mb.js";import"./WarningIcon-BgE6AbZg.js";import"./BaseRadioButton-BQkKW3tW.js";import"./Label-CCKYZiNE.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
