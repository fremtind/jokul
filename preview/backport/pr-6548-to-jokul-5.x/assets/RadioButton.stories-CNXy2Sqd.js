import{j as n,r as m}from"./iframe-CWbZGvkT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DaEbJqQY.js";import i from"./BaseRadioButton.stories-DWtJx5VU.js";import{F as d}from"./FieldGroup-CGHjF9JY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DpTBIRdb.js";import"./SupportLabel-BFnBY2CH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CgvfVImO.js";import"./Icon-CEqkQWQ6.js";import"./WarningIcon-D1MfRup8.js";import"./BaseRadioButton-PKsFsbGL.js";import"./Label-OFXotbdg.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
