import{j as p,r as a}from"./iframe-BLeAhhIL.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-vw_q356g.js";import{H as s,m as n}from"./Help.stories-BKmRFVAu.js";import c from"./RadioButton.stories-ZsOoLaV4.js";import{F as d}from"./FieldGroup-DNKikElE.js";import{R as l}from"./RadioButton-BQMdeYD9.js";import{C as u}from"./Checkbox-CgYP6RjV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CTOIuq__.js";import"./Label-C_Ic-qo6.js";import"./SupportLabel-BgWLOxmw.js";import"./WarningIcon-DUz9kJeO.js";import"./Icon-WB4tCFsM.js";import"./Button-DFw938tg.js";import"./usePreviousValue-BIGP9YRD.js";import"./Loader-BYaD3c4t.js";import"./useDelayedRender-NHBBXFdU.js";/* empty css               *//* empty css               */import"./Flex-B2dALx8U.js";import"./SlotComponent-C10hnbTZ.js";import"./mergeRefs-Cu5YeNGC.js";import"./BaseRadioButton.stories-D8icWREZ.js";import"./BaseRadioButton-By3yvruM.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
