import{j as n,r as m}from"./iframe-L5DUEs6c.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BvPsGWG4.js";import i from"./BaseRadioButton.stories-ChBNN3dc.js";import{F as d}from"./FieldGroup-p6krgzvf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dbe6YveO.js";import"./SupportLabel-CNEDyj-L.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-FAR9aXt1.js";import"./Icon-D9dRx7zu.js";import"./WarningIcon-D-lcf5rj.js";import"./BaseRadioButton-Ch1rQSXy.js";import"./Label-CeXgHhWr.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
