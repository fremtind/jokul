import{j as n,r as m}from"./iframe-eI5Yzu0I.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bbbm_A1l.js";import i from"./BaseRadioButton.stories-DCb3_VyF.js";import{F as d}from"./FieldGroup-Y8ei4H4i.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dd6XYVyd.js";import"./SupportLabel-CfRO289f.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-cQAzyIo2.js";import"./Icon-DZoB488I.js";import"./WarningIcon-dKOCNXbb.js";import"./BaseRadioButton-CU0wnJNz.js";import"./Label-CcK93DWg.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
