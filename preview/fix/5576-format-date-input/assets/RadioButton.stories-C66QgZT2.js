import{j as n,r as m}from"./iframe-Bp3W7Mku.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DeDdaGsh.js";import i from"./BaseRadioButton.stories-B1g0IJjr.js";import{F as d}from"./FieldGroup-CwA0Fd5K.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BBhc62CX.js";import"./SupportLabel-7LaEgDny.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BUzvYGsq.js";import"./Icon-BGayrPtR.js";import"./BaseRadioButton-CnfEDRCb.js";import"./Label-Qg5sxTDT.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
