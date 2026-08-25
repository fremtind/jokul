import{j as n,r as m}from"./iframe-6vhmOHsg.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B1XUz9Uw.js";import i from"./BaseRadioButton.stories-DBW4w5iI.js";import{F as d}from"./FieldGroup-CfJIy-0B.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Ck2z70Ue.js";import"./SupportLabel-73nrxP3g.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DLLLEf4P.js";import"./Icon-Ds9UEVTj.js";import"./WarningIcon-kIO4JOE1.js";import"./BaseRadioButton-Dyse5BIB.js";import"./Label-BZ2Njyom.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
