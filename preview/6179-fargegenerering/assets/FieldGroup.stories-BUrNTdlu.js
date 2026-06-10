import{r as a,j as p}from"./iframe-DlQdYbT3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cmo66Nuq.js";import{H as s,m as n}from"./Help.stories-BQp-3L-Y.js";import c from"./RadioButton.stories-B2e7-BV7.js";import{F as d}from"./FieldGroup-D-Nzoh2X.js";import{C as l}from"./Checkbox-xo67S2T8.js";import{R as u}from"./RadioButton-BkkcE6JS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-TYmJ_mOm.js";import"./Button-vQ3wB99F.js";import"./usePreviousValue-D6BvZ74z.js";import"./Loader-0kHCRl1P.js";import"./useDelayedRender-CkN2NQXx.js";/* empty css               *//* empty css               */import"./Flex-Dy1-uH2W.js";import"./SlotComponent-KN3zrLyE.js";import"./mergeRefs-CO8v9Nko.js";import"./BaseRadioButton.stories-DRPpmot3.js";import"./BaseRadioButton-CBeDEj9V.js";import"./useId-BQKqC8dv.js";/* empty css               */import"./Label-BMB_RbaO.js";import"./SupportLabel-DIgyDCZl.js";import"./WarningIcon-BFj2QsVg.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
