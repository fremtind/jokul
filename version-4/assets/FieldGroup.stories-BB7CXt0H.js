import{r as a,j as p}from"./iframe-CM7nxelw.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-sH4j_VLF.js";import{H as s,m as n}from"./Help.stories-aU7IIlPQ.js";import c from"./RadioButton.stories-CLDKGvtH.js";import{F as d}from"./FieldGroup-DeXLVi-U.js";import{C as l}from"./Checkbox-D0NDbByW.js";import{R as u}from"./RadioButton-BLtgCvJv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Co4TV8Nw.js";import"./Button-B-8OjlDq.js";import"./usePreviousValue-D7YRsZIv.js";import"./Loader-JNfastOH.js";import"./useDelayedRender-DL2SWpb9.js";/* empty css               *//* empty css               */import"./Flex-VxpZhBzx.js";import"./SlotComponent-mMr6b-CJ.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-D-d1gzZo.js";import"./BaseRadioButton-BR3LusZG.js";import"./useId-BpMq4DVk.js";/* empty css               */import"./Label-l6hHPgZL.js";import"./SupportLabel-C_vZoTjj.js";import"./WarningIcon-c1qIu5Fx.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
