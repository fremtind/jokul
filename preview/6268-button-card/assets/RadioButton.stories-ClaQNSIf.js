import{j as n,r as m}from"./iframe-DcspcoJm.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-LBztSH9_.js";import i from"./BaseRadioButton.stories-BrdQi7G-.js";import{F as d}from"./FieldGroup-Mo3BAvUK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DADu1_zR.js";import"./SupportLabel-fIWJX4iE.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DRuccw52.js";import"./Icon-DsiCRD7F.js";import"./WarningIcon-bmlkTP4w.js";import"./BaseRadioButton-Dfm0cFym.js";import"./Label-DpsEGUdA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
