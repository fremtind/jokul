import{j as n,r as m}from"./iframe-CT96bI_e.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BmbtgoW1.js";import i from"./BaseRadioButton.stories-Dv15kGIG.js";import{F as d}from"./FieldGroup-D7u0NXPD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BJO-s8Ax.js";import"./SupportLabel-TZHTTMFf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CfoBP64e.js";import"./Icon-hbz4p5Zk.js";import"./WarningIcon-X4HfGa2r.js";import"./BaseRadioButton-C9OqqnDJ.js";import"./Label-mGwZHayP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
