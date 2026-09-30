import{r as a,j as p}from"./iframe-BAeiJg2I.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DtmjDIjP.js";import{H as s,m as n}from"./Help.stories-CyWg5O1a.js";import c from"./RadioButton.stories-4mJmwCRq.js";import{F as d}from"./FieldGroup-Tign5FyO.js";import{C as l}from"./Checkbox-xUmTVGpG.js";import{R as u}from"./RadioButton-PnzyrqlJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B-u3l2Nb.js";import"./Button-BthLL355.js";import"./usePreviousValue-DlMBWeDi.js";import"./Loader-BqT2LBs8.js";import"./useDelayedRender-BCYkMD0x.js";/* empty css               *//* empty css               */import"./Flex-DgwL9DhZ.js";import"./SlotComponent-B32ney-3.js";import"./mergeRefs-BTsr9n_K.js";import"./BaseRadioButton.stories-D2mTi-kg.js";import"./BaseRadioButton-m4TLeKXA.js";import"./useId-DnAYrqQB.js";/* empty css               */import"./Label-CNmy_e27.js";import"./SupportLabel-Dcw46ClR.js";import"./WarningIcon-DF51wsE7.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
