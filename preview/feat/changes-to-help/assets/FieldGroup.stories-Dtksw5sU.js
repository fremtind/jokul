import{j as p,r as a}from"./iframe-C2YKX-8j.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-YuXC4SFa.js";import s from"./Help.stories-BA4JcV6r.js";import n from"./RadioButton.stories-DiRLyZ3d.js";import{F as c}from"./FieldGroup-DMQzT7sc.js";import{R as d}from"./RadioButton-Bx17mmYT.js";import{C as l}from"./Checkbox-B-OjdVlE.js";import{H as u}from"./Help-BoMM2N8u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CLGA92EW.js";import"./Label-ZF0-J9Du.js";import"./SupportLabel-DdpdNEQZ.js";import"./WarningIcon-ClWCirF-.js";import"./Icon-DknYA1hw.js";/* empty css               *//* empty css               */import"./Flex-jyZyAL-2.js";import"./SlotComponent-en6UpXPk.js";import"./mergeRefs-B-57NzFC.js";import"./BaseRadioButton.stories-2Qt76ovL.js";import"./BaseRadioButton-BzTrSDxK.js";import"./Button-CXUS3ZKy.js";import"./usePreviousValue-BnPTLIMR.js";import"./Loader-D5y3v45g.js";import"./useDelayedRender-DJa8G1sW.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
