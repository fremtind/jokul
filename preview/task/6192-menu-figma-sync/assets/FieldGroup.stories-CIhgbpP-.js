import{r as a,j as p}from"./iframe-mCQYiJjX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CnjAP0vJ.js";import{H as s,m as n}from"./Help.stories-DCiPx_X4.js";import c from"./RadioButton.stories-QbOfez3M.js";import{F as d}from"./FieldGroup-CMbEnCVo.js";import{C as l}from"./Checkbox-Bm6McHZe.js";import{R as u}from"./RadioButton-Cc5RAa6d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C-7En1L-.js";import"./Button-EVllpb_2.js";import"./usePreviousValue-9ml4wt7Q.js";import"./Loader-rd2sTeTJ.js";import"./useDelayedRender-30e-V33W.js";/* empty css               *//* empty css               */import"./Flex-Dq0xr05X.js";import"./SlotComponent-BQbupTaN.js";import"./mergeRefs-uqMx-h-B.js";import"./BaseRadioButton.stories-CLqAaFMi.js";import"./BaseRadioButton-BjyZst3N.js";import"./useId-cRAOb_zR.js";/* empty css               */import"./Label-BB-EEwsS.js";import"./SupportLabel-BUdnOyjN.js";import"./WarningIcon-B-gF82fW.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
