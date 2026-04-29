import{j as p,r as a}from"./iframe-C9auSC1D.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dfz0wVk2.js";import{H as s,m as n}from"./Help.stories-B7Ehw9Ju.js";import c from"./RadioButton.stories-C0Lai1Hi.js";import{F as d}from"./FieldGroup-CdVmIn1o.js";import{R as l}from"./RadioButton-C0CLoIPd.js";import{C as u}from"./Checkbox-LIR5R7CC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-S6HvOhy3.js";import"./Label-BDBjBnNg.js";import"./SupportLabel-DU_GX9kp.js";import"./WarningIcon-CbY24pID.js";import"./Icon-DKGrAUD8.js";import"./Button-DAhBLtJ-.js";import"./usePreviousValue-B0opCcuR.js";import"./Loader-5xzEaXQy.js";import"./useDelayedRender-DLrezNyc.js";/* empty css               *//* empty css               */import"./Flex-BLOmNiep.js";import"./SlotComponent-CShTz1QX.js";import"./mergeRefs-D3JOCwp2.js";import"./BaseRadioButton.stories-7nzemlCY.js";import"./BaseRadioButton-Dc1mmwo2.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
