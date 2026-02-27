import{j as n,r as m}from"./iframe-OPoxwQOS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BMnZgjwh.js";import i from"./BaseRadioButton.stories-4yQPI9Xj.js";import{F as d}from"./FieldGroup-B-_4eaTE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DncDbf-5.js";import"./SupportLabel-xI_V-Xq_.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CJMIa-_2.js";import"./Icon-Ama-Epv7.js";import"./BaseRadioButton-y3gVB7bv.js";import"./Label-JCa4WvtE.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
