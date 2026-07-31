import{r as p,j as i}from"./iframe--O4Sgmp8.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DfXrpYOz.js";import l from"./Help.stories-BlJP95D_.js";import c from"./RadioButton.stories-Den9hr7F.js";import{F as d}from"./FieldGroup-DGkuyu5H.js";import{C as k,a as u}from"./CheckboxPanel.stories-Buu_E4iZ.js";import{RadioPanel as g}from"./RadioPanel.stories-8wwXuuny.js";import{C as h}from"./Checkbox-B5CnxOlF.js";import{R as b}from"./RadioPanel-lo3LaBCg.js";import{H as x}from"./Help-D18waT3U.js";import{R as C}from"./RadioButton-CwG8xrpr.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-ZPX_rhsg.js";import"./BaseRadioButton-DNAxIe2g.js";import"./clsx-B-dksMZM.js";import"./useId-DiLOrs8n.js";import"./Label-DyfSKmX1.js";import"./SupportLabel-SJ4jE4ng.js";import"./SuccessIcon-CEDZ0Jqb.js";import"./Icon-BWRctQy3.js";import"./WarningIcon-MuosO0K-.js";import"./InputPanel-K7i6skGc.js";import"./Flex-DtAmyVy6.js";import"./SlotComponent-B5yXgo7H.js";import"./mergeRefs-DWKDjYfK.js";import"./Button-CFioT-f7.js";import"./usePreviousValue-CU-t4Wl9.js";import"./Loader-D6Lj87kt.js";import"./useDelayedRender-BcIKhRZf.js";import"./Title-BJnhw8Qv.js";import"./Card-BkNlatRO.js";import"./Text-CFdcRXKS.js";import"./Tag-jxjMFgBD.js";import"./ExpandablePanel-B5AnKD2g.js";import"./useAnimatedHeightBetween-D27DJzA3.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DU55ODXv.js";import"./Expander-Dpfijtr1.js";import"./ChevronDownIcon-CBygDcyt.js";import"./ChevronUpIcon-DTK3vmBn.js";import"./ListItem-CnFxMUS4.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
