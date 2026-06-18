import{j as n,r as m}from"./iframe-ZzwWBtT8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D3AwJ08B.js";import i from"./BaseRadioButton.stories-BE-Xbd1t.js";/* empty css               */import{F as p}from"./FieldGroup-CJ06nP05.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CgcJhHpv.js";import"./SupportLabel-DVbN4ZCJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C1ibKWid.js";import"./Icon-OIzdIo2X.js";import"./WarningIcon-DtcPBDgX.js";import"./BaseRadioButton-DLAnfskA.js";import"./Label-CK0K7X_n.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
