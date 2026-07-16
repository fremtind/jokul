import{j as n,r as m}from"./iframe-Fogd4u-O.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CUtV_SwZ.js";import i from"./BaseRadioButton.stories-EamNHu7K.js";import{F as d}from"./FieldGroup-D1znz9k7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Byp1mMrW.js";import"./SupportLabel-nYrFsgD1.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CmaBM1fW.js";import"./Icon-CkFUtKGo.js";import"./WarningIcon-C4kBGKuD.js";import"./BaseRadioButton-Wpbc6gu2.js";import"./Label-CffE1AF0.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
