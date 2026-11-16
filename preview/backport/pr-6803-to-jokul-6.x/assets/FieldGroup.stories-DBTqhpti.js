import{r as n,j as i}from"./iframe-Dmt_kIL9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BzP2I5MN.js";import{CheckboxStory as c}from"./Checkbox.stories-DJMJKqgj.js";import d from"./Help.stories-CzENHqRT.js";import k from"./RadioButton.stories-B60L7sZK.js";import{RadioPanel as u}from"./RadioPanel.stories-DO-ws08X.js";import{F as g}from"./FieldGroup-DPGsZ83N.js";import{C as h}from"./Checkbox-DqhOxNuB.js";import{R as b}from"./RadioPanel-DqeMm8A6.js";import{H as x}from"./Help-DLWQI9ML.js";import{R as C}from"./RadioButton-DJ45JtET.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-4CKGQqqk.js";import"./clsx-B-dksMZM.js";import"./Flex-zveYfhgJ.js";import"./SlotComponent-xlqU8_HG.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BIv3-C0i.js";import"./usePreviousValue-B9a-1vxn.js";import"./Loader-D7YJkTBN.js";import"./useDelayedRender-BBLEL1Py.js";import"./useId-rOyNvkX1.js";import"./Label-DvpRV6Nz.js";import"./SupportLabel-zuP4KBVT.js";import"./SuccessIcon-BmpxPF6F.js";import"./Icon-BT99D_wv.js";import"./WarningIcon--ppBYMzI.js";import"./BaseRadioButton.stories-BZFfQLQC.js";import"./BaseRadioButton-svd0J8qX.js";import"./Title-B3jYA6Gn.js";import"./Card-fwUGNUrV.js";import"./Text-BvTDjnKE.js";import"./Tag-Do90Myt9.js";import"./ExpandablePanel-BhfOO1_E.js";import"./useAnimatedHeightBetween-Darjmfd2.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C2YCsi74.js";import"./Expander-DNeD1QHV.js";import"./ChevronUpIcon-4V3XocHQ.js";import"./ListItem-DMon_Ob_.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
