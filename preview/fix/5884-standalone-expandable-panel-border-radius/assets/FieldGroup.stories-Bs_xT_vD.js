import{j as p,r as a}from"./iframe-Cxy_qrkX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-SSND1zKS.js";import{H as s,m as n}from"./Help.stories-DpAfD8yx.js";import c from"./RadioButton.stories-HBPaTn3S.js";import{F as d}from"./FieldGroup-QTwrnDeF.js";import{R as l}from"./RadioButton-DocFq_nr.js";import{C as u}from"./Checkbox-DDHcCN5t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cyacr2fK.js";import"./Label-CyTFweX4.js";import"./SupportLabel-BI-VtVy1.js";import"./WarningIcon-Cf49-C2V.js";import"./Icon-n80kDs44.js";import"./Button-oX-c1VEg.js";import"./usePreviousValue-Dvo97lma.js";import"./Loader-BiO16jEZ.js";import"./useDelayedRender-BLWkcqZu.js";/* empty css               *//* empty css               */import"./Flex-BWt3gIzB.js";import"./SlotComponent-o087dcLK.js";import"./mergeRefs-C6GE6PDN.js";import"./BaseRadioButton.stories-BATcF1YB.js";import"./BaseRadioButton-C27wnZoR.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
