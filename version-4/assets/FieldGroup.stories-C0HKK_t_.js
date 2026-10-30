import{r as a,j as p}from"./iframe-Cb66WXFr.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-wECSIUYJ.js";import{H as s,m as n}from"./Help.stories-D7h5feAm.js";import c from"./RadioButton.stories-DXMnXOGn.js";import{F as d}from"./FieldGroup-DuAs0ChZ.js";import{C as l}from"./Checkbox-D50Gs7qs.js";import{R as u}from"./RadioButton-CDBPIf-8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CrF6hnqD.js";import"./Button-CO0zAp3K.js";import"./usePreviousValue-DtqtDFMN.js";import"./Loader-CVnZwis_.js";import"./useDelayedRender-CJmaEXuG.js";/* empty css               *//* empty css               */import"./Flex-KXEz-l2X.js";import"./SlotComponent-DboMnQWZ.js";import"./mergeRefs-Cwu9kp0t.js";import"./BaseRadioButton.stories-D2z1hoaq.js";import"./BaseRadioButton-B2nn9Pa3.js";import"./useId-DOXnCJsj.js";/* empty css               */import"./Label-Batr1jS2.js";import"./SupportLabel-BSEFYUon.js";import"./WarningIcon-M2XSh_Yq.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
