import{j as p,r as a}from"./iframe-q41Z3BPG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B5D8g4Ak.js";import{H as s,m as n}from"./Help.stories-Br6kMhbu.js";import c from"./RadioButton.stories-DSiHwlur.js";import{F as d}from"./FieldGroup-28AwtC91.js";import{R as l}from"./RadioButton-D5y2pxxG.js";import{C as u}from"./Checkbox-B8FHMn0_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CZG946Nl.js";import"./Label-BF6tg-rQ.js";import"./SupportLabel-B8K6zOQw.js";import"./WarningIcon-BRF-5bkL.js";import"./Icon-BmG3ozP5.js";import"./Button-Da3nz-ky.js";import"./usePreviousValue--6uTwkOW.js";import"./Loader-CSjIIfNk.js";import"./useDelayedRender-D6LWkiE0.js";/* empty css               *//* empty css               */import"./Flex-DD0RKPF0.js";import"./SlotComponent-TJfGIC5O.js";import"./mergeRefs-p92n8ure.js";import"./BaseRadioButton.stories-Cll3LOP5.js";import"./BaseRadioButton-aq_5YYyY.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
