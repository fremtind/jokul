import{r as p,j as i}from"./iframe-DC-3-uyd.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BU-8XrgN.js";import l from"./Help.stories-Ii1_IN_W.js";import c from"./RadioButton.stories-CphsN_pn.js";import{F as d}from"./FieldGroup-BmwesVv7.js";import{C as k,a as u}from"./CheckboxPanel.stories-_TZwCXkQ.js";import{RadioPanel as g}from"./RadioPanel.stories-B2AGjxpK.js";import{C as h}from"./Checkbox-D58x0eLq.js";import{R as b}from"./RadioPanel-DBLYTlrk.js";import{H as x}from"./Help-C1zc8duh.js";import{R as C}from"./RadioButton-BtANIgJq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-v3s_VPVC.js";import"./Label-CzZuHFxj.js";import"./SupportLabel-CeeFtam-.js";import"./SuccessIcon-BvhrHHlw.js";import"./Icon-DFBhF5Wg.js";import"./WarningIcon-BX1ox5wU.js";/* empty css               *//* empty css               */import"./Flex-wlSonJ7k.js";import"./SlotComponent-B6MLg4ke.js";import"./mergeRefs-BKf2yjCN.js";import"./BaseRadioButton.stories-BQrGZIXZ.js";import"./BaseRadioButton-BbLKU16B.js";import"./InputPanel-BIFP3EFk.js";import"./Button-IYpmQIr6.js";import"./usePreviousValue-DZKtktEi.js";import"./Loader-BWnedKHf.js";import"./useDelayedRender-J4n5LV5F.js";import"./Title-Ta79BBhh.js";import"./Card-Ck4Khmja.js";import"./Text-BmTcAeTm.js";import"./Tag-DVNIXfp_.js";import"./ExpandablePanel-D1gNpm5E.js";import"./useAnimatedHeightBetween-B3CJeTFj.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DdvNI27L.js";import"./Expander-BTBM_Ldd.js";import"./ChevronUpIcon-DV3VNkBW.js";import"./ListItem-DekGgXKK.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
