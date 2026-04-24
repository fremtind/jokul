import{j as p,r as a}from"./iframe-CXgwpKa7.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BKyH4aQz.js";import{H as s,m as n}from"./Help.stories-ncFg8sTC.js";import c from"./RadioButton.stories-CoM1qa_O.js";import{F as d}from"./FieldGroup-CMqrjJfY.js";import{R as l}from"./RadioButton-DcgQU4nj.js";import{C as u}from"./Checkbox-CejxET2a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DpU4Afpi.js";import"./Label-BegNYejL.js";import"./SupportLabel-Bq7nMTiR.js";import"./WarningIcon-CFnoYucP.js";import"./Icon-DLPznytG.js";import"./Button-DrwzKJq_.js";import"./usePreviousValue-BDnrJ9kJ.js";import"./Loader-tvFSVo9H.js";import"./useDelayedRender-IaaH8es6.js";/* empty css               *//* empty css               */import"./Flex-BK8WFkh9.js";import"./SlotComponent-DtI1MQdE.js";import"./mergeRefs-Dya5rqmC.js";import"./BaseRadioButton.stories-g2H5z0O2.js";import"./BaseRadioButton-4Fe-Z5cR.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
