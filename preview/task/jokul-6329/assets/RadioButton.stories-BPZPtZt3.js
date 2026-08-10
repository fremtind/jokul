import{j as n,r as m}from"./iframe-DoSr2XR5.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DCrUKS3k.js";import i from"./BaseRadioButton.stories-gJQ3XuOg.js";import{F as d}from"./FieldGroup-DPEB5pNw.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CZ0vz_Ho.js";import"./SupportLabel-DpUTA-LC.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BN2v2eig.js";import"./Icon-CfhpMij7.js";import"./WarningIcon-J7NpUERY.js";import"./BaseRadioButton-Chj6Otib.js";import"./Label-B2seRaRd.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
