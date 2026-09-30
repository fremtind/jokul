import{r as a,j as p}from"./iframe-CjfWwdtT.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C7-7nNQy.js";import{H as s,m as n}from"./Help.stories-DH3M_jNH.js";import c from"./RadioButton.stories-fgol8WCB.js";import{F as d}from"./FieldGroup-CrsSN9hA.js";import{C as l}from"./Checkbox-eksfyEJS.js";import{R as u}from"./RadioButton-D8BN4MjM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CxEjBU8O.js";import"./Button-BF1d3eiR.js";import"./usePreviousValue-DIh2MvsK.js";import"./Loader-BdQjSKwW.js";import"./useDelayedRender-CO0xXTJQ.js";/* empty css               *//* empty css               */import"./Flex-BxhTtLoq.js";import"./SlotComponent-CAYIFrlN.js";import"./mergeRefs-BSEbWGfZ.js";import"./BaseRadioButton.stories-CQUi1ixP.js";import"./BaseRadioButton-BUgK9gGf.js";import"./useId--q0ZzMw-.js";/* empty css               */import"./Label-DcK-Ksgb.js";import"./SupportLabel-C1r8Tk7I.js";import"./WarningIcon-DH2J8LSs.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
