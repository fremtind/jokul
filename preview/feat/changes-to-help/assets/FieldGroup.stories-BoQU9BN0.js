import{j as p,r as a}from"./iframe-CNn5nJAq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DUkx8dcl.js";import s from"./Help.stories-CUioAZ9-.js";import n from"./RadioButton.stories-BvP4s5HU.js";import{F as c}from"./FieldGroup-DluZ1ePE.js";import{R as d}from"./RadioButton-D4-UHUIX.js";import{C as l}from"./Checkbox-B-wIslPS.js";import{H as u}from"./Help-DcwusFdl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cqv3Opb6.js";import"./Label-TAQomIVd.js";import"./SupportLabel-zbR7k6PO.js";import"./WarningIcon-jiebI8pV.js";import"./Icon-yBb3q6lY.js";/* empty css               *//* empty css               */import"./Flex-I1P-DxEM.js";import"./SlotComponent-DMpgAKt4.js";import"./mergeRefs-D8VBuOGc.js";import"./BaseRadioButton.stories-DimKus1P.js";import"./BaseRadioButton-DRrlrRMX.js";import"./Button-5oRKAuRk.js";import"./usePreviousValue-Ct4NfabU.js";import"./Loader-oUvtZU1x.js";import"./useDelayedRender-SdTKM7-G.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
