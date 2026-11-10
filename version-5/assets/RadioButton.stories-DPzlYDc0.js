import{j as n,r as m}from"./iframe-S3TuoZJc.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DAd-RvSP.js";import i from"./BaseRadioButton.stories-D_WUtvEC.js";import{F as d}from"./FieldGroup-Cr6TL_2L.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BTS48DD2.js";import"./SupportLabel-B22_uXn1.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DtKEhiUo.js";import"./Icon-DUi3_-pZ.js";import"./WarningIcon-BwrY7u46.js";import"./BaseRadioButton-BwLkHVI1.js";import"./Label-BE4S6MpH.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
