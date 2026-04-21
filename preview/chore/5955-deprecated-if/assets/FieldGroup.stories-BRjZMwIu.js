import{j as p,r as a}from"./iframe-BLNpsbZz.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C7Iiye1E.js";import{H as s,m as n}from"./Help.stories-BfZKq8WL.js";import c from"./RadioButton.stories-DaEGd_2e.js";import{F as d}from"./FieldGroup-Cb0gr8N4.js";import{R as l}from"./RadioButton-CVCwDob4.js";import{C as u}from"./Checkbox-Cpg_rado.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D5lXUgzX.js";import"./Label-Wc6SeeyB.js";import"./SupportLabel-DcstD1Mr.js";import"./WarningIcon-VPXvzMmB.js";import"./Icon-Dlx8pDqr.js";import"./Button-BdpfEjaH.js";import"./usePreviousValue-t0OyTIBL.js";import"./Loader-CXJPNTPO.js";import"./useDelayedRender-36WnAI9t.js";/* empty css               *//* empty css               */import"./Flex-B7qFfxDd.js";import"./SlotComponent-H-Ef-fbo.js";import"./mergeRefs-D2s68ZRt.js";import"./BaseRadioButton.stories-CVYLustX.js";import"./BaseRadioButton-D-zOpqu_.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
