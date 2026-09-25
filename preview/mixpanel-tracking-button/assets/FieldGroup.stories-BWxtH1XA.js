import{r as n,j as i}from"./iframe-Cabb0cwQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B745zW-M.js";import{CheckboxStory as c}from"./Checkbox.stories-CqFw7lGx.js";import d from"./Help.stories-BDS3BfwJ.js";import k from"./RadioButton.stories-B9XL30Gi.js";import{RadioPanel as u}from"./RadioPanel.stories-DBzUrBkh.js";import{F as g}from"./FieldGroup-D-BxDCRz.js";import{C as h}from"./Checkbox-Bj0U5lF3.js";import{R as b}from"./RadioPanel-B_3Dj-yx.js";import{H as x}from"./Help-Dpmk-vJd.js";import{R as C}from"./RadioButton-CpdjgV-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-mmrXDgtv.js";import"./clsx-B-dksMZM.js";import"./Flex-Cp3Zq7U9.js";import"./SlotComponent-DW-kEsur.js";import"./mergeRefs-DdSucjiq.js";import"./Button-DdnEiirQ.js";import"./usePreviousValue-DvXXd5hS.js";import"./Loader-KeFXwfCq.js";import"./useDelayedRender-B3aey64c.js";import"./useId-BadewnWp.js";import"./Label-CSbCPEDB.js";import"./SupportLabel-BqXnMWyR.js";import"./SuccessIcon-CpbhGxjV.js";import"./Icon-oh89npbh.js";import"./WarningIcon-SufTIFVB.js";import"./BaseRadioButton.stories-BWIelFK4.js";import"./BaseRadioButton-DuBx_-u4.js";import"./Title-B9bYAtcS.js";import"./Card-BRkFCMWs.js";import"./Text-p1ifbUvM.js";import"./Tag-7p87Bwva.js";import"./ExpandablePanel-CCgMpJ24.js";import"./useAnimatedHeightBetween-CkZwWw66.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CA19JNLd.js";import"./Expander-hpFKQFV9.js";import"./ChevronUpIcon-Q3DlVJX0.js";import"./ListItem-CzImOM72.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
