import{j as n,r as m}from"./iframe-BhEenHwl.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B5qxa2Xz.js";import i from"./BaseRadioButton.stories-peYaMaxE.js";import{F as d}from"./FieldGroup-C0R36fxh.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Hgvfjld3.js";import"./SupportLabel-BpaNtbE-.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D3tYiAs0.js";import"./Icon-B2ULfsxr.js";import"./WarningIcon-CHOYZveH.js";import"./BaseRadioButton-DGiWLrY8.js";import"./Label--n0EXK3k.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
