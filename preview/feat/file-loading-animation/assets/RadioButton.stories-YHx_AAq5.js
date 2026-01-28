import{j as n,r as m}from"./iframe-GjBJY2wS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B0R3_vtv.js";import i from"./BaseRadioButton.stories-BDUIULNK.js";import{F as d}from"./FieldGroup-Dr37Z5Mu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D9Q1DzXJ.js";import"./SupportLabel-Cxarg-rh.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C1uTN3D8.js";import"./Icon-83dA_bTg.js";import"./BaseRadioButton-DYYwMs0a.js";import"./Label-CSq2Pzd4.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
