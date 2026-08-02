import{j as n,r as m}from"./iframe-DCXAhuRy.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CTXlpf3f.js";import i from"./BaseRadioButton.stories-CMs7V8PL.js";import{F as d}from"./FieldGroup-CVvYWhXP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-FaBSEY2Q.js";import"./SupportLabel-CJMi1dxc.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-JOXGa2lG.js";import"./Icon-CG6DKFD0.js";import"./WarningIcon-DyYtsQiP.js";import"./BaseRadioButton-BBWxrgr1.js";import"./Label-BJSCStQj.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
