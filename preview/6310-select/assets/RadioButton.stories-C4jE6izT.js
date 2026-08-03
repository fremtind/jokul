import{j as n,r as m}from"./iframe-CHf12XfP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DUUoHgSL.js";import i from"./BaseRadioButton.stories-MmRxHKlH.js";import{F as d}from"./FieldGroup-D3AQ3QSd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BVFiF4SG.js";import"./SupportLabel-Ce1x4-jy.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BpIC86U3.js";import"./Icon-DVa1JWUW.js";import"./WarningIcon-_8OXw8sw.js";import"./BaseRadioButton-E0E1RkkB.js";import"./Label-CbeJTgVG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
