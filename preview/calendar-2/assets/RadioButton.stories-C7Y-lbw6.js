import{j as n,r as m}from"./iframe-DczHPdlv.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BtOSiZZX.js";import i from"./BaseRadioButton.stories-CG9gzhQ9.js";import{F as d}from"./FieldGroup-BvvwVLpc.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-pHBeU-vi.js";import"./SupportLabel-Cv_UVzm5.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DIhEpNqE.js";import"./Icon-CbdNsX6z.js";import"./WarningIcon-nqVKxOXy.js";import"./BaseRadioButton-a3Mfr15h.js";import"./Label-D5w0ElEA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
