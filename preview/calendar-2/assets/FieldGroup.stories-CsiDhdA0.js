import{r as p,j as i}from"./iframe-BZmcJa8V.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BSGwnyDz.js";import l from"./Help.stories-ClKX65An.js";import c from"./RadioButton.stories-ADosZGk2.js";import{F as d}from"./FieldGroup-K5dhXeny.js";import{C as k,a as u}from"./CheckboxPanel.stories-DhIC00Aa.js";import{RadioPanel as g}from"./RadioPanel.stories-Oc_kE6Ec.js";import{C as h}from"./Checkbox-BBSYtdTd.js";import{R as b}from"./RadioPanel-CpPtHdYY.js";import{H as x}from"./Help-xQ2gm0hz.js";import{R as C}from"./RadioButton-Bi4Sqf-z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B24-RPn9.js";import"./Label-BiKRDH54.js";import"./SupportLabel-yINM9cBh.js";import"./SuccessIcon-CvA7p0Kz.js";import"./Icon-B4QrTS4L.js";import"./WarningIcon-HsoYDbJw.js";/* empty css               *//* empty css               */import"./Flex-CS_MJFfT.js";import"./SlotComponent-DGcYP4pa.js";import"./mergeRefs-DRRMip4j.js";import"./BaseRadioButton.stories-CutvXs9-.js";import"./BaseRadioButton-CPeA1y1x.js";import"./InputPanel-DhXW4XW_.js";import"./Button-CEjSoeJV.js";import"./usePreviousValue-CxqYLfuA.js";import"./Loader-6ydfcUWu.js";import"./useDelayedRender-DEnoWJ1Z.js";import"./Title-dSiYC7rt.js";import"./Card-DldbHEgC.js";import"./Text-DO0fxEm2.js";import"./Tag-CZnl3aWM.js";import"./ExpandablePanel-DdYK5GhH.js";import"./useAnimatedHeightBetween-D2JU1Tvp.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BJaVgFPl.js";import"./Expander-DXdtgwsw.js";import"./ChevronUpIcon-C2mn39Ah.js";import"./ListItem-Bxha0JV4.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
