import{j as n,r as m}from"./iframe-C0iG7Ac0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-2RQt9OMe.js";import i from"./BaseRadioButton.stories-Bs3oUr-U.js";import{F as d}from"./FieldGroup-DRPSXz4t.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CLMcdZ2I.js";import"./SupportLabel-BcXS5ewK.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BQzSF3Yq.js";import"./Icon-I5-aMHhB.js";import"./WarningIcon-DIanTeMk.js";import"./BaseRadioButton-br_7s_vs.js";import"./Label-BQbob5rz.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
