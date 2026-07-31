import{j as n,r as m}from"./iframe-DS5jWHMc.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BL8fNPxT.js";import i from"./BaseRadioButton.stories-BOGY4QuN.js";import{F as d}from"./FieldGroup-CKEizpYB.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-cDkoBkZ8.js";import"./SupportLabel-CYN-1ZXk.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Ceg4Xzaz.js";import"./Icon-Bo8ildnN.js";import"./WarningIcon-DoYUZ1D-.js";import"./BaseRadioButton-CZCVmp2Z.js";import"./Label-BaiqBdmy.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
