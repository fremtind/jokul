import{j as n,r as m}from"./iframe-C_mNNbVC.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ftSy71mn.js";import i from"./BaseRadioButton.stories-BhyeOq_9.js";import{F as d}from"./FieldGroup-D-Uj0edf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CyVNNBJ_.js";import"./SupportLabel-C55F_toD.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CbTpC7D7.js";import"./Icon-CyHgbs3A.js";import"./WarningIcon-D-0CesMg.js";import"./BaseRadioButton-C30u4P6L.js";import"./Label-wwd07eAA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
