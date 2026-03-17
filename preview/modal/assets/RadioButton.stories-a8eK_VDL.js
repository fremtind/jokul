import{j as n,r as m}from"./iframe-CX4msKD3.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BqU2_9mg.js";import i from"./BaseRadioButton.stories-Deap5j1i.js";import{F as d}from"./FieldGroup-B9thLr0a.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-riKy1vKt.js";import"./SupportLabel-DFpmgT17.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-pnCeMpdH.js";import"./Icon-Z8R12Lm0.js";import"./BaseRadioButton-CT_SYHTb.js";import"./Label-BWQK7QUg.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
