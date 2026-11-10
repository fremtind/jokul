import{j as n,r as m}from"./iframe-BDcbhYCr.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-tOXK8Syz.js";import i from"./BaseRadioButton.stories-DdxBe_Hs.js";import{F as d}from"./FieldGroup-CYR_LocQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B90AG0Mz.js";import"./SupportLabel-7Ghv-gEi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DXnHbuJF.js";import"./Icon-Dis1nrdP.js";import"./WarningIcon-CTcdaRgl.js";import"./BaseRadioButton-0rWp_tK6.js";import"./Label-CaSwVA32.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
