import{j as n,r as m}from"./iframe-CNOaIv5I.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-I6ZElTUJ.js";import i from"./BaseRadioButton.stories-EEikwdrz.js";import{F as d}from"./FieldGroup-Cp-FAJyD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DFoZw1m2.js";import"./SupportLabel-oJPX2yky.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CQmZuhq6.js";import"./Icon-D7Sx2v3m.js";import"./WarningIcon-Drw0JFhN.js";import"./BaseRadioButton-BJSdDomP.js";import"./Label-Ct6KU7fF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
