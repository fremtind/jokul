import{j as p,r as a}from"./iframe-D8skWxng.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D6f1yuSN.js";import{H as s,m as n}from"./Help.stories-CnZZH_do.js";import c from"./RadioButton.stories-DgxN-0Jc.js";import{F as d}from"./FieldGroup-3TV-bh-N.js";import{R as l}from"./RadioButton-D6xbK3fW.js";import{C as u}from"./Checkbox-CkixOzXh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-X5bniTuY.js";import"./Label-YKUc6BQS.js";import"./SupportLabel-kXpbJQ8L.js";import"./WarningIcon-C8VTFkPz.js";import"./Icon-BDMX7WMC.js";import"./Button-DXwLI3Ec.js";import"./usePreviousValue-DmkFoHSm.js";import"./Loader-DbahMauC.js";import"./useDelayedRender-D3_C6d78.js";/* empty css               *//* empty css               */import"./Flex-D4TQdaoT.js";import"./SlotComponent-CyzULi7I.js";import"./mergeRefs-mwfphkx9.js";import"./BaseRadioButton.stories-Bd-t-7TP.js";import"./BaseRadioButton-CUzebXe4.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
