import{r as a,j as p}from"./iframe-C4b7gs0d.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C6xQj1nC.js";import{H as s,m as n}from"./Help.stories-Hz5fCcKd.js";import c from"./RadioButton.stories-Do7hMI3H.js";import{F as d}from"./FieldGroup-Keo0172w.js";import{C as l}from"./Checkbox-B_jn6GAa.js";import{R as u}from"./RadioButton-BbV_PxM2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-47cbDP3M.js";import"./Button-DLKmX-Qd.js";import"./usePreviousValue-CTwgFCri.js";import"./Loader-DZmYzy2m.js";import"./useDelayedRender-Ut-2IGlr.js";/* empty css               *//* empty css               */import"./Flex-CPocBdfI.js";import"./SlotComponent-Ba_A7dKe.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-C3TlwCdn.js";import"./BaseRadioButton-CDE-sk0M.js";import"./useId-LF-LemEq.js";/* empty css               */import"./Label-DODcVyzV.js";import"./SupportLabel-DV2-uKU0.js";import"./WarningIcon-0bvLZnnH.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
