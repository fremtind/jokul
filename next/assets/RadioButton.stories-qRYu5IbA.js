import{j as n,r as m}from"./iframe-ctCUr1dU.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BDPGYSAb.js";import i from"./BaseRadioButton.stories-DVEWrl2t.js";import{F as d}from"./FieldGroup-BOTt8BVZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cr31zXjN.js";import"./SupportLabel-CU5Ixuht.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-kRyEJpks.js";import"./Icon-C9UxPlIN.js";import"./WarningIcon-BhQqkk1u.js";import"./BaseRadioButton-CZP41jJV.js";import"./Label-BKY0mSgP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
