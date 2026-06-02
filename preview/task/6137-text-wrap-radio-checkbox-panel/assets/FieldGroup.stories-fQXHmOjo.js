import{r as a,j as p}from"./iframe-DhKUXa_W.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-r-uzPjSG.js";import{H as s,m as n}from"./Help.stories-YOa8C0zv.js";import c from"./RadioButton.stories-3ZdMF3yq.js";import{F as d}from"./FieldGroup-C6BxN-ly.js";import{C as l}from"./Checkbox-DscgPofF.js";import{R as u}from"./RadioButton-CZlnZoHT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BWmKNv8q.js";import"./Button-dqNOZJkI.js";import"./usePreviousValue-86khHWtM.js";import"./Loader-BqmSQu1U.js";import"./useDelayedRender-BVOpoKXa.js";/* empty css               *//* empty css               */import"./Flex-DKyH7rS1.js";import"./SlotComponent-DcNiKuO-.js";import"./mergeRefs-WYqflWGO.js";import"./BaseRadioButton.stories-CD-SiKbm.js";import"./BaseRadioButton-YUURr9Gx.js";import"./useId-DG4cCcwB.js";/* empty css               */import"./Label-BhwaHXWv.js";import"./SupportLabel-BvUpvDSR.js";import"./WarningIcon-CVhbRoad.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
