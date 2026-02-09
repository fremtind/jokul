import{j as n,r as m}from"./iframe-kKdVED43.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Ce9MfShT.js";import i from"./BaseRadioButton.stories-CZF-bpzL.js";import{F as d}from"./FieldGroup-CBG2QsEX.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CQMp5ms0.js";import"./SupportLabel-DzhOTjHy.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Dd4Lk6Uv.js";import"./Icon-fmOI86Nh.js";import"./BaseRadioButton-wRntV9IU.js";import"./Label-C2B5jYYn.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
