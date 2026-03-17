import{j as p,r as a}from"./iframe-u-NXqPvJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DxyclRQT.js";import{H as s,m as n}from"./Help.stories-DjQY7wPR.js";import c from"./RadioButton.stories-DaCa8TeT.js";import{F as d}from"./FieldGroup-CqSPB94d.js";import{R as l}from"./RadioButton-B82H1G_H.js";import{C as u}from"./Checkbox-DW_hyjO6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ALgN4qlP.js";import"./Label-BhGux7J9.js";import"./SupportLabel-Lz7lBk4u.js";import"./WarningIcon-CtMdDqSl.js";import"./Icon-CvPbAgzC.js";import"./Button-CyPb01Bp.js";import"./usePreviousValue-D-SeMUPe.js";import"./Loader-sjg9nzlY.js";import"./useDelayedRender-LjmgiwmH.js";/* empty css               *//* empty css               */import"./Flex-CjstOKA0.js";import"./SlotComponent-CyuTfRN8.js";import"./mergeRefs-DDsKePfE.js";import"./BaseRadioButton.stories-qD-tHGKV.js";import"./BaseRadioButton-3tipPGTi.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
