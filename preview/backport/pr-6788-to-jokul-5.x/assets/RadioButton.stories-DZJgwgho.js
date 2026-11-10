import{j as n,r as m}from"./iframe-CUI5cQsi.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CnXXASHO.js";import i from"./BaseRadioButton.stories-D1_gDLD_.js";import{F as d}from"./FieldGroup-DxmnpMUW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-WDF391dB.js";import"./SupportLabel-B_v9V75n.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Btb5oJzt.js";import"./Icon-LtMpoTI-.js";import"./WarningIcon-CNeATpqs.js";import"./BaseRadioButton-CJjkE880.js";import"./Label-B4K0Oxno.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
