import{r as a,j as p}from"./iframe-BHYW1QRs.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D6MtWWGP.js";import{H as s,m as n}from"./Help.stories-Sqt3nljb.js";import c from"./RadioButton.stories-hD2GhMSE.js";import{F as d}from"./FieldGroup-DvtH2pLO.js";import{C as l}from"./Checkbox-BzfW15hR.js";import{R as u}from"./RadioButton-BDVAngq-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D-mMEKPT.js";import"./Button-yZQANXhH.js";import"./usePreviousValue-CXWZnR-T.js";import"./Loader-BkkzFPbK.js";import"./useDelayedRender-NLqEnoOF.js";/* empty css               *//* empty css               */import"./Flex-DzErD2mC.js";import"./SlotComponent-Zzhx8f-8.js";import"./mergeRefs-8AvyeCyu.js";import"./BaseRadioButton.stories-DXh0xFzC.js";import"./BaseRadioButton-CiZE7cjA.js";import"./useId-BS2rsMAD.js";/* empty css               */import"./Label-Dx6SeZyj.js";import"./SupportLabel-BatTmrEm.js";import"./WarningIcon-BVhfzo86.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
