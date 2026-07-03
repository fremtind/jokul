import{r as p,j as i}from"./iframe-C11iCbLl.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CkIJwln7.js";import l from"./Help.stories-1M1ReaxX.js";import c from"./RadioButton.stories-CwcYEkq3.js";import{F as d}from"./FieldGroup-Bq-0vP-T.js";import{C as k,a as u}from"./CheckboxPanel.stories-zH-DjIEV.js";import{RadioPanel as g}from"./RadioPanel.stories-Ce0x8Qrs.js";import{C as h}from"./Checkbox-Dk1J_Cjx.js";import{R as b}from"./RadioPanel-s8wmMHH6.js";import{H as x}from"./Help-4Bn4vU6P.js";import{R as C}from"./RadioButton-C4XP8-mh.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C7m6c9k5.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DLkgejOt.js";import"./mergeRefs-D8T-KKoh.js";import"./BaseRadioButton.stories-kaVtBwT8.js";import"./BaseRadioButton-YeoX6gK9.js";import"./useId-BXIrkPtE.js";import"./Label-CU0vZZCC.js";import"./SupportLabel-Pb1Xv99Y.js";import"./SuccessIcon-YuYQ7zS7.js";import"./Icon-GI5nvfDk.js";import"./WarningIcon-DOO-XT-7.js";import"./InputPanel-BpIRq5nQ.js";import"./Button-b77S5MsI.js";import"./usePreviousValue-C3xG02Pr.js";import"./Loader-DKSB5JFh.js";import"./useDelayedRender-2kx9_hrC.js";import"./Title-ByTYGMiB.js";import"./Card-CXJP28K-.js";import"./Text-iwf-zd8b.js";import"./Tag-BNgdviNF.js";import"./ExpandablePanel-DrO5lDzC.js";import"./useAnimatedHeightBetween-CrLYDn4e.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B0gpGY3Q.js";import"./Expander-COg7Prq7.js";import"./ChevronDownIcon-CmNavgPZ.js";import"./ChevronUpIcon-CEcMIrsC.js";import"./ListItem-BYh-uqEb.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
