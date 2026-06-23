import{j as s,r as m}from"./iframe-Dr1UPJtt.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-u5KRHn-t.js";import{F as n}from"./FieldGroup-Cebl-AWv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-qc5a6cGU.js";import"./Label-Dy_Df6wg.js";import"./SupportLabel-D3yCHFW7.js";import"./SuccessIcon-DEjSlgbp.js";import"./Icon-BpYOlmuK.js";import"./WarningIcon-Dz8coMW5.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={},o={render:a=>s.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>m.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const y=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
