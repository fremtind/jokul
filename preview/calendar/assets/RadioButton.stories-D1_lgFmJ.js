import{j as n,r as m}from"./iframe-DpjkOQ8O.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DZUH3ohH.js";import i from"./BaseRadioButton.stories-qBU5Dnix.js";import{F as d}from"./FieldGroup-C35LZeJO.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DTRRMGag.js";import"./SupportLabel-DMvh_9pM.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Bq1f-G08.js";import"./Icon-DoYTsjUc.js";import"./WarningIcon-7DjkdTtF.js";import"./BaseRadioButton-BnEmyIYv.js";import"./Label-AbhwbM_A.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
