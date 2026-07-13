import{r as p,j as i}from"./iframe-BI_O4Haf.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-5KazUmLc.js";import l from"./Help.stories-C2Qsb6b6.js";import c from"./RadioButton.stories-BN_NZ3Wh.js";import{F as d}from"./FieldGroup-BLSuxhN7.js";import{C as k,a as u}from"./CheckboxPanel.stories-C4NbQkAQ.js";import{RadioPanel as g}from"./RadioPanel.stories-CTMrIwDT.js";import{C as h}from"./Checkbox-vft2BjvI.js";import{R as b}from"./RadioPanel-B09V3Hq-.js";import{H as x}from"./Help-1mup90hB.js";import{R as C}from"./RadioButton-Dp1zTK29.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BLdODDqZ.js";import"./Label-CV6paTMh.js";import"./SupportLabel-Baqqd0b1.js";import"./SuccessIcon-D_VN2RoI.js";import"./Icon-zZeSCmwQ.js";import"./WarningIcon-vIUFNvZh.js";/* empty css               *//* empty css               */import"./Flex-B9qZsFWK.js";import"./SlotComponent-BrPgS2wR.js";import"./mergeRefs-ChOZp9rd.js";import"./BaseRadioButton.stories-DLGBmhY4.js";import"./BaseRadioButton-DOtWwaGe.js";import"./InputPanel-B0AbxWO3.js";import"./Button-RVgZu2bk.js";import"./usePreviousValue-DbcYQEhc.js";import"./Loader-Df66y34l.js";import"./useDelayedRender-CtelVvOQ.js";import"./Title-BiW_NiLN.js";import"./Card-C_pTaz-c.js";import"./Text-CNy5pCPE.js";import"./Tag-By5jlHqR.js";import"./ExpandablePanel-Erf7-oZc.js";import"./useAnimatedHeightBetween-DBsFrKKt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D6a1Ul8b.js";import"./Expander-7Tug7jWs.js";import"./ChevronDownIcon-BkERlm0g.js";import"./ChevronUpIcon-DNSLI8U-.js";import"./ListItem-DXyMaisj.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
