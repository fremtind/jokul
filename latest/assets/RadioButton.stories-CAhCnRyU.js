import{j as n,r as m}from"./iframe-CoyBcSLH.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DYsJlzyY.js";import i from"./BaseRadioButton.stories-BxFlFF-2.js";import{F as d}from"./FieldGroup-BEZ78_Mm.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DS7qQ2Ov.js";import"./SupportLabel-BYQ9G36s.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dm7po2t2.js";import"./Icon-Dt96Ro48.js";import"./WarningIcon-p7dFOrLC.js";import"./BaseRadioButton-C3fWx8AJ.js";import"./Label-B-C5yXQ9.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
