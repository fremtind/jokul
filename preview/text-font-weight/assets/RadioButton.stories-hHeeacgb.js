import{j as n,r as m}from"./iframe-CgQef7Se.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CivA3Sis.js";import i from"./BaseRadioButton.stories-SiqR3r2F.js";import{F as d}from"./FieldGroup-pY3g3Ulk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BR2Dqx8h.js";import"./SupportLabel-CAs3TpwR.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BFtCjQ7T.js";import"./Icon-CB1p32SI.js";import"./WarningIcon-tPyzfaEu.js";import"./BaseRadioButton-Dis3fQwR.js";import"./Label-BnOxf6xg.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
