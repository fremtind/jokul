import{j as m,r as s}from"./iframe-BVjcNEb5.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-Yybni-zH.js";import{F as n}from"./FieldGroup-CVM5qaV_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bb1ExcvL.js";import"./Label-B0GIa1Yp.js";import"./SupportLabel-D2Al2d6H.js";import"./SuccessIcon-CSCJCthT.js";import"./Icon-B3sdwb9P.js";import"./WarningIcon-CTeCv8lS.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const y=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
