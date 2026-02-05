import{j as n,r as m}from"./iframe-B14fq7Ce.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DDAbzd3g.js";import i from"./BaseRadioButton.stories-D_6egEBr.js";import{F as d}from"./FieldGroup-8CniupSX.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dr1SQTfn.js";import"./SupportLabel-35Gr9ZBx.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DGOpWOsc.js";import"./Icon-Cmy_zgVx.js";import"./BaseRadioButton-Bfqmm2_s.js";import"./Label-DHSwOFOI.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
