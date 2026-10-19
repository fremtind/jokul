import{j as n,r as m}from"./iframe-at0A36gf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C-a70h8X.js";import i from"./BaseRadioButton.stories-DBJfjAGs.js";import{F as d}from"./FieldGroup-Bu0cLW9_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CYBPaYox.js";import"./SupportLabel-Caeiz6gt.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D8A0rDXb.js";import"./Icon-C7HOc4ut.js";import"./WarningIcon-Dkc9Cerp.js";import"./BaseRadioButton-hcJsKjWV.js";import"./Label-DTt7MysM.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
