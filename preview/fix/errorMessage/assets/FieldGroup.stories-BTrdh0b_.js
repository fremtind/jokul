import{r as a,j as p}from"./iframe-2g7SZH6R.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BUQjxYWf.js";import{H as s,m as n}from"./Help.stories-D7Yg8ys2.js";import c from"./RadioButton.stories-CB9WuIhK.js";import{F as d}from"./FieldGroup-Dsjf6EhB.js";import{C as l}from"./Checkbox-dRqjToRP.js";import{R as u}from"./RadioButton-B0nKed6M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BMyYnRVP.js";import"./Button-CMg5-GnG.js";import"./usePreviousValue-DweFJ6-f.js";import"./Loader-DMZ98fFQ.js";import"./useDelayedRender-DWfHp_kh.js";/* empty css               *//* empty css               */import"./Flex-CLCjiDA9.js";import"./SlotComponent-C-bKIj70.js";import"./mergeRefs-C6IzhpkQ.js";import"./BaseRadioButton.stories-BdOPmo6L.js";import"./BaseRadioButton-DoxGrJkK.js";import"./useId-CVeQxUMZ.js";import"./Label-BTZMEeLQ.js";import"./SupportLabel-D8VOrv1j.js";import"./SuccessIcon-LN3iRBUy.js";import"./WarningIcon-D3gsu0c9.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
