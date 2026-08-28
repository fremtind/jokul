import{j as n,r as m}from"./iframe-EPvOlv_F.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D4kHjMxE.js";import i from"./BaseRadioButton.stories-Oi0axBVJ.js";import{F as d}from"./FieldGroup-DFsmQcWj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CqIl3Kfh.js";import"./SupportLabel-BLgrsNEN.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-nftInbf3.js";import"./Icon-DKP1ftMT.js";import"./WarningIcon-CaBWEXmc.js";import"./BaseRadioButton-Vk8FjGem.js";import"./Label-Ww55hA2i.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
