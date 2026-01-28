import{j as n,r as m}from"./iframe-Df_g0_Xe.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D4_UwMVO.js";import i from"./BaseRadioButton.stories-Cbadh-mG.js";import{F as d}from"./FieldGroup-CvF8p0Yw.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-1wjk1hdk.js";import"./SupportLabel-CZyAGnEn.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C4gbmnr8.js";import"./Icon-DWOpZPM4.js";import"./BaseRadioButton-CmTWeJXp.js";import"./Label-CjlHuWv1.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
