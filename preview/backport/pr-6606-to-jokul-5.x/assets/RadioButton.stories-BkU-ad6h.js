import{j as n,r as m}from"./iframe-DoZ409uh.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BmuslMzp.js";import s from"./BaseRadioButton.stories-DwP-20yN.js";import{F as p}from"./FieldGroup-DAlpzQ8u.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-iTcm_5l2.js";import"./SupportLabel-DBoaz8oJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CTsj7I9k.js";import"./Icon-CJzzlkpx.js";import"./types-IsTkoTmK.js";import"./WarningIcon-fs98jhjS.js";import"./BaseRadioButton-DUXjJOvh.js";import"./Label-B7C4sZh0.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
