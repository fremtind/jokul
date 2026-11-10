import{j as n,r as m}from"./iframe-DqkqP8aV.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BHj1w4Uj.js";import i from"./BaseRadioButton.stories-D7Jm6Afg.js";/* empty css               */import{F as p}from"./FieldGroup-Dc8L6PDv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DRxI8YaO.js";import"./SupportLabel-BdMOkg_E.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CBB1rqGk.js";import"./Icon-DsJoHZQk.js";import"./BaseRadioButton-CCcLESGD.js";import"./Label-DxI5VN_z.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
