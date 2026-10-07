import{j as m,r as s}from"./iframe-CbDy8VtV.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-DSJscNrL.js";import{F as n}from"./FieldGroup-BjMwhNa6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CvnY-NT8.js";import"./types-YjSsgwWY.js";import"./Label-DNtFcu3y.js";import"./SupportLabel-BEctcun_.js";import"./SuccessIcon-DJV-t2JM.js";import"./Icon-DLyrvcZF.js";import"./WarningIcon-qBC3zuer.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const G=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
