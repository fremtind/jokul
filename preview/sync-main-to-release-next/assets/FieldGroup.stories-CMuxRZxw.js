import{j as p,r as a}from"./iframe-Bc_2fOra.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-UamR33eD.js";import{H as s,m as n}from"./Help.stories-DPA2Ihl4.js";import c from"./RadioButton.stories-JvyxUo_t.js";import{F as d}from"./FieldGroup-C6gZVM-g.js";import{R as l}from"./RadioButton-CZeng0qC.js";import{C as u}from"./Checkbox-Buq6aoXP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DkrM6KkE.js";import"./Label-DHmT-EGC.js";import"./SupportLabel-BkkmX9RI.js";import"./WarningIcon-B_wtQUVN.js";import"./Icon-BfQNpJPf.js";import"./Button-CjE-86cb.js";import"./usePreviousValue-cjkDEB_c.js";import"./Loader-C8fFRZrf.js";import"./useDelayedRender-DGWrp5fq.js";/* empty css               *//* empty css               */import"./Flex-Dkrhy-Jj.js";import"./SlotComponent-CgqHedyJ.js";import"./mergeRefs-CRCGjgeA.js";import"./BaseRadioButton.stories-Bp12jnGj.js";import"./BaseRadioButton-t8bcm3FP.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
