import{r as a,j as p}from"./iframe-DGPj_gG4.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BEYsK3S3.js";import{H as s,m as n}from"./Help.stories-DaOQPgTh.js";import c from"./RadioButton.stories-DKv2re5o.js";import{F as d}from"./FieldGroup-CpdPIeGQ.js";import{C as l}from"./Checkbox-Cahva3L-.js";import{R as u}from"./RadioButton-D-wmbD8Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ChlPNQ1q.js";import"./Button-BE_nyBWu.js";import"./usePreviousValue-CNP_tljn.js";import"./Loader-1dvz--2d.js";import"./useDelayedRender-BqNdRzoy.js";/* empty css               *//* empty css               */import"./Flex-YxKUPCy0.js";import"./SlotComponent-AxMaXlMj.js";import"./mergeRefs-CqI_XM7q.js";import"./BaseRadioButton.stories-H2kVPKmt.js";import"./BaseRadioButton-BpZNT76l.js";import"./useId-xMDCT7sU.js";/* empty css               */import"./Label-D3sECXCL.js";import"./SupportLabel-a0QTaQ2E.js";import"./WarningIcon-DqXO_YXZ.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
