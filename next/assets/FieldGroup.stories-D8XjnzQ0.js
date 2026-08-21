import{r as p,j as i}from"./iframe-BV0NO285.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DaPbW0-i.js";import l from"./Help.stories-DGzRUbBE.js";import c from"./RadioButton.stories-BLJZgsCH.js";import{F as d}from"./FieldGroup-_JM6kZUS.js";import{C as k,a as u}from"./CheckboxPanel.stories-BD7m4ACv.js";import{RadioPanel as g}from"./RadioPanel.stories-B8ghJ2gz.js";import{C as h}from"./Checkbox-BvMRBN5J.js";import{R as b}from"./RadioPanel-BfyK2T6W.js";import{H as x}from"./Help-Coj1w3ij.js";import{R as C}from"./RadioButton-B0ZtWBJw.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DBbtSes8.js";import"./BaseRadioButton-7VHxazLO.js";import"./clsx-B-dksMZM.js";import"./useId-CAFhSTsW.js";import"./Label-BkHVRbgB.js";import"./SupportLabel-CAGxgCWU.js";import"./SuccessIcon-CV6soviC.js";import"./Icon-CJKxfMd-.js";import"./WarningIcon-N5Xtou5r.js";import"./InputPanel-CdRtYBXs.js";import"./Flex-D0FkV7Pl.js";import"./SlotComponent-TDlCq6UN.js";import"./mergeRefs-5d2grJL5.js";import"./Button-DxdOlsC0.js";import"./usePreviousValue-DEaHYlVJ.js";import"./Loader-6bY9Kx9f.js";import"./useDelayedRender-BolzdUo_.js";import"./Title-BbAe40uU.js";import"./Card-CnaXHdCj.js";import"./Text-D1he3rTK.js";import"./Tag-CaaB4SwR.js";import"./ExpandablePanel-BQfOx_9i.js";import"./useAnimatedHeightBetween-BEY-PZh1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CMr0jNS4.js";import"./Expander-BIjpTtUY.js";import"./ChevronDownIcon-DR_TGp-B.js";import"./ChevronUpIcon-BpxIWysg.js";import"./ListItem-BSW37Vj6.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
