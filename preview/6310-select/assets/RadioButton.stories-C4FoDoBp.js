import{j as n,r as m}from"./iframe-pic0ffbJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BUs1eZ_e.js";import i from"./BaseRadioButton.stories-yjMe9O7a.js";import{F as d}from"./FieldGroup-CYIWKCeu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B995XECr.js";import"./SupportLabel-CyLGMEss.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-IaSl7rGS.js";import"./Icon-DFIbroby.js";import"./WarningIcon-387XWbOt.js";import"./BaseRadioButton-CMCMJvkI.js";import"./Label-BupzjsnG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
