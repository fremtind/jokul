import{j as n,r as m}from"./iframe-BrNtw50k.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BliGLo2u.js";import i from"./BaseRadioButton.stories-DDNirYto.js";import{F as d}from"./FieldGroup-BRo0J-5T.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BeQ_DQ32.js";import"./SupportLabel-KIAeb1Ts.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BC1RgzsN.js";import"./Icon-5AbHA9Gm.js";import"./BaseRadioButton-Br_4z7cE.js";import"./Label-DFhw044x.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
