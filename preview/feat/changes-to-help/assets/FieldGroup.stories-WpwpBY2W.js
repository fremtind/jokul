import{j as p,r as a}from"./iframe-DfNDhyRT.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CKa031N-.js";import s from"./Help.stories-pSq3a0Na.js";import n from"./RadioButton.stories-_yMNLrk_.js";import{F as c}from"./FieldGroup-BELEUxdm.js";import{R as d}from"./RadioButton-KaOmtvom.js";import{C as l}from"./Checkbox-fy4cZ-pF.js";import{H as u}from"./Help-BOAzlR8C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DNegdpUr.js";import"./Label-0a0uNf0k.js";import"./SupportLabel-gSKT-ztC.js";import"./WarningIcon-CAUrnjpS.js";import"./Icon-Bhwldhjc.js";/* empty css               *//* empty css               */import"./Flex-CvKOHkx6.js";import"./SlotComponent-DSpNY30s.js";import"./mergeRefs-CikmK7K7.js";import"./BaseRadioButton.stories-BUM2-2Xo.js";import"./BaseRadioButton-CTeYeBXS.js";import"./Button-FxOunPgL.js";import"./usePreviousValue-CwUfekHs.js";import"./Loader-Bwe5kC-l.js";import"./useDelayedRender-CRrVhV80.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
