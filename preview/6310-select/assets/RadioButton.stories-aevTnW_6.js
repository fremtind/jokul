import{j as n,r as m}from"./iframe-DgPY-3PA.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Y-W_wypn.js";import i from"./BaseRadioButton.stories-CJMjvD7Y.js";import{F as d}from"./FieldGroup-9NLIz5Qx.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-VwJS_MMz.js";import"./SupportLabel-m9x77q0Z.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-SHx9kLVE.js";import"./Icon-DGzGWfyk.js";import"./WarningIcon-DQnoDSWO.js";import"./BaseRadioButton-CWuR3bj7.js";import"./Label-D8INFCHD.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
