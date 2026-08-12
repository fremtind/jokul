import{r as p,j as i}from"./iframe-DC8U2c_F.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C9Yx8kkX.js";import l from"./Help.stories-DBIqQv76.js";import c from"./RadioButton.stories-CaZMmdVu.js";import{F as d}from"./FieldGroup-CvNQ5q82.js";import{C as k,a as u}from"./CheckboxPanel.stories-BYGB0V3r.js";import{RadioPanel as g}from"./RadioPanel.stories-BMzZaoir.js";import{C as h}from"./Checkbox-AN0ocXIo.js";import{R as b}from"./RadioPanel-CK4wGJVs.js";import{H as x}from"./Help-B2YgzrnU.js";import{R as C}from"./RadioButton-DWNC9y5M.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D1SgBzeK.js";import"./BaseRadioButton-BzHYlcfF.js";import"./clsx-B-dksMZM.js";import"./useId-BURPvmgR.js";import"./Label-DApsMayJ.js";import"./SupportLabel-DYZAB6pn.js";import"./SuccessIcon-DrYXcswI.js";import"./Icon-CHxPqR4m.js";import"./WarningIcon-TC0Uusis.js";import"./InputPanel-7ypxf14R.js";import"./Flex-Y03mJXlS.js";import"./SlotComponent-DiHnNhbl.js";import"./mergeRefs-CZeUCI2O.js";import"./Button-D7oQOfcs.js";import"./usePreviousValue-CX2UKyTO.js";import"./Loader-BO72GKmV.js";import"./useDelayedRender-B65F43it.js";import"./Title-DEQAGF6p.js";import"./Card-F1LWg0ix.js";import"./Text-Gin1mTBN.js";import"./Tag-CeVyGWQj.js";import"./ExpandablePanel-BRtDmihM.js";import"./useAnimatedHeightBetween-C25b72O4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DvmEhR98.js";import"./Expander-B6vFBPWT.js";import"./ChevronDownIcon-jW_ihzI3.js";import"./ChevronUpIcon-79Onf8kl.js";import"./ListItem-BF-KXFbt.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
