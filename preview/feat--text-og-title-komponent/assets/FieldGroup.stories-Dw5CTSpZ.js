import{j as p,r as a}from"./iframe-BXt9Ys4r.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-bcATNg4S.js";import{H as s,m as n}from"./Help.stories-BaRhuPPx.js";import c from"./RadioButton.stories-DbjXhldH.js";import{F as d}from"./FieldGroup-Co-P2Vki.js";import{R as l}from"./RadioButton-B5K1ACwB.js";import{C as u}from"./Checkbox-DR-MAs1w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C2Dm1Bg5.js";import"./Label-BB8q-D74.js";import"./SupportLabel-Dyv_btTC.js";import"./WarningIcon-DJQMW2N9.js";import"./Icon-C8IcTxVq.js";import"./Button-BTi2QJ8-.js";import"./usePreviousValue-jnhbEOxi.js";import"./Loader-Co3YPPVe.js";import"./useDelayedRender-7GFRd-1D.js";/* empty css               *//* empty css               */import"./Flex-CaQAwh8D.js";import"./SlotComponent-CZHETbOR.js";import"./mergeRefs-Cr46asX_.js";import"./BaseRadioButton.stories-tnbPEmAv.js";import"./BaseRadioButton-41oJ9Me0.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
