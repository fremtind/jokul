import{j as n,r as m}from"./iframe-DoW2Y4x0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-3gSo7MzV.js";import i from"./BaseRadioButton.stories-B_7UNWEd.js";/* empty css               */import{F as p}from"./FieldGroup-Cvf6iyku.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CXL5FoLy.js";import"./SupportLabel-B1tRAVQd.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Bp4rAufJ.js";import"./Icon-DyUNnyvc.js";import"./BaseRadioButton--h7QEpc_.js";import"./Label-BBJ_Od9Y.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
