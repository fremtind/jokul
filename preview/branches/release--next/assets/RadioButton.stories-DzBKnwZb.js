import{j as n,r as m}from"./iframe-B93scUG8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-pKxLmSY4.js";import i from"./BaseRadioButton.stories-BtA2yt1Z.js";import{F as d}from"./FieldGroup-Dx-D76ZT.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BRDNXIiN.js";import"./SupportLabel-CzauhOgV.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DzUSw9yX.js";import"./Icon-B9uNnDz3.js";import"./BaseRadioButton-DCWJ0Al9.js";import"./Label-DVL7n51w.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
