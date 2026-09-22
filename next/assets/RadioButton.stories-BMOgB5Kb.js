import{j as n,r as m}from"./iframe-C00GwemB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D6WiIA7l.js";import i from"./BaseRadioButton.stories-CcB_dQlD.js";import{F as d}from"./FieldGroup-sM4p0ZrL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DepeaZtw.js";import"./SupportLabel-DpzQbeZa.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CamR9-tx.js";import"./Icon-DNfHBJmy.js";import"./WarningIcon-CU9g0gBy.js";import"./BaseRadioButton-3C6CZwLo.js";import"./Label-DGzGSd4a.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
