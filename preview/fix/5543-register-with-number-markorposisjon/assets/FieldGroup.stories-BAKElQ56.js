import{r as a,j as p}from"./iframe-kXbSLwYJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Blpbj_iM.js";import{H as s,m as n}from"./Help.stories-DTBQYWNK.js";import c from"./RadioButton.stories-DuOGfxwm.js";import{F as d}from"./FieldGroup-NF5SAD1x.js";import{C as l}from"./Checkbox-DZaTiAfS.js";import{R as u}from"./RadioButton-D-grLpqF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CeBi9Uh0.js";import"./Button-q2HnKSGM.js";import"./usePreviousValue-ssJ_xZrA.js";import"./Loader-NtomM8iP.js";import"./useDelayedRender-7rXol_x8.js";/* empty css               *//* empty css               */import"./Flex-B7dY1IDJ.js";import"./SlotComponent-CGRG66Kq.js";import"./mergeRefs-D6-Wuotu.js";import"./BaseRadioButton.stories-CVrGfsvK.js";import"./BaseRadioButton-PMSSljvS.js";import"./useId-7wxEn1Qf.js";/* empty css               */import"./Label-bcMBEZ__.js";import"./SupportLabel-Bw82VH-K.js";import"./WarningIcon-lET3jEEG.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
