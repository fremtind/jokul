import{j as n,r as m}from"./iframe-BesKik0N.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DI1HxpvW.js";import i from"./BaseRadioButton.stories-CoohefRl.js";import{F as d}from"./FieldGroup-n-6Ebtfo.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C1oYgKes.js";import"./SupportLabel-CBZvoOnH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-xwg1odsj.js";import"./Icon-Dxx1mCYg.js";import"./WarningIcon-BdazMg1f.js";import"./BaseRadioButton-C7ipTo7T.js";import"./Label-BdnDTWTJ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
