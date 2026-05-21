import{j as n,r as m}from"./iframe-M5fduR9m.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dhpv86Ie.js";import i from"./BaseRadioButton.stories-CKrM65pk.js";/* empty css               */import{F as p}from"./FieldGroup-Cge5KJdE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DVZZp5w1.js";import"./SupportLabel-D6TmO4L1.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B-uzR7KS.js";import"./Icon-t8YR3Hpe.js";import"./BaseRadioButton-DF8I1U50.js";import"./Label-CO-qkPxu.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
