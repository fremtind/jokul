import{j as p,r as a}from"./iframe-DuNqkHS3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-VkMc0hIM.js";import{H as s,m as n}from"./Help.stories-8QUdMYEn.js";import c from"./RadioButton.stories-DYlRh_4E.js";import{F as d}from"./FieldGroup-CpvITr83.js";import{R as l}from"./RadioButton-DWxx2m2p.js";import{C as u}from"./Checkbox-LqN2tcBI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DAxLpPSy.js";import"./Label-DRBUExUl.js";import"./SupportLabel-C4PwR32j.js";import"./WarningIcon-K05IgXY1.js";import"./Icon--G-YsyU8.js";import"./Button-DF8myN-D.js";import"./usePreviousValue-BNrSfDtr.js";import"./Loader-nGxU7qlu.js";import"./useDelayedRender-COcTSRkc.js";/* empty css               *//* empty css               */import"./Flex-DD8YLj4r.js";import"./SlotComponent-CaZGJ2Ts.js";import"./mergeRefs-a8KrbMlq.js";import"./BaseRadioButton.stories-D1a_32jP.js";import"./BaseRadioButton-DGIY7voe.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
