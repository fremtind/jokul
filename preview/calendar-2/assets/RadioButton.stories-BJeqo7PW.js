import{j as n,r as m}from"./iframe-DQUDbCoN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BY6KM3oJ.js";import i from"./BaseRadioButton.stories-DKHy815Q.js";import{F as d}from"./FieldGroup-pjO5PstP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DQ9J6z34.js";import"./SupportLabel-Cfz-xF7B.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BO9Ft9aW.js";import"./Icon-BizY6quD.js";import"./WarningIcon-OFjcIXeu.js";import"./BaseRadioButton-5y0Fog6R.js";import"./Label-DR8RTLzT.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
