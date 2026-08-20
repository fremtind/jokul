import{j as n,r as m}from"./iframe--zksvJjO.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton--2PQXc--.js";import i from"./BaseRadioButton.stories-De2Nm2pD.js";import{F as d}from"./FieldGroup-Bf-H2J3L.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-9TUTJXHX.js";import"./SupportLabel-BiJhNxoj.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D8jO_X8k.js";import"./Icon-D2KLGRYq.js";import"./WarningIcon-DTLPEwK3.js";import"./BaseRadioButton-BvbQ1U7i.js";import"./Label-CQRtII-x.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
