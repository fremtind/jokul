import{j as n,r as m}from"./iframe-CDskDVd3.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DqQWPRn3.js";import i from"./BaseRadioButton.stories-PYCjyL_E.js";import{F as d}from"./FieldGroup-DiLyi_NY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CLp_Cuzu.js";import"./SupportLabel-Bg3BdEHf.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CW7_FNmZ.js";import"./Icon-DCpRypxG.js";import"./BaseRadioButton-BCWImKHz.js";import"./Label-844O8U-l.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
