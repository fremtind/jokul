import{j as n,r as m}from"./iframe-DCDlZb6L.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-o6soy3og.js";import i from"./BaseRadioButton.stories-CbMXqgiV.js";import{F as d}from"./FieldGroup-ylAUIB4d.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bq75RZ4u.js";import"./SupportLabel-Br5uGGIM.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CmUqIKhI.js";import"./Icon-66mQvxtN.js";import"./WarningIcon-Dq-Rs-8S.js";import"./BaseRadioButton-O60BlB4-.js";import"./Label-1fzz-MMP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
