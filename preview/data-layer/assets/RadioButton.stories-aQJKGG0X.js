import{j as n,r as m}from"./iframe-C5mqiCLF.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D7JKxMgD.js";import s from"./BaseRadioButton.stories-Cnd2txMj.js";import{F as p}from"./FieldGroup-pac7nFRV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DtC_nmmh.js";import"./SupportLabel-IUODpl5q.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CWAgkxzi.js";import"./Icon-CSRiLZ8e.js";import"./types-YjSsgwWY.js";import"./WarningIcon-CXvAnsoL.js";import"./BaseRadioButton-D2VGNGUO.js";import"./Label-XUot8IJ4.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
