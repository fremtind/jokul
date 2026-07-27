import{j as n,r as m}from"./iframe-D1Dznsl1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-amjG7haG.js";import i from"./BaseRadioButton.stories-DJYAGilm.js";import{F as d}from"./FieldGroup-YA2sAmyD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DeH5F3Px.js";import"./SupportLabel-9p-ED60P.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-By8Z3QrT.js";import"./Icon-C0zizoRc.js";import"./WarningIcon-C5N0t-nv.js";import"./BaseRadioButton-CRheFcBW.js";import"./Label-CmOeaGWP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
