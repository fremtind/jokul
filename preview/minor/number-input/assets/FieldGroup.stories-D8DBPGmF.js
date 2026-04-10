import{j as p,r as a}from"./iframe-DGz6SsMs.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-E4m0wLqK.js";import{H as s,m as n}from"./Help.stories-DBKTvkh2.js";import c from"./RadioButton.stories-DCc3nz-4.js";import{F as d}from"./FieldGroup-BGhEvI-5.js";import{R as l}from"./RadioButton-CpULrnXh.js";import{C as u}from"./Checkbox-rpvaaxgK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CO-Quuvr.js";import"./Label-Br9SKfr9.js";import"./SupportLabel-DNnBUgAu.js";import"./WarningIcon-BOdHlBQX.js";import"./Icon-CL4PIjsR.js";import"./Button-CX95boWo.js";import"./usePreviousValue-Bt7mYPPh.js";import"./Loader-CnZjlpaR.js";import"./useDelayedRender-vu6BLSaK.js";/* empty css               *//* empty css               */import"./Flex-6lfopY4Q.js";import"./SlotComponent-8t3FOdHF.js";import"./mergeRefs-Cpijy9lx.js";import"./BaseRadioButton.stories-B7O38pBq.js";import"./BaseRadioButton-DZwWSCXA.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
