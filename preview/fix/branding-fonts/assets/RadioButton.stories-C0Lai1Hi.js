import{j as n,r as m}from"./iframe-C9auSC1D.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C0CLoIPd.js";import i from"./BaseRadioButton.stories-7nzemlCY.js";import{F as d}from"./FieldGroup-CdVmIn1o.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-S6HvOhy3.js";import"./SupportLabel-DU_GX9kp.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CbY24pID.js";import"./Icon-DKGrAUD8.js";import"./BaseRadioButton-Dc1mmwo2.js";import"./Label-BDBjBnNg.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
