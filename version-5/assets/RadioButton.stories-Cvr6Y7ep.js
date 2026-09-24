import{j as n,r as m}from"./iframe-DBzUJUvj.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C0_kwE8k.js";import i from"./BaseRadioButton.stories-D89JCqWb.js";import{F as d}from"./FieldGroup-By6bSRYK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BC-TyTJ2.js";import"./SupportLabel-KJBF9G-4.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Cuj7seq0.js";import"./Icon-C-lNmd4f.js";import"./WarningIcon-CAg6xK0-.js";import"./BaseRadioButton-CDtsfRrV.js";import"./Label-au_d2mKN.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
