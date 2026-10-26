import{j as m,r as s}from"./iframe-BDowEic7.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-CrkFmjzr.js";import{F as n}from"./FieldGroup-B3Askdy1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DcvgQiU4.js";import"./types-BlFGa32c.js";import"./Label-DNX1_yxp.js";import"./SupportLabel-Be6hjFK5.js";import"./SuccessIcon-BE1hrWH1.js";import"./Icon-lkR-RzAa.js";import"./WarningIcon-DK7pz7er.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const G=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
