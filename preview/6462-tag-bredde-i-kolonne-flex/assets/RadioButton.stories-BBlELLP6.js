import{j as n,r as m}from"./iframe-DHD78tjs.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DNPEDTka.js";import i from"./BaseRadioButton.stories-DembZryr.js";import{F as d}from"./FieldGroup-C4VTekVs.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BfD8L_Y7.js";import"./SupportLabel-z2U0zmGO.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BXmcOft_.js";import"./Icon-Cv9XDEUJ.js";import"./WarningIcon-DHLwJs7-.js";import"./BaseRadioButton-kKxHHkNx.js";import"./Label-QAGfqQH7.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
