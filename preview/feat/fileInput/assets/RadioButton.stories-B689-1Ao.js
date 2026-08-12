import{j as n,r as m}from"./iframe-CCkNp658.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C_vq5BqE.js";import i from"./BaseRadioButton.stories-BO1CG2_y.js";import{F as d}from"./FieldGroup-BB4TyzJP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CvfFh10d.js";import"./SupportLabel-1_pVOlld.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CNJG27Ac.js";import"./Icon--GwmWcAC.js";import"./WarningIcon-Bq3K-S47.js";import"./BaseRadioButton-Dh2DbPlR.js";import"./Label-DBoOzlKV.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
