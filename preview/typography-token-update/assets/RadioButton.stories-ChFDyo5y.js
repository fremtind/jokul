import{j as n,r as m}from"./iframe-ILnvEMX0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bz3IqBjg.js";import i from"./BaseRadioButton.stories-BViBNIc2.js";/* empty css               */import{F as p}from"./FieldGroup-BPck5Z0p.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-a_Vczvik.js";import"./SupportLabel-BpFLQIQk.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-jWCr2URv.js";import"./Icon-BoIlNhxQ.js";import"./WarningIcon-CFAKMJIF.js";import"./BaseRadioButton-CUebGrmq.js";import"./Label-WJfE8pAY.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
