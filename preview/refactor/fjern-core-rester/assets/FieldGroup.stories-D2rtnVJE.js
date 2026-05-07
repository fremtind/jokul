import{j as p,r as a}from"./iframe-D_EIx2dI.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bp5-Cf-t.js";import{H as s,m as n}from"./Help.stories-DCrNAwRT.js";import c from"./RadioButton.stories-BVadic4C.js";import{F as d}from"./FieldGroup-Bq_2Ih3m.js";import{R as l}from"./RadioButton-BKyGrSwU.js";import{C as u}from"./Checkbox-BL3Yg-k1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-q-Ydi6Od.js";import"./Label-D90xNRAI.js";import"./SupportLabel-Ng6zLIlB.js";import"./WarningIcon-DG5KDJ-n.js";import"./Icon-BOjpdpNL.js";import"./Button-Bo0G-LIT.js";import"./usePreviousValue-DUDGiSTk.js";import"./Loader-B_Tn3Y4O.js";import"./useDelayedRender-DmcclX73.js";/* empty css               *//* empty css               */import"./Flex-Ds6hrhKh.js";import"./SlotComponent-vRyKSKM3.js";import"./mergeRefs-D5fBJwe8.js";import"./BaseRadioButton.stories-BlYcoq4T.js";import"./BaseRadioButton-BbZx36AF.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
