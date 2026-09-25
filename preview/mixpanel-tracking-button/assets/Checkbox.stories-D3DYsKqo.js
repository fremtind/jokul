import{j as m,r as s}from"./iframe-DeSfocgQ.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-U1pWaM1N.js";import{F as n}from"./FieldGroup-Cs4yGJys.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-HdsHRNi4.js";import"./serializeTracking-CnAc4iKu.js";import"./Label-CNKHvCqb.js";import"./SupportLabel-Bsd_Jdi_.js";import"./SuccessIcon-NYoup3pz.js";import"./Icon-J-LIvZH4.js";import"./WarningIcon-DHLA2Hvc.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const G=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
