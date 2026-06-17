import{r as a,j as p}from"./iframe-DW3e9-7K.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-FfsAjlTS.js";import{H as s,m as n}from"./Help.stories-B3Ks2c7G.js";import c from"./RadioButton.stories-BbBnO4z9.js";import{F as d}from"./FieldGroup-DxjUR3Gn.js";import{C as l}from"./Checkbox-CzZEZuRf.js";import{R as u}from"./RadioButton-hWHBig-4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-vjKgXSRv.js";import"./Button-C5wcjRf4.js";import"./usePreviousValue-BK-zRzlE.js";import"./Loader-BJJbTDEz.js";import"./useDelayedRender-IofafT3W.js";/* empty css               *//* empty css               */import"./Flex-DarP0l5M.js";import"./SlotComponent-CEGNcJvM.js";import"./mergeRefs-VvSEQklS.js";import"./BaseRadioButton.stories-BoE0Pl-c.js";import"./BaseRadioButton-B7PBkhOS.js";import"./useId-ukZfM2JJ.js";import"./Label-mZQVCVTl.js";import"./SupportLabel-DN6Y5ht3.js";import"./SuccessIcon-D_dk47XL.js";import"./WarningIcon-rzLA1h-n.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
