import{r as a,j as p}from"./iframe-DrwSnDWG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DKgyDhBW.js";import s from"./Help.stories-CL0VPnSd.js";import n from"./RadioButton.stories-C2gfAP4G.js";import{F as c}from"./FieldGroup-29rSYWf-.js";import{C as d}from"./Checkbox-BnsbOEoX.js";import{H as l}from"./Help-jUnKwhNE.js";import{R as u}from"./RadioButton-DhA4J6iv.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-pBdjiWH7.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BQY5-xdA.js";import"./mergeRefs-Cmi76J8P.js";import"./BaseRadioButton.stories-DxF268pX.js";import"./BaseRadioButton-BKb5T4VV.js";import"./useId-647BzZ74.js";import"./Label-DPULOsAn.js";import"./SupportLabel-B330f_ov.js";import"./SuccessIcon-DO4ZDskS.js";import"./Icon-dnvXDhb6.js";import"./WarningIcon-DGLcr3Us.js";import"./Button-DqMcEsAs.js";import"./usePreviousValue-BVLK_vWN.js";import"./Loader-AKCyrs05.js";import"./useDelayedRender-Dg5OAxuo.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
