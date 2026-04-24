import{j as p,r as a}from"./iframe-BFenp-hc.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dm3anx8O.js";import{H as s,m as n}from"./Help.stories-CmgrnCSM.js";import c from"./RadioButton.stories-B0cQYjvv.js";import{F as d}from"./FieldGroup-B0gcks0G.js";import{R as l}from"./RadioButton-CzyjcRUs.js";import{C as u}from"./Checkbox-BGI9ftV8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BdJSV1WM.js";import"./Label-BbYmZYGT.js";import"./SupportLabel-D7lVbcoL.js";import"./WarningIcon-WbiLtCkr.js";import"./Icon-CGS143Wr.js";import"./Button-oGr5yhIl.js";import"./usePreviousValue-BQrNeOln.js";import"./Loader-BxsM5hlp.js";import"./useDelayedRender-C0ZfU-zF.js";/* empty css               *//* empty css               */import"./Flex-CL-QSou9.js";import"./SlotComponent-N_Y7aQAl.js";import"./mergeRefs-BJRndm5D.js";import"./BaseRadioButton.stories-P1ONkvI_.js";import"./BaseRadioButton-0KfKAUyK.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
