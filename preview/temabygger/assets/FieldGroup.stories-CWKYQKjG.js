import{j as p,r as a}from"./iframe-A5jA5sU1.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CXDgM4Nh.js";import{H as s,m as n}from"./Help.stories-Dtxmo7T2.js";import c from"./RadioButton.stories-CUJfrRIZ.js";import{F as d}from"./FieldGroup-rODHaEME.js";import{R as l}from"./RadioButton-DVkTePoB.js";import{C as u}from"./Checkbox-BX2kNjX0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Eot2vUKx.js";import"./Label-DsvL0woE.js";import"./SupportLabel-CNg68NZj.js";import"./WarningIcon-Bv5cAlW2.js";import"./Icon-yQXpZrec.js";import"./Button-Ca006FRB.js";import"./usePreviousValue-C74XQLnp.js";import"./Loader-BfOiP7in.js";import"./useDelayedRender-DIjYAC-J.js";/* empty css               *//* empty css               */import"./Flex-hLHwol-U.js";import"./SlotComponent-DMjlLFLm.js";import"./mergeRefs-DMbCeKEY.js";import"./BaseRadioButton.stories-Dgq0E9Br.js";import"./BaseRadioButton-BkTVizQL.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
