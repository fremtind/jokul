import{r as p,j as i}from"./iframe-DACd5zMS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DxpCOstd.js";import l from"./Help.stories-BbMb7iWd.js";import c from"./RadioButton.stories-DD0X1wIx.js";import{F as d}from"./FieldGroup-C87ChbqP.js";import{C as k,a as u}from"./CheckboxPanel.stories-Cl5wvWtF.js";import{RadioPanel as g}from"./RadioPanel.stories-Du-KRQTC.js";import{C as h}from"./Checkbox-CnqIkqeS.js";import{R as b}from"./RadioPanel-CySdC9vP.js";import{H as x}from"./Help-nFH-2p3A.js";import{R as C}from"./RadioButton-BMewiWJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-gnwuiGCW.js";import"./BaseRadioButton-DpI6zD-9.js";import"./clsx-B-dksMZM.js";import"./useId-D_lsZKmS.js";import"./Label-CD4H8hEq.js";import"./SupportLabel-Cp53lgqp.js";import"./SuccessIcon-BC2lMf5R.js";import"./Icon-DrGoPR27.js";import"./WarningIcon-BUPrdMKf.js";import"./InputPanel-CBTKc2Mx.js";import"./Flex-B8DYJnGg.js";import"./SlotComponent-BrLABa6_.js";import"./mergeRefs-2Y0p5MjN.js";import"./Button-Xml-lwSf.js";import"./usePreviousValue-DD6KhMM8.js";import"./Loader-BHeTSiGO.js";import"./useDelayedRender-CBVwF6zP.js";import"./Title-BjTe1yGw.js";import"./Card-Wxnrd0Kt.js";import"./Text-C6w5_oQC.js";import"./Tag-ki0Oj94N.js";import"./ExpandablePanel-CGrclXOu.js";import"./useAnimatedHeightBetween-BUR7OznS.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DGZj9rAk.js";import"./Expander-Cck5BDeb.js";import"./ChevronDownIcon-CdG4Xhag.js";import"./ChevronUpIcon-Cq5lUHC8.js";import"./ListItem-HW9fl08t.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
