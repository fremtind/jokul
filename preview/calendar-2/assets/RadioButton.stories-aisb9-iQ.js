import{j as n,r as m}from"./iframe-Cx2puDxY.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C2A1f-Ie.js";import i from"./BaseRadioButton.stories-Cjodvtn_.js";import{F as d}from"./FieldGroup-BDjqHVUb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B792nJEZ.js";import"./SupportLabel-idFLCV_F.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-FqA8rrZg.js";import"./Icon-0kZV7_q4.js";import"./WarningIcon-Bop1YTmK.js";import"./BaseRadioButton-70OATN_F.js";import"./Label-BzkdpbzT.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
