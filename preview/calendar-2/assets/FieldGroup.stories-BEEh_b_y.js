import{r as p,j as i}from"./iframe-B0OXozOR.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DuTzdDsp.js";import l from"./Help.stories-DvtVgC_l.js";import c from"./RadioButton.stories-DaQR_fL8.js";import{F as d}from"./FieldGroup-CC0e3bTm.js";import{C as k,a as u}from"./CheckboxPanel.stories-RddJRmXP.js";import{RadioPanel as g}from"./RadioPanel.stories-xJnBzyaP.js";import{C as h}from"./Checkbox-CyJozIyf.js";import{R as b}from"./RadioPanel-DuOfaxuj.js";import{H as x}from"./Help-ButORV01.js";import{R as C}from"./RadioButton-CWbUsPqY.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-No1ggjxz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-ChLw8j_9.js";import"./mergeRefs-CXgB9xzy.js";import"./BaseRadioButton.stories-DtG2VENM.js";import"./BaseRadioButton-BOhtkAxi.js";import"./useId-lfdxMolr.js";import"./Label-B1ucgc6b.js";import"./SupportLabel-BL1zmUUd.js";import"./SuccessIcon-DHSC7y5g.js";import"./Icon-D2jnq176.js";import"./WarningIcon-CMk7LJtk.js";import"./InputPanel-BvCi3ncm.js";import"./Button-BBnf5C9P.js";import"./usePreviousValue-D3b4jXvv.js";import"./Loader-BM34gmlH.js";import"./useDelayedRender-DFD2dJMI.js";import"./Title-BW4p4-dZ.js";import"./Card-24QuK2lP.js";import"./Text-CIVY_gVa.js";import"./Tag-DK-4NY-7.js";import"./ExpandablePanel-D4Ldd0l2.js";import"./useAnimatedHeightBetween-D8ohUbPh.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Byr_0bhy.js";import"./Expander-CbXmpRph.js";import"./ChevronUpIcon-J2o5W2vi.js";import"./ListItem-CI9VbwQQ.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
