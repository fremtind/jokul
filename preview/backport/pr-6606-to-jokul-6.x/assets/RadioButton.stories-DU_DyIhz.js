import{j as n,r as m}from"./iframe-BSOWj6-v.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-312CEvbv.js";import s from"./BaseRadioButton.stories-1zf_5ukp.js";import{F as p}from"./FieldGroup-CWc_XqNS.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CeGlSt-h.js";import"./SupportLabel-b-7SeMRT.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-4GMyiaev.js";import"./Icon-C365w0L3.js";import"./types-BlFGa32c.js";import"./WarningIcon-BduEda9f.js";import"./BaseRadioButton-vCX9uxxr.js";import"./Label-DO_kdEPk.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
