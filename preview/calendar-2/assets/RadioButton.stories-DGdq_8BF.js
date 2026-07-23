import{j as n,r as m}from"./iframe-D3qkQg-r.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CgIUuV6R.js";import i from"./BaseRadioButton.stories-B7FU8iGa.js";import{F as d}from"./FieldGroup-DrqEdWQt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-lfl0CoI0.js";import"./SupportLabel-BybGj_LF.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BeJlH9C8.js";import"./Icon-ChqHTCl8.js";import"./WarningIcon-g8tB-bu0.js";import"./BaseRadioButton-DbmcUSyg.js";import"./Label-BT9j_3TI.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
