import{j as p,r as a}from"./iframe-CX4msKD3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Ue1gayL1.js";import{H as s,m as n}from"./Help.stories-BfbXJ1i_.js";import c from"./RadioButton.stories-a8eK_VDL.js";import{F as d}from"./FieldGroup-B9thLr0a.js";import{R as l}from"./RadioButton-BqU2_9mg.js";import{C as u}from"./Checkbox-BJrNCuL_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-riKy1vKt.js";import"./Label-BWQK7QUg.js";import"./SupportLabel-DFpmgT17.js";import"./WarningIcon-pnCeMpdH.js";import"./Icon-Z8R12Lm0.js";import"./Button-B0FLyGmc.js";import"./usePreviousValue-lt-DlGA0.js";import"./Loader-BdflQJXF.js";import"./useDelayedRender-DFG1ng5u.js";/* empty css               *//* empty css               */import"./Flex-Bqx5whb3.js";import"./SlotComponent-Cch38d9r.js";import"./mergeRefs-E_6ugzFW.js";import"./BaseRadioButton.stories-Deap5j1i.js";import"./BaseRadioButton-CT_SYHTb.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
