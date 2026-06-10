import{r as a,j as p}from"./iframe-BoY3t5WQ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CwoYyOhg.js";import{H as s,m as n}from"./Help.stories-BtRMdfS_.js";import c from"./RadioButton.stories-CWxP_Suf.js";import{F as d}from"./FieldGroup-47rLWOSi.js";import{C as l}from"./Checkbox-NnWSbLYI.js";import{R as u}from"./RadioButton-BJ7YjX6z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CG9f-6Uy.js";import"./Button-CN5nT4Rg.js";import"./usePreviousValue-BIaBuQ8C.js";import"./Loader-CqJAfyNO.js";import"./useDelayedRender-khy9vNeQ.js";/* empty css               *//* empty css               */import"./Flex-BZbT-g7J.js";import"./SlotComponent-DuroIWFK.js";import"./mergeRefs-BoiDI9d5.js";import"./BaseRadioButton.stories-Bus2v-py.js";import"./BaseRadioButton-Dl_0S5tG.js";import"./useId-CBtDWUmk.js";/* empty css               */import"./Label-B9ADCcbP.js";import"./SupportLabel-i0F-Hmsu.js";import"./SuccessIcon-ns1Atsrd.js";import"./WarningIcon-_DRD_p4Z.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
