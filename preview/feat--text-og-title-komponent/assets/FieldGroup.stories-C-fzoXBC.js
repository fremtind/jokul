import{j as p,r as a}from"./iframe-D4OqJuqI.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CEsFoh8d.js";import s from"./Help.stories-DJUbB3Jc.js";import n from"./RadioButton.stories-C_KUSiIO.js";import{F as c}from"./FieldGroup-BHIsSD7g.js";import{R as d}from"./RadioButton-Cqtcg0fu.js";import{C as l}from"./Checkbox-5EHyO0rZ.js";import{H as u}from"./Help-D5Us57Fv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DNSqY5Vy.js";import"./Label-CpyCt1ZI.js";import"./SupportLabel-C6LJYZ5y.js";import"./WarningIcon-Tu5l594K.js";import"./Icon-DTLvSDZw.js";/* empty css               *//* empty css               */import"./Flex-DUVlCVxA.js";import"./SlotComponent-B_y2UWaq.js";import"./mergeRefs-CP4UnLZn.js";import"./BaseRadioButton.stories-BPrP7ZTe.js";import"./BaseRadioButton-CA33TeWo.js";import"./Button-Kf96kbac.js";import"./usePreviousValue-DKBVkKBZ.js";import"./Loader-CilX1Ia0.js";import"./useDelayedRender-2PfduDkt.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
