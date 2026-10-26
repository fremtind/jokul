import{j as n,r as m}from"./iframe-BDowEic7.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CA4DIPks.js";import s from"./BaseRadioButton.stories-BQ3qh_40.js";import{F as p}from"./FieldGroup-B3Askdy1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DcvgQiU4.js";import"./SupportLabel-Be6hjFK5.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BE1hrWH1.js";import"./Icon-lkR-RzAa.js";import"./types-BlFGa32c.js";import"./WarningIcon-DK7pz7er.js";import"./BaseRadioButton-CsKDtvLf.js";import"./Label-DNX1_yxp.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
