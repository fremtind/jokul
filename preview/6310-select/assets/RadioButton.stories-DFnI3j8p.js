import{j as n,r as m}from"./iframe-DnyE-E3F.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BjBVU2ol.js";import i from"./BaseRadioButton.stories-CeNOFqmg.js";import{F as d}from"./FieldGroup-Ba7R5HUJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId--OEKCC-C.js";import"./SupportLabel-Ts8wCra6.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BHM2S5Yo.js";import"./Icon-D8fC03lV.js";import"./WarningIcon-CIbovJPt.js";import"./BaseRadioButton-D-Yv77vR.js";import"./Label-DYRf7KLv.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
