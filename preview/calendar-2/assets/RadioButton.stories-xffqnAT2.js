import{j as n,r as m}from"./iframe-B7BRrnZk.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B7RzBKTl.js";import i from"./BaseRadioButton.stories-BeuXj4r2.js";import{F as d}from"./FieldGroup-Cq7HBxsD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-gyv7jAtv.js";import"./SupportLabel-Co7SwUDP.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B960KZK0.js";import"./Icon-D3JfHITU.js";import"./WarningIcon-BUCY9ITV.js";import"./BaseRadioButton-CcHUG0Hk.js";import"./Label-L_Ua2Xx4.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
