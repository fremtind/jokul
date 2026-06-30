import{r as a,j as p}from"./iframe-R-c9LamX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BIq0BkFq.js";import s from"./Help.stories-rsxbSj2d.js";import n from"./RadioButton.stories-DDotov17.js";import{F as c}from"./FieldGroup-BvSnNx4r.js";import{C as d}from"./Checkbox-BwbNawS-.js";import{H as l}from"./Help-DEVzj57o.js";import{R as u}from"./RadioButton-CWxArnDN.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BwaEErmE.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-aNjw8Dzl.js";import"./mergeRefs-BovhSIar.js";import"./BaseRadioButton.stories-CZeRIDAM.js";import"./BaseRadioButton-63Qo8ziJ.js";import"./useId-C11aUoFe.js";import"./Label-SXbqZwUn.js";import"./SupportLabel-GnfI8u3A.js";import"./SuccessIcon-DjroPQaZ.js";import"./Icon-DHBpB8qe.js";import"./WarningIcon-BgQXZc7m.js";import"./Button-DRAobpzi.js";import"./usePreviousValue-B3jAlU80.js";import"./Loader-Di4Wjtg3.js";import"./useDelayedRender-fNh_e0lx.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
