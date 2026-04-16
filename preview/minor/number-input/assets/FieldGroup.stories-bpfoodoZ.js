import{j as p,r as a}from"./iframe-DlRt_O4I.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DxrEcfbT.js";import{H as s,m as n}from"./Help.stories-dZE1r9qo.js";import c from"./RadioButton.stories-CMLdTDUM.js";import{F as d}from"./FieldGroup-Jg7gLBb1.js";import{R as l}from"./RadioButton-cL9gN03F.js";import{C as u}from"./Checkbox-DgRbsyw9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BbkHT4QC.js";import"./Label-9ChzBkss.js";import"./SupportLabel-BQhHr-5_.js";import"./WarningIcon-Dhjy5Ayx.js";import"./Icon-CT7ikBSz.js";import"./Button-5d6W_QrZ.js";import"./usePreviousValue-C25fei8K.js";import"./Loader-BOunlMaz.js";import"./useDelayedRender-bZm2Njsq.js";/* empty css               *//* empty css               */import"./Flex-vi4Tx20N.js";import"./SlotComponent-DmZmzl2N.js";import"./mergeRefs-C7KDYcje.js";import"./BaseRadioButton.stories-HkDQdM27.js";import"./BaseRadioButton-DQ37NGW1.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
