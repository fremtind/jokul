import{j as n,r as m}from"./iframe-CIVRzKA_.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D5Mr-sd2.js";import i from"./BaseRadioButton.stories-kh1SvXK9.js";import{F as d}from"./FieldGroup-C2mL58fh.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-RbGnblEd.js";import"./SupportLabel-Dk0yAnMB.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D14Iz4xh.js";import"./Icon-syLHOKG6.js";import"./WarningIcon-D18XrPZL.js";import"./BaseRadioButton-CdPWX_qp.js";import"./Label-iK5MUJg1.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
