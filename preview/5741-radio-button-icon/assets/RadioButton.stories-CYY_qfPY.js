import{j as n,r as m}from"./iframe-Dj21Fc3v.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CJ3Rmw9N.js";import i from"./BaseRadioButton.stories-DLm_WCpx.js";import{F as d}from"./FieldGroup-mmDg3Grr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DE7Dmv8g.js";import"./SupportLabel-6HDchEWi.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DAWin-dq.js";import"./Icon-B9R5IrPc.js";import"./BaseRadioButton-BjxkViB0.js";import"./Label-LD949fRX.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
