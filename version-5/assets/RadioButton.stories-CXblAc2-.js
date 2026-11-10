import{j as n,r as m}from"./iframe-CbWO4BlV.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DjfLaZhd.js";import i from"./BaseRadioButton.stories-CKyf7mxu.js";import{F as d}from"./FieldGroup-CZjNnhw6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bzz71Lya.js";import"./SupportLabel-jbE70mKM.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BKU8yK7R.js";import"./Icon-COZ4oEaf.js";import"./WarningIcon-D5nOL17D.js";import"./BaseRadioButton-CRDyZmex.js";import"./Label-DJw0V_wM.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
