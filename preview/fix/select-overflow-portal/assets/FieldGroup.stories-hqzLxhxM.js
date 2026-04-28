import{r as a,j as p}from"./iframe-BH4U4KEG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DYmk83ZM.js";import{H as s,m as n}from"./Help.stories-BULDdIHS.js";import c from"./RadioButton.stories-DM3Gp2kQ.js";import{F as d}from"./FieldGroup-5tJX-cap.js";import{C as l}from"./Checkbox-VbYhWzEC.js";import{R as u}from"./RadioButton-DboK3La3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C70GiKah.js";import"./Button-CHptqvGg.js";import"./usePreviousValue-CVfPix62.js";import"./Loader-afrVmnuI.js";import"./useDelayedRender-DgXu4pVU.js";/* empty css               *//* empty css               */import"./Flex-BOaFr89F.js";import"./SlotComponent-CluaNv-l.js";import"./mergeRefs-AVO5l2tT.js";import"./BaseRadioButton.stories-DM-UW_4o.js";import"./BaseRadioButton-Cu5lXr2H.js";import"./useId-CsO7BxKd.js";/* empty css               */import"./Label-CDRAVubS.js";import"./SupportLabel-BZq-PUSP.js";import"./WarningIcon-BTzTs8_4.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
