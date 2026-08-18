import{j as n,r as m}from"./iframe-DOBCU8kQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CxfGRYDG.js";import i from"./BaseRadioButton.stories-D71yo7l2.js";import{F as d}from"./FieldGroup-DE9qXDg1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CXB3Zr3G.js";import"./SupportLabel-BBSXTZoR.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BKieQBzw.js";import"./Icon-DS9DME7z.js";import"./WarningIcon-7n3zjhXd.js";import"./BaseRadioButton-DDZ2Mnne.js";import"./Label-C3z8vwrB.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
