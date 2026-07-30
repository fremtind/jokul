import{j as n,r as m}from"./iframe-AR3e7Cm7.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BWYzi8gJ.js";import i from"./BaseRadioButton.stories-CA91xXU_.js";import{F as d}from"./FieldGroup-DtJl2qtp.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B64NpeNG.js";import"./SupportLabel-DD1RWk7H.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CR83evoX.js";import"./Icon-D3oY2bLi.js";import"./WarningIcon-BWvZwJf1.js";import"./BaseRadioButton-ByGJbFyI.js";import"./Label-BqXlFKMa.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
