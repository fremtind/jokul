import{j as n,r as m}from"./iframe-KbORsCiT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CaGhzlbX.js";import i from"./BaseRadioButton.stories-F8EbTXYo.js";import{F as d}from"./FieldGroup-CEXjklWl.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-SGkDPlhg.js";import"./SupportLabel-D4XCd4hh.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Rjd63akh.js";import"./Icon-DI1Inwwd.js";import"./BaseRadioButton-Csxhg-as.js";const S={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const h=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,h as __namedExportsOrder,S as default};
