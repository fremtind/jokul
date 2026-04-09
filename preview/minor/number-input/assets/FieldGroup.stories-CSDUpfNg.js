import{j as p,r as a}from"./iframe-UxGYlr0y.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D3SiU1um.js";import{H as s,m as n}from"./Help.stories-BbCzXQWi.js";import c from"./RadioButton.stories-CRFGQ5UN.js";import{F as d}from"./FieldGroup-d3z5Y0ZT.js";import{R as l}from"./RadioButton-Cf_14XTJ.js";import{C as u}from"./Checkbox-CVIjsdfY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Du1oI4Tc.js";import"./Label-DdXqu1n_.js";import"./SupportLabel-C_upJLqo.js";import"./WarningIcon-CEsZcHoz.js";import"./Icon--W5pm__q.js";import"./Button-BopH_br1.js";import"./usePreviousValue-sFTtYqHR.js";import"./Loader-Dqpew2ot.js";import"./useDelayedRender-mtZtHtDf.js";/* empty css               *//* empty css               */import"./Flex-BmS0gaHf.js";import"./SlotComponent-Bhntozz1.js";import"./mergeRefs-Chk1IfZQ.js";import"./BaseRadioButton.stories-D-kJBMTi.js";import"./BaseRadioButton-D2X89m1h.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
