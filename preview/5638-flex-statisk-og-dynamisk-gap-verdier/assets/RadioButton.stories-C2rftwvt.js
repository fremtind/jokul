import{j as n,r as m}from"./iframe-6ywf5xmB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CUv0RxZY.js";import i from"./BaseRadioButton.stories-FbE_1OeD.js";import{F as d}from"./FieldGroup-Djv0TEYY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CuZVPcZi.js";import"./SupportLabel-CePpN6Y6.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DSYg1vYY.js";import"./Icon-BfqNN8ed.js";import"./BaseRadioButton-X81XpFMV.js";import"./Label-DyXKFnDs.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
