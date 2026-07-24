import{j as n,r as m}from"./iframe-BZmcJa8V.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bi4Sqf-z.js";import i from"./BaseRadioButton.stories-CutvXs9-.js";import{F as d}from"./FieldGroup-K5dhXeny.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B24-RPn9.js";import"./SupportLabel-yINM9cBh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CvA7p0Kz.js";import"./Icon-B4QrTS4L.js";import"./WarningIcon-HsoYDbJw.js";import"./BaseRadioButton-CPeA1y1x.js";import"./Label-BiKRDH54.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
