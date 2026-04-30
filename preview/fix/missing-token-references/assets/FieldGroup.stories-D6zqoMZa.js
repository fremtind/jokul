import{j as p,r as a}from"./iframe-CPA3jkPB.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-PSRSdmAN.js";import{H as s,m as n}from"./Help.stories-DNehRkiC.js";import c from"./RadioButton.stories-lFOeZuey.js";import{F as d}from"./FieldGroup-C_dFa8B9.js";import{R as l}from"./RadioButton-DB1Ny9ou.js";import{C as u}from"./Checkbox-DYeuameC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CbjHqd0z.js";import"./Label-CWShUZnk.js";import"./SupportLabel-CnZRRpMP.js";import"./WarningIcon-CTSnIb7v.js";import"./Icon-bxDWCdkV.js";import"./Button-_y4k2yit.js";import"./usePreviousValue-BqbGAGAJ.js";import"./Loader-BRtIRwMq.js";import"./useDelayedRender-DB33a3aT.js";/* empty css               *//* empty css               */import"./Flex-64ph-y29.js";import"./SlotComponent-DBqxgIk8.js";import"./mergeRefs-Zdil8XW9.js";import"./BaseRadioButton.stories-DWaeYtpP.js";import"./BaseRadioButton-DirYS7O3.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
