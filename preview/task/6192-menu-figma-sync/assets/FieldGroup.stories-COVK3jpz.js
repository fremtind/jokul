import{r as a,j as p}from"./iframe-CrHkJ-gH.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DDUE-Omi.js";import{H as s,m as n}from"./Help.stories-DahX8HzH.js";import c from"./RadioButton.stories-CjVFunbz.js";import{F as d}from"./FieldGroup-CRnMmOiJ.js";import{C as l}from"./Checkbox-BR8k04Iy.js";import{R as u}from"./RadioButton-BFfO8F7U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CHgS02aE.js";import"./Button-u3BurYvF.js";import"./usePreviousValue-CUP5EnxN.js";import"./Loader-BJYwo98l.js";import"./useDelayedRender-CeEkLOmh.js";/* empty css               *//* empty css               */import"./Flex-BbYOcOGT.js";import"./SlotComponent-Cfy_Dbpu.js";import"./mergeRefs-BS9F_zHq.js";import"./BaseRadioButton.stories-BL8WDlDq.js";import"./BaseRadioButton-CKO0s6lW.js";import"./useId-BfhH4dFM.js";/* empty css               */import"./Label-DmHkReGN.js";import"./SupportLabel-D0C21XE-.js";import"./WarningIcon-Bm6Nu5LV.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
