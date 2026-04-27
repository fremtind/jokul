import{j as n,r as m}from"./iframe-RZuzlvdg.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BL831JW1.js";import i from"./BaseRadioButton.stories-CWYFbzsX.js";import{F as d}from"./FieldGroup-DCrdB0fb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-pRp_S193.js";import"./SupportLabel-CnEEsmQh.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C3Qvwc8z.js";import"./Icon-NiaQj2UL.js";import"./BaseRadioButton-BCWZjFb6.js";import"./Label-DSEHvFmM.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
