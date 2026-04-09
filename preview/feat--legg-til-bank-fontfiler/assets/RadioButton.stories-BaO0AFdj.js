import{j as n,r as m}from"./iframe-Di8xP12O.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cz_TeTGu.js";import i from"./BaseRadioButton.stories-7wQhJc8V.js";import{F as d}from"./FieldGroup-CSuL8A8X.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1otdQ2D.js";import"./SupportLabel-PyU0Ye50.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C1c0pYaU.js";import"./Icon-BgPs3Juh.js";import"./BaseRadioButton-BXp8FH1C.js";import"./Label-D0_ODwp8.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
