import{r as a,j as p}from"./iframe-bP08_dpO.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-O2BkylZr.js";import s from"./Help.stories-CbVmtVN8.js";import n from"./RadioButton.stories-pMmkEyzi.js";import{F as c}from"./FieldGroup-Cl_GcdxQ.js";import{C as d}from"./Checkbox-Bt9_0X3C.js";import{H as l}from"./Help-kp_NguOU.js";import{R as u}from"./RadioButton-CMMtcpR4.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DDdTbpsi.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-K01TYFEW.js";import"./mergeRefs-Cg84UJRH.js";import"./BaseRadioButton.stories-CKp6Q7Py.js";import"./BaseRadioButton-Cw_fZlNr.js";import"./useId-Dlp8n-d1.js";/* empty css               */import"./Label-BiFYNOKn.js";import"./SupportLabel-BNlmbtWf.js";import"./WarningIcon-DjaCcQim.js";import"./Icon-CiFcT25P.js";import"./Button-CMXnO7kZ.js";import"./usePreviousValue-C_fQ_m4z.js";import"./Loader-lc3Nvdpe.js";import"./useDelayedRender-BVPRcEnc.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
