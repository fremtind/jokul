import{r as a,j as p}from"./iframe-06ZeKsUv.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BC9nmTvl.js";import s from"./Help.stories-BO6UFsqD.js";import n from"./RadioButton.stories-rK6qNvpb.js";import{F as c}from"./FieldGroup-CboyZs4L.js";import{C as d}from"./Checkbox-CfvglOdB.js";import{H as l}from"./Help-CfOKVz5V.js";import{R as u}from"./RadioButton-CYueTOgr.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CeEv7O2H.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D0n056hE.js";import"./mergeRefs-C7RP5Dd9.js";import"./BaseRadioButton.stories-CG93gN5A.js";import"./BaseRadioButton-03LdVPR-.js";import"./useId-n4-O23FJ.js";import"./Label-Cyd0iUVh.js";import"./SupportLabel-DE6MpzlH.js";import"./SuccessIcon-aZdft-re.js";import"./Icon-CXqmLSdn.js";import"./WarningIcon-bF_XPGQy.js";import"./Button-CfkaiV_a.js";import"./usePreviousValue-wsUBdPe7.js";import"./Loader-BYs3WLXl.js";import"./useDelayedRender-DxxvfxcO.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
