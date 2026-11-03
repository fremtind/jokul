import{j as n,r as m}from"./iframe-kg9S_bw1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BnTnz1Vy.js";import i from"./BaseRadioButton.stories-Dw53MPlP.js";/* empty css               */import{F as p}from"./FieldGroup-DLat1vlR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DDxJ8xWM.js";import"./SupportLabel-D_7E-CCH.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BdeQmeSx.js";import"./Icon-BwLLaNFX.js";import"./BaseRadioButton-eogd-emD.js";import"./Label-DDpbDdfc.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
