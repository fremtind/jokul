import{j as n,r as m}from"./iframe-BHB5BHd7.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D42XyCMu.js";import i from"./BaseRadioButton.stories-D7Y_zy0a.js";import{F as d}from"./FieldGroup-DD4ybGUd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DNoFDi3_.js";import"./SupportLabel-DRJf2zyz.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CdGo2RoI.js";import"./Icon-BQlM1nH5.js";import"./WarningIcon-DGNnnh8L.js";import"./BaseRadioButton-uDbMd0cH.js";import"./Label-Djg-fByQ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
