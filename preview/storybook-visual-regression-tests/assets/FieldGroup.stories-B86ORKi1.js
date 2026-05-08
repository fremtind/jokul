import{j as p,r as a}from"./iframe-CLrGhnM6.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DwMA4a5L.js";import{H as s,m as n}from"./Help.stories-CW4SxEZT.js";import c from"./RadioButton.stories-B-AbknCb.js";import{F as d}from"./FieldGroup-BX9OFFxt.js";import{R as l}from"./RadioButton-BbP4K8Of.js";import{C as u}from"./Checkbox-DCHV8zM5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dh0QkaKz.js";import"./Label-DWTjtgpc.js";import"./SupportLabel-DOTia-HN.js";import"./WarningIcon-DmLTyzXF.js";import"./Icon-CsGblwbZ.js";import"./Button-BrnhCQ2Y.js";import"./usePreviousValue-DDRBhUQf.js";import"./Loader-CVFMSfu6.js";import"./useDelayedRender-D6IsmX0V.js";/* empty css               *//* empty css               */import"./Flex-D0t1qed2.js";import"./SlotComponent-Bib68mBL.js";import"./mergeRefs-SxiKDVxR.js";import"./BaseRadioButton.stories-CyX18Lpt.js";import"./BaseRadioButton-B9sNRsIB.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
