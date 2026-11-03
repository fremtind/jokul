import{j as n,r as m}from"./iframe-BtTMFjHF.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-roL3ob6O.js";import i from"./BaseRadioButton.stories-st0Dp9Nv.js";import{F as d}from"./FieldGroup-DdRyWCAR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Ci1A9zZX.js";import"./SupportLabel-Cq_xpzY9.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B5XdCvA1.js";import"./Icon-uhouoM1E.js";import"./WarningIcon-C4p0Bgy9.js";import"./BaseRadioButton-DVFe2nT3.js";import"./Label-DjQCRt95.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
