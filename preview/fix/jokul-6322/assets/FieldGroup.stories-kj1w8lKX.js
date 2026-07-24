import{r as p,j as i}from"./iframe-Dv1jIxoy.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CmoYBC8E.js";import l from"./Help.stories-DeIWRYFX.js";import c from"./RadioButton.stories-DOfPn5aU.js";import{F as d}from"./FieldGroup-xxDvK_Dq.js";import{C as k,a as u}from"./CheckboxPanel.stories-DcRNWLll.js";import{RadioPanel as g}from"./RadioPanel.stories-DA_5e-A_.js";import{C as h}from"./Checkbox-DCWFoAP4.js";import{R as b}from"./RadioPanel-CoE1T4t6.js";import{H as x}from"./Help-DHUW5tsi.js";import{R as C}from"./RadioButton-CNtw7O0i.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-qhQ9aTl5.js";import"./BaseRadioButton-Dhg9NOlL.js";import"./clsx-B-dksMZM.js";import"./useId-DkXNANuD.js";import"./Label-CPFg0frD.js";import"./SupportLabel-hfZYRiYr.js";import"./SuccessIcon-C1O8y8HK.js";import"./Icon-EAfqmxr_.js";import"./WarningIcon-0CTSxi72.js";import"./InputPanel-BLKOBkHI.js";import"./Flex-1ltXsjge.js";import"./SlotComponent-uhRO-vGf.js";import"./mergeRefs-BT0H3FdJ.js";import"./Button-DkxioIPn.js";import"./usePreviousValue-oKjGnjlP.js";import"./Loader-BVT2e-Aq.js";import"./useDelayedRender-Ddj3MKMS.js";import"./Title-DW6-3qtF.js";import"./Card-249zwfuF.js";import"./Text-DS56oNDD.js";import"./Tag-DWw7bNMR.js";import"./ExpandablePanel-n6nbix3p.js";import"./useAnimatedHeightBetween-BMVcKnz7.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-9eKaE4Mi.js";import"./Expander-DXuYDSPu.js";import"./ChevronDownIcon-Cy_XBcSW.js";import"./ChevronUpIcon-NkhwtJ_-.js";import"./ListItem-B6rKv4CG.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
