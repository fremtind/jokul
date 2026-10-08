import{j as n,r as m}from"./iframe-BUbBSyiw.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B__rfS45.js";import s from"./BaseRadioButton.stories-CcjPtAdX.js";import{F as p}from"./FieldGroup-DhKHWOBn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DaXUHhtD.js";import"./SupportLabel-B-VOgB55.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BcZ3HLj5.js";import"./Icon-htbjGrII.js";import"./types-YjSsgwWY.js";import"./WarningIcon-COjD6mvs.js";import"./BaseRadioButton-r6mbQb4Y.js";import"./Label-BvDrY9Fk.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
