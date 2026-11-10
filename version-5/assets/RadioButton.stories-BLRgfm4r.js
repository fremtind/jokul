import{j as n,r as m}from"./iframe-Bn7VsF7L.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CBZtDtxZ.js";import i from"./BaseRadioButton.stories-CPGaSUPW.js";import{F as d}from"./FieldGroup-_3N7_gl1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-YQFeCZS-.js";import"./SupportLabel-8hJIeuft.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-33TG4sbU.js";import"./Icon-CBTH6Uzi.js";import"./WarningIcon-D4U4Rico.js";import"./BaseRadioButton-B1J8Ri6E.js";import"./Label-5Fya-z7U.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
