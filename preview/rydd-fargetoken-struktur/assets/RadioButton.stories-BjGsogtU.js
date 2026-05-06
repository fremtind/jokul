import{j as n,r as m}from"./iframe-CRzK_0Ph.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DdAU9AVS.js";import i from"./BaseRadioButton.stories-BS34tqm1.js";import{F as d}from"./FieldGroup-BIvVapzI.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BdUDD9nN.js";import"./SupportLabel-VJW_6EcK.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-R7CnE70Y.js";import"./Icon-Ckx__C7C.js";import"./BaseRadioButton-D18VyQt7.js";import"./Label-ClEeCS3i.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
