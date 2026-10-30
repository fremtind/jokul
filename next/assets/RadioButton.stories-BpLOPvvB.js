import{j as n,r as m}from"./iframe-6194UuiE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CwZjuctW.js";import i from"./BaseRadioButton.stories-I0nw5G4k.js";import{F as d}from"./FieldGroup-DfFSbOBY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-tzIXILwY.js";import"./SupportLabel-rPtEKtj3.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-kDB8SJDt.js";import"./Icon-cKeb2o8z.js";import"./WarningIcon-CbGYm6PH.js";import"./BaseRadioButton-D_NNeAY8.js";import"./Label-DTOMOrLF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
