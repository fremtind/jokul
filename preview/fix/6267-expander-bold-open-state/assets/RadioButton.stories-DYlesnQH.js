import{j as n,r as m}from"./iframe-CFLzMvnQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BsFwx7TL.js";import i from"./BaseRadioButton.stories-C3KovAMh.js";import{F as d}from"./FieldGroup-D4S4_4Dg.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-e48b_PAc.js";import"./SupportLabel-N4B_tAMA.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BCIQwI68.js";import"./Icon-LJ1R2N8I.js";import"./WarningIcon-0fhme6rt.js";import"./BaseRadioButton-BERFxRl5.js";import"./Label-DpvzhsTV.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
