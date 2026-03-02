import{j as n,r as m}from"./iframe-BPrugpj5.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-xzHaRRR-.js";import i from"./BaseRadioButton.stories-FHQTluAf.js";import{F as d}from"./FieldGroup-By3XmeVZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-qG_-aakc.js";import"./SupportLabel-DKc-UMba.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C-n42exV.js";import"./Icon-K8V9N-MZ.js";import"./BaseRadioButton-DXiqCoXl.js";import"./Label-DBK2xjTu.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
