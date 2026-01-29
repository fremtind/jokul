import{j as n,r as m}from"./iframe-DJFnyI4A.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-VDyd-tJz.js";import i from"./BaseRadioButton.stories-C8geb3KH.js";import{F as d}from"./FieldGroup-DzSPUUvc.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BTaRkWFQ.js";import"./SupportLabel-DPOzf6ju.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D6HxpDC7.js";import"./Icon-DwPjshoC.js";import"./BaseRadioButton-Ct9FgxPi.js";import"./Label-sX2X8X0T.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
