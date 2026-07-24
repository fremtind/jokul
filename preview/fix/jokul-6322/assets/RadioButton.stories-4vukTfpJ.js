import{j as n,r as m}from"./iframe-Dh9PGa5f.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BJayesVJ.js";import i from"./BaseRadioButton.stories-BIIn41-D.js";import{F as d}from"./FieldGroup-BipmBtlE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bm2ghA4j.js";import"./SupportLabel-B3EF7YEz.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-dO48cnfq.js";import"./Icon-Bf_UiLRx.js";import"./WarningIcon-_xSqMxtR.js";import"./BaseRadioButton-nuXinYXF.js";import"./Label-Tg3_mEI_.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
