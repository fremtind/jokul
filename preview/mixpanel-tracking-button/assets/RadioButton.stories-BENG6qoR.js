import{j as n,r as m}from"./iframe-A5c2Wqvk.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Wt9zCBFl.js";import i from"./BaseRadioButton.stories-Bj4VYy6y.js";import{F as d}from"./FieldGroup-CRltiMYq.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BqJ3Mudq.js";import"./SupportLabel-CkMYJ3oD.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-PvcmUODX.js";import"./Icon-aN8z_x5R.js";import"./WarningIcon-BGoIXnrD.js";import"./BaseRadioButton-Dp4QPNXk.js";import"./Label-B8MgGNDM.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
