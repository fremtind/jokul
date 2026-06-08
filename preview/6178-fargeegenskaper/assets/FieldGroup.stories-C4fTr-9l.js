import{r as a,j as p}from"./iframe-B7WCfH1h.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DVLMLHLN.js";import{H as s,m as n}from"./Help.stories-CoNF8mGW.js";import c from"./RadioButton.stories-CqB72Z3s.js";import{F as d}from"./FieldGroup-D10A3lmi.js";import{C as l}from"./Checkbox-H1oLaBpQ.js";import{R as u}from"./RadioButton-Bz7U_elH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Be07sP4R.js";import"./Button-BKPR0aqb.js";import"./usePreviousValue-BmurZI9o.js";import"./Loader-DKIwiXID.js";import"./useDelayedRender-CZ10Kn4e.js";/* empty css               *//* empty css               */import"./Flex-Cl4KdoxN.js";import"./SlotComponent-Cz2tPN74.js";import"./mergeRefs-D9yvPhAI.js";import"./BaseRadioButton.stories-D7Q8nxb9.js";import"./BaseRadioButton-WJfY5ykC.js";import"./useId-9z4367v-.js";/* empty css               */import"./Label-B8tjKPu7.js";import"./SupportLabel-DIQ4aPA3.js";import"./WarningIcon-BfwHghw7.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
