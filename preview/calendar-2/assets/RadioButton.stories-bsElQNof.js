import{j as n,r as m}from"./iframe-CFpyWcZO.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DRrlObqR.js";import i from"./BaseRadioButton.stories-fl-TyT9q.js";import{F as d}from"./FieldGroup-BeeoPQaH.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-o1urWYOd.js";import"./SupportLabel-aeWJzMQ8.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B1r_Q0Et.js";import"./Icon-DsczttUB.js";import"./WarningIcon-DLGgcFEu.js";import"./BaseRadioButton-C9AMf1tk.js";import"./Label-Qf3_QM92.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
