import{j as n,r as m}from"./iframe-B5-EsWES.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DIup8ibj.js";import i from"./BaseRadioButton.stories-C5EULP6z.js";import{F as d}from"./FieldGroup-KMVqODXy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DLNMEdKy.js";import"./SupportLabel-gbYwLygJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CMZwq4Ft.js";import"./Icon-C_9kVWMg.js";import"./WarningIcon-BQzW7-bU.js";import"./BaseRadioButton-BUZ2qd6C.js";import"./Label-BVenPMYm.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
