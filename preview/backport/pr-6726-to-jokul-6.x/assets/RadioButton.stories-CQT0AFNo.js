import{j as n,r as m}from"./iframe-JD2e27Mg.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DucDg3P6.js";import i from"./BaseRadioButton.stories-DmEWr-Mf.js";import{F as d}from"./FieldGroup-DxpqxpaZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D4HMUvgA.js";import"./SupportLabel-C3zeU-uY.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BllY-1ct.js";import"./Icon-DJRh6RnC.js";import"./WarningIcon-DkaiuPkj.js";import"./BaseRadioButton-C7oAvScD.js";import"./Label-C_SJnikh.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
