import{r as a,j as p}from"./iframe-Y8TMCwlJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DkqTW-g3.js";import{H as s,m as n}from"./Help.stories-CU4kOsC_.js";import c from"./RadioButton.stories-CixmMYrF.js";import{F as d}from"./FieldGroup-CX5nr-wg.js";import{C as l}from"./Checkbox--mn602l7.js";import{R as u}from"./RadioButton-CfE82NQR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-YE75Uj7l.js";import"./Button-CTXjpQad.js";import"./usePreviousValue-BWOOitif.js";import"./Loader-C5hWg0CV.js";import"./useDelayedRender-q4mC72Mo.js";/* empty css               *//* empty css               */import"./Flex-DniviHoX.js";import"./SlotComponent-B65xbCAP.js";import"./mergeRefs-DlEzQZ-F.js";import"./BaseRadioButton.stories-oBcNLma6.js";import"./BaseRadioButton-BU_Ax6kB.js";import"./useId-CcALZPKp.js";/* empty css               */import"./Label-iastgcVL.js";import"./SupportLabel-B6EbgriK.js";import"./WarningIcon-CnnegZD0.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
