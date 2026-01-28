import{j as n,r as m}from"./iframe-eTaGQAU4.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-hW0K9LX7.js";import i from"./BaseRadioButton.stories-DrdFkCzt.js";import{F as d}from"./FieldGroup-G6QUTim_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-lN2LkL18.js";import"./SupportLabel-BIIxtZuo.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DcKwn4FP.js";import"./Icon-e-9WAIdf.js";import"./BaseRadioButton-55hLrpSe.js";import"./Label-BXTSL62e.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
