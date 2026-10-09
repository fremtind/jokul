import{j as n,r as m}from"./iframe-CnMz4HRP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BRIVlVEx.js";import i from"./BaseRadioButton.stories-Dp5aa3wG.js";import{F as d}from"./FieldGroup-Cil7qz0E.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BigCagN-.js";import"./SupportLabel-BiZIysfB.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DD5xKpi3.js";import"./Icon-C15m9CtP.js";import"./WarningIcon-HsndgcYb.js";import"./BaseRadioButton-DD0kCjrG.js";import"./Label-oesX5CzL.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
