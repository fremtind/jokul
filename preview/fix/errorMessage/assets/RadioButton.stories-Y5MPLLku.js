import{j as n,r as m}from"./iframe-DuiO5f86.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DlA25K0t.js";import i from"./BaseRadioButton.stories-Dp1uKcUP.js";import{F as d}from"./FieldGroup-BZ5pz3d2.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DB7qe3B6.js";import"./SupportLabel-BMkOPIYa.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-jq9M4MQF.js";import"./Icon-Dq3Plndg.js";import"./WarningIcon-Cquk04X1.js";import"./BaseRadioButton-DchoZY-M.js";import"./Label-c1ph978m.js";const b={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button",args:{value:"radio-button"}},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button",
  args: {
    value: "radio-button"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const h=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,h as __namedExportsOrder,b as default};
