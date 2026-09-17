import{j as n,r as m}from"./iframe-BdAFB_N8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BOMX7y5n.js";import i from"./BaseRadioButton.stories-C8hn3vEq.js";import{F as d}from"./FieldGroup-BU3WawYc.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BRhEUS-b.js";import"./SupportLabel-rGoo-Oj0.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-h3dB38ol.js";import"./Icon-B5yhDZxL.js";import"./WarningIcon-BCtd2aJq.js";import"./BaseRadioButton-D7Shd5Fo.js";import"./Label-CUdfB-lC.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
