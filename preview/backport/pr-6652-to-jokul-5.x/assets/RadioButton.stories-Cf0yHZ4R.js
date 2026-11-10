import{j as n,r as m}from"./iframe-BByhBRfv.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-0B6XbEMp.js";import i from"./BaseRadioButton.stories-COgosgXp.js";import{F as d}from"./FieldGroup-Bm9oB1Hc.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C3j8QZ27.js";import"./SupportLabel-2RMh1iYy.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CZdhDXXk.js";import"./Icon-Cn3auwl6.js";import"./WarningIcon-CpVFV51N.js";import"./BaseRadioButton-BcbUYVoU.js";import"./Label-ByU2LgM0.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
