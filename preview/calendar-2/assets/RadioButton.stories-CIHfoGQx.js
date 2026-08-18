import{j as n,r as m}from"./iframe-B_ZprsNo.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BUhy9ZpT.js";import i from"./BaseRadioButton.stories-V53aBKMP.js";import{F as d}from"./FieldGroup-Djb4BGsW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-VjQkGL6A.js";import"./SupportLabel-C-EZjCMJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-TRT5yn3z.js";import"./Icon-BrhMsI5_.js";import"./WarningIcon-DpGWfTt7.js";import"./BaseRadioButton-B0Yq9Exm.js";import"./Label-BUzYHGSH.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
