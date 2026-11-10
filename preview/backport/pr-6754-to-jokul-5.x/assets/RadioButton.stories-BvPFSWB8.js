import{j as n,r as m}from"./iframe-CcM6qoOR.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-1AfW6zfA.js";import i from"./BaseRadioButton.stories-hoW4apUC.js";import{F as d}from"./FieldGroup-BqBf_NcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Nw1uZbQi.js";import"./SupportLabel-CmX-W01a.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Ic2SNjUS.js";import"./Icon-DmxvbU6o.js";import"./WarningIcon-BCtCQd_B.js";import"./BaseRadioButton-CJodEV96.js";import"./Label-BvFQANSm.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
