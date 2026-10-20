import{r as n,j as i}from"./iframe-B5Kj9iD6.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C3yaJbV3.js";import{CheckboxStory as c}from"./Checkbox.stories-7eHeC6H6.js";import d from"./Help.stories-DSPZocog.js";import k from"./RadioButton.stories-N-NcVe8f.js";import{RadioPanel as u}from"./RadioPanel.stories-CxG7jiMi.js";import{F as g}from"./FieldGroup-C1gnvh5a.js";import{C as h}from"./Checkbox-2Anl7b-n.js";import{R as b}from"./RadioPanel-56o7EFPM.js";import{H as x}from"./Help-DcyPQvSD.js";import{R as C}from"./RadioButton-D_nrwJun.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CbszgWLn.js";import"./clsx-B-dksMZM.js";import"./Flex-DMRrCV_j.js";import"./SlotComponent-DpXwIPDl.js";import"./mergeRefs-CWduaVoq.js";import"./Button-BftR3Gn4.js";import"./usePreviousValue-B13vnV3z.js";import"./Loader-BlKu81Cn.js";import"./useDelayedRender-zhNr4OHg.js";import"./useId-pqm6co_M.js";import"./Label-567fJjDj.js";import"./SupportLabel-YqRNllhm.js";import"./SuccessIcon-CXsW_sE2.js";import"./Icon-ByBkpEs3.js";import"./WarningIcon-1E9DlQoy.js";import"./BaseRadioButton.stories-B8CloeQI.js";import"./BaseRadioButton-f5u36de1.js";import"./Title-WDr1jmX8.js";import"./Card-CpLliJBZ.js";import"./Text-bOVNpK80.js";import"./Tag-0OuL4XjG.js";import"./ExpandablePanel-CbwHNOOx.js";import"./useAnimatedHeightBetween-DnI8dS8i.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BMcBLZZn.js";import"./Expander-DiJtSIdw.js";import"./ChevronUpIcon-6DGqDvLd.js";import"./ListItem-DIPqPICv.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
