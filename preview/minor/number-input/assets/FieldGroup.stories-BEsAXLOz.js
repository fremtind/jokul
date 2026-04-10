import{j as p,r as a}from"./iframe-DmXXyIBV.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C_Avn0kh.js";import{H as s,m as n}from"./Help.stories-DQAQX_qR.js";import c from"./RadioButton.stories-BlU21SBJ.js";import{F as d}from"./FieldGroup-BMtaoILo.js";import{R as l}from"./RadioButton-Bjn4wdvq.js";import{C as u}from"./Checkbox-BCK3yv1E.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-nTbfMIE8.js";import"./Label-VyEfTODx.js";import"./SupportLabel-CAlEh86c.js";import"./WarningIcon-Ts8NU93h.js";import"./Icon-C8SuYPSR.js";import"./Button-DrcBi9mx.js";import"./usePreviousValue-D045lK5u.js";import"./Loader-BEtnn_1V.js";import"./useDelayedRender-viACRn3v.js";/* empty css               *//* empty css               */import"./Flex-C4bw_9Dq.js";import"./SlotComponent-qhU-TlvP.js";import"./mergeRefs-00irH9Ij.js";import"./BaseRadioButton.stories-DzSzX-s3.js";import"./BaseRadioButton-CMGd6wHo.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
