import{j as n,r as m}from"./iframe-BnNwtD6d.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-9Z5V0mxJ.js";import i from"./BaseRadioButton.stories-BEENbCCS.js";import{F as d}from"./FieldGroup-syX3XzMt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Doi9kP89.js";import"./SupportLabel-C3wlhdkd.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DZI2_JVB.js";import"./Icon-Bivm725_.js";import"./WarningIcon-C2T6tFoB.js";import"./BaseRadioButton-BMzh5GXi.js";import"./Label-fFKlWS4I.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
