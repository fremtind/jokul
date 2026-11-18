import{j as m,r as s}from"./iframe-CNJEdzjQ.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-Bq0NS0P8.js";import{F as n}from"./FieldGroup-CzFCZEh6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-64hJZ9wV.js";import"./Label-cMQ6cwo6.js";import"./SupportLabel-ikDJAq8g.js";import"./SuccessIcon-78lCoh1X.js";import"./Icon-CDVOw3dB.js";import"./WarningIcon-Cc8WTJP-.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},y=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
