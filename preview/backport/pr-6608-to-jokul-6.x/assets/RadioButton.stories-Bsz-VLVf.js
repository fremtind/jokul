import{j as n,r as m}from"./iframe-cUEJAGQV.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cv9pPKFY.js";import i from"./BaseRadioButton.stories-BuUGjq3O.js";import{F as d}from"./FieldGroup-BiQxlpPr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C9k8ZGyv.js";import"./SupportLabel-D4BRyd2K.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DS62q5YX.js";import"./Icon-DZEkoCUB.js";import"./WarningIcon-BlHIFFUJ.js";import"./BaseRadioButton-CjIjfhpC.js";import"./Label-DmmrjKba.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
