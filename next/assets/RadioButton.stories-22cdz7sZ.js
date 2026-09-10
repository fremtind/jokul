import{j as n,r as m}from"./iframe-Clh-zdRB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-N5EUhiaA.js";import i from"./BaseRadioButton.stories-PoNJhA39.js";import{F as d}from"./FieldGroup-BDsdx1yl.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DAigUxJv.js";import"./SupportLabel-C2F7Ph2X.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-J6tmFMdB.js";import"./Icon-1FYWhicE.js";import"./WarningIcon-DZanq2Ec.js";import"./BaseRadioButton-CWvZ3HJM.js";import"./Label-B62bVx9z.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
