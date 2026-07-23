import{r as p,j as i}from"./iframe-B_a7fdWG.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CozfAOO4.js";import l from"./Help.stories-BQrROEWI.js";import c from"./RadioButton.stories-CBu-hkLr.js";import{F as d}from"./FieldGroup-CC_J0ViK.js";import{C as k,a as u}from"./CheckboxPanel.stories-BOxq27Tc.js";import{RadioPanel as g}from"./RadioPanel.stories-DW6d8rkM.js";import{C as h}from"./Checkbox-BXr5PflQ.js";import{R as b}from"./RadioPanel-ryAfRVGw.js";import{H as x}from"./Help-C5TrzEzi.js";import{R as C}from"./RadioButton-Ck7mlfkV.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-mY32RR_t.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DZSAm9H2.js";import"./mergeRefs-CX_-d4Se.js";import"./BaseRadioButton.stories-Dbl7w3Py.js";import"./BaseRadioButton-BUOKutAm.js";import"./useId-Cg-rCeCz.js";import"./Label-Dy-n_Pco.js";import"./SupportLabel-B6mrXGXk.js";import"./SuccessIcon-BmR8FREg.js";import"./Icon-KT0PYLjZ.js";import"./WarningIcon-BpavfUXs.js";import"./InputPanel-Br_6pyU_.js";import"./Button-CFD3M9m2.js";import"./usePreviousValue-BGOvSBhw.js";import"./Loader-DiQlMj4v.js";import"./useDelayedRender-D4o9BMHN.js";import"./Title-tDCHyiQQ.js";import"./Card-Beah5ds-.js";import"./Text-Dgu0V24K.js";import"./Tag-ut0Cqhr-.js";import"./ExpandablePanel-DaIbotB2.js";import"./useAnimatedHeightBetween-C5ciioDA.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CYPDbdDi.js";import"./Expander-Badj-Lxx.js";import"./ChevronUpIcon-C97ExCcb.js";import"./ListItem-BY-3u8nJ.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
