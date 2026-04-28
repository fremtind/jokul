import{j as n,r as m}from"./iframe-CYo2bzf2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ByVQeAZO.js";import i from"./BaseRadioButton.stories-C6EQoyYE.js";import{F as d}from"./FieldGroup-CdrFe38I.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-lzBfx5oD.js";import"./SupportLabel-BpH0qqus.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Ch5ifE-q.js";import"./Icon-BcLOdyqu.js";import"./BaseRadioButton-Cn1dqCvh.js";import"./Label-C9QhsEar.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
