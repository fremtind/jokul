import{j as n,r as m}from"./iframe-DXmxd_y0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cry7F8Co.js";import i from"./BaseRadioButton.stories-dsB_xfyo.js";import{F as d}from"./FieldGroup-BIx56AU8.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-TdKZOOCS.js";import"./SupportLabel-CiJyRhpW.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BrM_3dxT.js";import"./Icon-DGZU5bVl.js";import"./WarningIcon-CPDstyYC.js";import"./BaseRadioButton-ECwzRyBB.js";import"./Label-ByK2DaKk.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
