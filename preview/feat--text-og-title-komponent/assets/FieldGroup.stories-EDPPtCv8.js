import{j as p,r as a}from"./iframe-DPF96T-f.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DzvgOgKP.js";import{H as s,m as n}from"./Help.stories-MJpVVpDG.js";import c from"./RadioButton.stories-Bex47EAv.js";import{F as d}from"./FieldGroup-CDBgffOd.js";import{R as l}from"./RadioButton-SDtaCNfT.js";import{C as u}from"./Checkbox-2M215vjR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CHRcJ9e5.js";import"./Label-hfqGr7EE.js";import"./SupportLabel-Boi-E1cX.js";import"./WarningIcon-mv2m6I_y.js";import"./Icon-DerCTD_Z.js";import"./Button-1UPDMYy3.js";import"./usePreviousValue-DaL5yUZh.js";import"./Loader-BCYV72eE.js";import"./useDelayedRender-YT1oe8wf.js";/* empty css               *//* empty css               */import"./Flex-AKEWxviy.js";import"./SlotComponent-CxGmuRq5.js";import"./mergeRefs-CUPVjfva.js";import"./BaseRadioButton.stories-DTzAC5jQ.js";import"./BaseRadioButton-DlNGydCH.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
