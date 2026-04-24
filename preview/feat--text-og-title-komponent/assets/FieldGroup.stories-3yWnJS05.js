import{j as p,r as a}from"./iframe-CAvyxty0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DzzchhR9.js";import{H as s,m as n}from"./Help.stories-DSMBs5FG.js";import c from"./RadioButton.stories-yvq8fbWH.js";import{F as d}from"./FieldGroup-BKiuIHmF.js";import{R as l}from"./RadioButton-jLVnH0rg.js";import{C as u}from"./Checkbox-BQNuG7re.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-aPnkfxBx.js";import"./Label-StfGwIoG.js";import"./SupportLabel-Dpx-XpKl.js";import"./WarningIcon-BSr-tb_U.js";import"./Icon-BBSc38vQ.js";import"./Button-EleuTYmd.js";import"./usePreviousValue-DaIjIJOt.js";import"./Loader-XdGjAGpq.js";import"./useDelayedRender-CeTADRDU.js";/* empty css               *//* empty css               */import"./Flex-Bn8msaNC.js";import"./SlotComponent-CY4THTg3.js";import"./mergeRefs-CfVxjwB3.js";import"./BaseRadioButton.stories-C-XcUOZw.js";import"./BaseRadioButton-AhQwpsqW.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
