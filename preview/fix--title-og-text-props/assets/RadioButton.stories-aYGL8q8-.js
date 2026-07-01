import{j as n,r as m}from"./iframe-DWTb4ktk.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DgiiMeco.js";import i from"./BaseRadioButton.stories-BqAtLX6D.js";import{F as d}from"./FieldGroup-kHMPCiXK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CxIMAt84.js";import"./SupportLabel-DFaKB2pJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BtV1t-j1.js";import"./Icon-CZwIt2wW.js";import"./WarningIcon-DBcz8G7O.js";import"./BaseRadioButton-DjNEJDaL.js";import"./Label-BjfBwpPJ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
