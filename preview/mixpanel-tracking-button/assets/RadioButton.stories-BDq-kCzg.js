import{j as n,r as m}from"./iframe-Djqlfj0e.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BHwO01KE.js";import i from"./BaseRadioButton.stories-CWMHT61R.js";import{F as d}from"./FieldGroup-DgG4Q7Mt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dxt3HQG0.js";import"./SupportLabel-DUASFfu5.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-f5NsD79y.js";import"./Icon-qiUL04sw.js";import"./WarningIcon-C430Q8-w.js";import"./BaseRadioButton-BQSpglF2.js";import"./Label-dFrmr9YO.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
