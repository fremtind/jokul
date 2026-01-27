import{j as n,r as m}from"./iframe-DicxysLi.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-OyySjS0R.js";import i from"./BaseRadioButton.stories-BNDQMdJ8.js";import{F as d}from"./FieldGroup-Cn8HrE2K.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CvjfBmxc.js";import"./SupportLabel-C9OcwY2C.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BG_8itxf.js";import"./Icon-B_jRdtEs.js";import"./BaseRadioButton-BReHBZbE.js";import"./Label-Boi6ApQd.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
