import{j as n,r as m}from"./iframe-Rw3mIGFx.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-COJwAndT.js";import i from"./BaseRadioButton.stories-BD1P5zJn.js";import{F as d}from"./FieldGroup-Dtw1-2Xs.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BwvMQ2s9.js";import"./SupportLabel-BE76ZHVf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BpobXr9N.js";import"./Icon-qPN9F97A.js";import"./WarningIcon-Bo1jy9N8.js";import"./BaseRadioButton-cC05IiK1.js";import"./Label-DCyT1h49.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
