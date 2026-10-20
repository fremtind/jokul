import{j as n,r as m}from"./iframe-B5Kj9iD6.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D_nrwJun.js";import i from"./BaseRadioButton.stories-B8CloeQI.js";import{F as d}from"./FieldGroup-C1gnvh5a.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-pqm6co_M.js";import"./SupportLabel-YqRNllhm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CXsW_sE2.js";import"./Icon-ByBkpEs3.js";import"./WarningIcon-1E9DlQoy.js";import"./BaseRadioButton-f5u36de1.js";import"./Label-567fJjDj.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
