import{j as n,r as m}from"./iframe-BfMzzhNF.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CCTdDccK.js";import i from"./BaseRadioButton.stories-y3Ylh-nJ.js";import{F as d}from"./FieldGroup-CUIMsSo8.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bq0BzCWF.js";import"./SupportLabel-DckJDHhG.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon--XVU_6uy.js";import"./Icon-D-bnl050.js";import"./WarningIcon-CDNQYf6z.js";import"./BaseRadioButton-DsV_7tzP.js";import"./Label-C52aC3Ya.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
