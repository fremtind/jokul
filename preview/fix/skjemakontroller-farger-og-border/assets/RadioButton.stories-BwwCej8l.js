import{j as n,r as m}from"./iframe-DSIcDLeC.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BtNidWnf.js";import i from"./BaseRadioButton.stories-zeaBka3f.js";import{F as d}from"./FieldGroup-Dk_n5PJj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CNjgfnja.js";import"./SupportLabel-BPn_mVs2.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Qm_MD47y.js";import"./Icon-B8fBmajg.js";import"./WarningIcon-BWxpFuB3.js";import"./BaseRadioButton-Cux_g5KE.js";import"./Label-D-WAj2g1.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
