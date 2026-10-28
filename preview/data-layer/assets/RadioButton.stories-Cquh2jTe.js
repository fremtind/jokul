import{j as n,r as m}from"./iframe-CwSNRyjS.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BAX4KHHC.js";import s from"./BaseRadioButton.stories-Bf14SI0d.js";import{F as p}from"./FieldGroup-C6QrNPS6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D59ROXkP.js";import"./SupportLabel-7fWB7vbh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CHXogH1G.js";import"./Icon-BCU2RSZD.js";import"./types-BlFGa32c.js";import"./WarningIcon-DlhFPOfT.js";import"./BaseRadioButton-LMg5UEbp.js";import"./Label-gm9EXROs.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
