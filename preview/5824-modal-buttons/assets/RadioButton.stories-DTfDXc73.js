import{j as n,r as m}from"./iframe-C6DTywqF.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DeOxf3W5.js";import i from"./BaseRadioButton.stories-h6i5_Vq9.js";import{F as d}from"./FieldGroup-ilHXTpHD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BfXdyA4N.js";import"./SupportLabel-HYh5rth2.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CjwG_voP.js";import"./Icon-DtMNsZn9.js";import"./BaseRadioButton-eC0K7CqX.js";import"./Label-C_-5UMTv.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
