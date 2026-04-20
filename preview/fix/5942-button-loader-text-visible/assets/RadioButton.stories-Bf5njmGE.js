import{j as n,r as m}from"./iframe-D8Fni3Ee.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BZdKHPOP.js";import i from"./BaseRadioButton.stories-B3R5CzIe.js";/* empty css               */import{F as p}from"./FieldGroup-x_Adf3EP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BINUQVK3.js";import"./SupportLabel-Da0VD3H6.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BRwWCumv.js";import"./Icon-4o4BJfM9.js";import"./BaseRadioButton-CDKdOzuo.js";import"./Label-BLA9cqMd.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
