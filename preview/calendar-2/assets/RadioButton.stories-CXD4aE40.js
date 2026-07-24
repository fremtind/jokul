import{j as n,r as m}from"./iframe-Cjf1vOlA.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C0dLrXBc.js";import i from"./BaseRadioButton.stories-BgP147L6.js";import{F as d}from"./FieldGroup-Dz3O5_NR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-a6xwJViz.js";import"./SupportLabel-DsCm1aTr.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-U9pdly8B.js";import"./Icon-DMgurLya.js";import"./WarningIcon-BNk8XuXd.js";import"./BaseRadioButton-CpQzUrnu.js";import"./Label-Bfk6YG8_.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
