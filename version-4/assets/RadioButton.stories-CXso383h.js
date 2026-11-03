import{j as n,r as m}from"./iframe-2ssKPK5p.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DF4dzdt5.js";import i from"./BaseRadioButton.stories-UMfxUVWg.js";/* empty css               */import{F as p}from"./FieldGroup-ClkklsgD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-y4WqJUQb.js";import"./SupportLabel-CQnfgEX3.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CajbV473.js";import"./Icon-Bux7J4HQ.js";import"./BaseRadioButton-D3BrXwGD.js";import"./Label-Bg48KiXx.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
