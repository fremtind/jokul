import{j as n,r as m}from"./iframe-Ddit-vK8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4hFztIM.js";import i from"./BaseRadioButton.stories-v5YV_FJX.js";import{F as d}from"./FieldGroup-F7jn2LE1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-rJrHacUc.js";import"./SupportLabel-BiNW2_Zf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Bg6qGM7h.js";import"./Icon-BdwloHPe.js";import"./WarningIcon-B0dUoRr0.js";import"./BaseRadioButton-BoBhzZ_U.js";import"./Label-6KqrvbyU.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
