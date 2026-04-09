import{j as p,r as a}from"./iframe-Bs6w1lhj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CLYT7-Xh.js";import{H as s,m as n}from"./Help.stories-BxGeUiVf.js";import c from"./RadioButton.stories-BMhRJ5tc.js";import{F as d}from"./FieldGroup-BcfBsKQ_.js";import{R as l}from"./RadioButton-D5dqFr2N.js";import{C as u}from"./Checkbox-CuoLiGZz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-6PEzRPFE.js";import"./Label-7Y4vIPZu.js";import"./SupportLabel-Dk4VKl7V.js";import"./WarningIcon-Cd87iNbi.js";import"./Icon-CVhsl-RP.js";import"./Button-DlBn9-AM.js";import"./usePreviousValue-CVOQgawD.js";import"./Loader-Dr7jglfb.js";import"./useDelayedRender-CLAH1ySH.js";/* empty css               *//* empty css               */import"./Flex-DvGzE_1K.js";import"./SlotComponent-QTTJSlVi.js";import"./mergeRefs-BctXNnfT.js";import"./BaseRadioButton.stories-Y4Z_xTzv.js";import"./BaseRadioButton-D8DH5svp.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
