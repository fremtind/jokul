import{j as n,r as m}from"./iframe-B0Kr074j.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BrL2_pju.js";import i from"./BaseRadioButton.stories-21s8uII-.js";import{F as d}from"./FieldGroup-Bed-70lg.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-EVF01UfS.js";import"./SupportLabel-oWOVe8Gf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Bz-gAu-M.js";import"./Icon-BERwx20O.js";import"./WarningIcon-kPtZuz2C.js";import"./BaseRadioButton-Pm3rVs1M.js";import"./Label-BgjVgtFb.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
