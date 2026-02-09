import{j as n,r as m}from"./iframe-Gpwh9WPG.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B_r7ANaU.js";import i from"./BaseRadioButton.stories-EuQtpUVm.js";import{F as d}from"./FieldGroup-adAA1uIt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DtTilRcf.js";import"./SupportLabel-BL0xH6bL.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DKssVUta.js";import"./Icon-cKiOag1L.js";import"./BaseRadioButton-CYtsfOuN.js";import"./Label-BlXMOig_.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
