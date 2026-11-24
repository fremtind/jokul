import{r as p,j as i}from"./iframe-DoZ409uh.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DZYsZhoH.js";import{CheckboxStory as c}from"./Checkbox.stories-CwPsWpfb.js";import d from"./Help.stories-BF-MIBzA.js";import k from"./RadioButton.stories-BkU-ad6h.js";import{RadioPanel as u}from"./RadioPanel.stories-BljR1zCo.js";import{F as g}from"./FieldGroup-DAlpzQ8u.js";import{C as h}from"./Checkbox-DBDQs4UA.js";import{R as b}from"./RadioPanel-CBQHQe87.js";import{H as x}from"./Help-CGk_rAYD.js";import{R as C}from"./RadioButton-BmuslMzp.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DTYUA9u4.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./Flex-BDAeUpTT.js";import"./SlotComponent-Dvc49Kqd.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-7kX1j0fB.js";import"./usePreviousValue-Bk4SwNw7.js";import"./Loader-iGGDwTA1.js";import"./useDelayedRender-B1TqhG3T.js";import"./BaseRadioButton.stories-DwP-20yN.js";import"./BaseRadioButton-DUXjJOvh.js";import"./useId-iTcm_5l2.js";import"./Title-BhEnSO3x.js";import"./Card-DMQTGZlu.js";import"./Text-B4cZ7CDC.js";import"./Tag-DkSifBNZ.js";import"./ExpandablePanel-D5F7XPO_.js";import"./useAnimatedHeightBetween-B3xVjvcG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DwKuvO3R.js";import"./Expander-CLs2TO3K.js";import"./ChevronDownIcon-DZ_6JZJ2.js";import"./Icon-CJzzlkpx.js";import"./ChevronUpIcon-CYLl4GFX.js";import"./ListItem-naD9hGfk.js";import"./Label-B7C4sZh0.js";import"./SupportLabel-DBoaz8oJ.js";import"./SuccessIcon-CTsj7I9k.js";import"./WarningIcon-fs98jhjS.js";const se={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
