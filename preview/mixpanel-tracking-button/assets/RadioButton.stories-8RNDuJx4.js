import{j as n,r as m}from"./iframe-CuBW0rq2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BC0s_f8K.js";import i from"./BaseRadioButton.stories-BCbKvuVD.js";import{F as d}from"./FieldGroup-DQnZDpPu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId--kUd0__q.js";import"./SupportLabel-DlxxdsrV.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CBiSxNWq.js";import"./Icon-dpGkSZJ3.js";import"./WarningIcon-B8W8N3WG.js";import"./BaseRadioButton-urLTPRaI.js";import"./Label-DiNlHX53.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
