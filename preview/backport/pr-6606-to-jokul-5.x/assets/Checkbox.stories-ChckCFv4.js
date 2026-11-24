import{j as m,r as s}from"./iframe-DP8Xf_qW.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-CR1k7erU.js";import{F as n}from"./FieldGroup-iELpliL-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DCOUoPrx.js";import"./types-IsTkoTmK.js";import"./Label-DF5EMnl-.js";import"./SupportLabel-BKFe5kWx.js";import"./SuccessIcon-CbZ15OhW.js";import"./Icon-k8xo1fZn.js";import"./WarningIcon-1AHRTzaM.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},G=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
