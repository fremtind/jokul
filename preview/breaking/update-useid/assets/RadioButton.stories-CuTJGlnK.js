import{j as n,r as m}from"./iframe-B5mfZ-Bz.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bnq1yT3o.js";import i from"./BaseRadioButton.stories-LfftjOOQ.js";import{F as d}from"./FieldGroup-10t2r6RA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-r-KKINOU.js";import"./SupportLabel-CJajXsO3.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon--CeXJ96w.js";import"./Icon-CvT2WxaM.js";import"./WarningIcon-BXZ6v2RX.js";import"./BaseRadioButton-or6gxxmS.js";import"./Label-SSgplOrD.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
