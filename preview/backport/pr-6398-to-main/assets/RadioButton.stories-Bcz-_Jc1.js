import{j as n,r as m}from"./iframe-CT62Sfwj.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ClDmkfdU.js";import i from"./BaseRadioButton.stories-BT2lDK_v.js";import{F as d}from"./FieldGroup-D1Y636SY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-XTstPFYp.js";import"./SupportLabel-DyIvrju7.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-EE1ugPXL.js";import"./Icon-2FTdHYut.js";import"./WarningIcon-CE89W6iF.js";import"./BaseRadioButton-CyfZ_H-4.js";import"./Label-B0GQq2RL.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
