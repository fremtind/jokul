import{r as a,j as p}from"./iframe-BUprc3LF.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BxtqbmoQ.js";import s from"./Help.stories-BfI-cwjW.js";import n from"./RadioButton.stories-18tpfeSO.js";import{F as c}from"./FieldGroup-D2RCV_2a.js";import{C as d}from"./Checkbox-BdHBVgA0.js";import{H as l}from"./Help-0iBeMFqS.js";import{R as u}from"./RadioButton-CNXJ4TJG.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-B0VM5WVF.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B6iiGNUn.js";import"./mergeRefs-cfCYCK0R.js";import"./BaseRadioButton.stories-C4KagrjR.js";import"./BaseRadioButton-DQDfT0Hg.js";import"./useId-GUh6XCYW.js";/* empty css               */import"./Label-DMSbuh6M.js";import"./SupportLabel-Dfn2iHAw.js";import"./WarningIcon-CUVyv9jw.js";import"./Icon-BSZAwLB9.js";import"./Button-CClirhQT.js";import"./usePreviousValue-B__mXeix.js";import"./Loader-CBZ6YF35.js";import"./useDelayedRender-ByQywnnt.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
