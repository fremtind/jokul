import{j as p,r as a}from"./iframe-NfZ23ZEj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CjOX8a9k.js";import{H as s,m as n}from"./Help.stories-DfNiOF3c.js";import c from"./RadioButton.stories-B-Pl9045.js";import{F as d}from"./FieldGroup-Dj_mCBC3.js";import{R as l}from"./RadioButton-DhqyaLcg.js";import{C as u}from"./Checkbox-BNYVp7XA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-bgygFL5D.js";import"./Label-CovbvnOj.js";import"./SupportLabel-BgP9V-9O.js";import"./WarningIcon-BEJOPKPV.js";import"./Icon-Dap_nURq.js";import"./Button-BRqWE8el.js";import"./usePreviousValue-DKobUfwa.js";import"./Loader-BeBqedcu.js";import"./useDelayedRender-Z2GljTHs.js";/* empty css               *//* empty css               */import"./Flex-DXZqSlXQ.js";import"./SlotComponent-BXVrj7Ue.js";import"./mergeRefs-CzypiQxR.js";import"./BaseRadioButton.stories-tNEyIhod.js";import"./BaseRadioButton-Dq0SxU1J.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
