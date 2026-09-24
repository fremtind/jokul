import{j as n,r as m}from"./iframe-CiVsWS6y.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BE43ujAj.js";import i from"./BaseRadioButton.stories-CjWk3fYC.js";import{F as d}from"./FieldGroup-a890C1SP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-3Y2yqkCa.js";import"./SupportLabel-DfVm-37G.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BjcC43Qu.js";import"./Icon-BP3iwf0T.js";import"./WarningIcon-D9vcil_R.js";import"./BaseRadioButton-CPaLyXGV.js";import"./Label-mu-Dh9SP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
