import{j as p,r as a}from"./iframe-BoBIgav0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dw9EHoJs.js";import{H as s,m as n}from"./Help.stories-Dgek8w_G.js";import c from"./RadioButton.stories-J9Wr2fJp.js";import{F as d}from"./FieldGroup-DMsEcR6P.js";import{R as l}from"./RadioButton-C5Se6qtO.js";import{C as u}from"./Checkbox-YrZSrzCZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-V-T7z63-.js";import"./Label-CQ1TtUu3.js";import"./SupportLabel-UzQFXXIZ.js";import"./WarningIcon-DakBnpyG.js";import"./Icon-Bi0sWDEU.js";import"./Button-nnHT428k.js";import"./usePreviousValue-CF2vPzBO.js";import"./Loader-DRfPImX-.js";import"./useDelayedRender-CKIWCnhk.js";/* empty css               *//* empty css               */import"./Flex-DsC2hIxx.js";import"./SlotComponent-DD1WAVBj.js";import"./mergeRefs-CL58jV2k.js";import"./BaseRadioButton.stories-NpxGaZiv.js";import"./BaseRadioButton-Bhlny5o4.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
