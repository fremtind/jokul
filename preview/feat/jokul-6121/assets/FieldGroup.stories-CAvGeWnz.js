import{r as p,j as i}from"./iframe-CaLcO2mr.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CtecFD41.js";import l from"./Help.stories-DVXLQxX2.js";import c from"./RadioButton.stories-DZQyDNug.js";import{F as d}from"./FieldGroup-qrAUXmx2.js";import{C as k,a as u}from"./CheckboxPanel.stories-C1sjLRpn.js";import{RadioPanel as g}from"./RadioPanel.stories-CTE3Vm6-.js";import{C as h}from"./Checkbox-CuiVbGTD.js";import{R as b}from"./RadioPanel-DhQzcRuy.js";import{H as x}from"./Help-m-R3X_6I.js";import{R as C}from"./RadioButton-VqZxumax.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CZUsqV8B.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DrrQFV4N.js";import"./mergeRefs-DTlEGHEY.js";import"./BaseRadioButton.stories-Co59K0g0.js";import"./BaseRadioButton-CsK2IXLZ.js";import"./useId-DXTHZCeo.js";import"./Label-BRVqiOVK.js";import"./SupportLabel-BcS-_Zrg.js";import"./SuccessIcon-Cyb2DIOb.js";import"./Icon-Y82CdhOO.js";import"./WarningIcon-AzDFSvyd.js";import"./InputPanel-qfXq6-xG.js";import"./Button-D8IH0grp.js";import"./usePreviousValue-DqwYm3RO.js";import"./Loader-D9zXCe8k.js";import"./useDelayedRender-DRNRTTff.js";import"./Title-CDvST8Su.js";import"./Card-XIws2XqZ.js";import"./Text-C0st8_yd.js";import"./Tag-BlYozskN.js";import"./ExpandablePanel-Ce5BzHhr.js";import"./useAnimatedHeightBetween-lPNjCpW-.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BzGooafa.js";import"./Expander-B1WvNS8-.js";import"./ChevronDownIcon-CwfKJMhm.js";import"./ChevronUpIcon-wfdZg-kn.js";import"./ListItem-CJi9u99H.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
