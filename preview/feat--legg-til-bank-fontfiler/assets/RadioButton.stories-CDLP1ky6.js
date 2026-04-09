import{j as n,r as m}from"./iframe-C1ZkCZ_7.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Ds_Hu1Qo.js";import i from"./BaseRadioButton.stories-BtG4Fqak.js";import{F as d}from"./FieldGroup-D0Dz1sU5.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CRvxeqzD.js";import"./SupportLabel-UKFXnvVO.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-wRkRRGEq.js";import"./Icon-Ddf8TYMD.js";import"./BaseRadioButton-9BGFlvJm.js";import"./Label-C0lFyyB8.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
