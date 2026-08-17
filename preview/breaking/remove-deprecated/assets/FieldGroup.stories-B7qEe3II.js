import{r as p,j as i}from"./iframe-CQCe2xSR.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CDBg7Y7O.js";import l from"./Help.stories-C36zo4mZ.js";import c from"./RadioButton.stories-NZ72SCNG.js";import{F as d}from"./FieldGroup-BQriW-my.js";import{C as k,a as u}from"./CheckboxPanel.stories-GoJkIj29.js";import{RadioPanel as g}from"./RadioPanel.stories-BWjqUnDJ.js";import{C as h}from"./Checkbox-ChdyMv0c.js";import{R as b}from"./RadioPanel-DaoP-E_5.js";import{H as x}from"./Help-Dkd12jFE.js";import{R as C}from"./RadioButton-DPge6kSB.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D4d4GIeb.js";import"./BaseRadioButton-Y1k-9bTW.js";import"./clsx-B-dksMZM.js";import"./useId-UnUFJrNu.js";import"./Label-9y9TPUfB.js";import"./SupportLabel-N-1C5EC1.js";import"./SuccessIcon-DvpoTpxc.js";import"./Icon-DddJ3vzu.js";import"./WarningIcon-BIxfE3XD.js";import"./InputPanel-t4rgDX7S.js";import"./Flex-wwXUR36J.js";import"./SlotComponent-CoyCg-JS.js";import"./mergeRefs-B-Jndo4v.js";import"./Button-4jn33VIX.js";import"./usePreviousValue-tf4xCEvH.js";import"./Loader-Dw4c3QgB.js";import"./useDelayedRender-CJYww6c8.js";import"./Title-D4k4J1hy.js";import"./Card-8LlVlDCt.js";import"./Text-BnYJ2dom.js";import"./Tag-Be5OUixw.js";import"./ExpandablePanel-R4BuF4T0.js";import"./useAnimatedHeightBetween-CNLxatnl.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BSQSoLwe.js";import"./Expander-DrDl5jeE.js";import"./ChevronDownIcon-BWCMF_9V.js";import"./ChevronUpIcon-4e5Y2nrd.js";import"./ListItem-CKwZQHaX.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
