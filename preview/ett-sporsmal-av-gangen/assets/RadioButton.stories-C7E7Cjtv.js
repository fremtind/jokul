import{j as n,r as m}from"./iframe-FLdELv7d.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-36lubvIr.js";import i from"./BaseRadioButton.stories-DXWQt4Qv.js";import{F as d}from"./FieldGroup-Bw1EkzCt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D5Nr1i6z.js";import"./SupportLabel-DTec24sd.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CpHdLTov.js";import"./Icon-D0Tk7Syc.js";import"./WarningIcon-9p3ao5nb.js";import"./BaseRadioButton-DUxMk2Ze.js";import"./Label-CwqYwVaF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
