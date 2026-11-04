import{j as n,r as m}from"./iframe-CZnQbNJJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B8-mRD7Z.js";import i from"./BaseRadioButton.stories-DjZbn9qt.js";import{F as d}from"./FieldGroup-ewwWhbAx.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1URDt_k.js";import"./SupportLabel-CV_uO8wp.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DZuJ45LN.js";import"./Icon-CeRW3bek.js";import"./WarningIcon-1MHE1hFI.js";import"./BaseRadioButton-BRJuf6cb.js";import"./Label-BRGZ2bsW.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
