import{j as n,r as m}from"./iframe-K9Il6deX.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BB8q2ZKQ.js";import i from"./BaseRadioButton.stories--ZHF0QvY.js";import{F as d}from"./FieldGroup-B_6JhBhF.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BRmEO37g.js";import"./SupportLabel-iHABdbXi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-mAq983Gv.js";import"./Icon-Dtflrzde.js";import"./WarningIcon-C_Gm2eNP.js";import"./BaseRadioButton-BoFz3bCF.js";import"./Label-DiABTGZP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
