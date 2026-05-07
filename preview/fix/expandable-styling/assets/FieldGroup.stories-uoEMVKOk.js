import{r as a,j as p}from"./iframe-5MFVBG5r.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B96U5DBS.js";import{H as s,m as n}from"./Help.stories-CRMrWODV.js";import c from"./RadioButton.stories-cDmdv1Z9.js";import{F as d}from"./FieldGroup-BfNhw1mb.js";import{C as l}from"./Checkbox-vLhVhsRl.js";import{R as u}from"./RadioButton-9_ypg_OW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-LC3ggNsM.js";import"./Button-BTOjuVkb.js";import"./usePreviousValue-9hNzfE3L.js";import"./Loader-CWCzb1LZ.js";import"./useDelayedRender-CcWiTUTY.js";/* empty css               *//* empty css               */import"./Flex-4xcBCsPH.js";import"./SlotComponent-Ll7U7U2Q.js";import"./mergeRefs-DWgp1mXe.js";import"./BaseRadioButton.stories-qBsbUpIJ.js";import"./BaseRadioButton-BlKB0tkc.js";import"./useId-DrwXIcPI.js";/* empty css               */import"./Label-DxyDGnzo.js";import"./SupportLabel-B2NX55Qj.js";import"./WarningIcon-ChFQ_Szy.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
