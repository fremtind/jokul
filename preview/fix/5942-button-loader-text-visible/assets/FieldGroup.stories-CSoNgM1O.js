import{j as p,r as a}from"./iframe-WFbU83V-.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories--uLhW1MT.js";import{H as s,m as n}from"./Help.stories-BGn-x4jm.js";import c from"./RadioButton.stories-Bg4q0P2z.js";import{F as d}from"./FieldGroup-DmMahY27.js";import{R as l}from"./RadioButton-51h3hgP9.js";import{C as u}from"./Checkbox-FI1xfxjp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CGpnuWyk.js";import"./Label-BNWUEU42.js";import"./SupportLabel-BGmoCJc7.js";import"./WarningIcon-D308-6pj.js";import"./Icon-Bdko5L71.js";import"./Button-Dqrx8PEV.js";import"./usePreviousValue-sB2Qe1Ga.js";import"./Loader-BxmDFBNx.js";import"./useDelayedRender-WJdb580l.js";/* empty css               *//* empty css               */import"./Flex-q5VDOGdx.js";import"./SlotComponent-cDSftbRu.js";import"./mergeRefs-DXqBtXeN.js";import"./BaseRadioButton.stories-Bkp4a_c5.js";import"./BaseRadioButton-D21c_gMb.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
