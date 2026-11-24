import{j as m,r as s}from"./iframe-Wm_sJeYn.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-C53KmlYP.js";import{F as n}from"./FieldGroup-BTxG38kS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B1cfVyRh.js";import"./types-BlFGa32c.js";import"./Label-CnvaV-Pf.js";import"./SupportLabel-XCt3ykTb.js";import"./SuccessIcon-DQHn3n4y.js";import"./Icon-pVh8A5FQ.js";import"./WarningIcon-ByUcgAWA.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},G=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
