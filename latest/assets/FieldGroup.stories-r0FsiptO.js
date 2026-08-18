import{r as p,j as i}from"./iframe-DdQQqEfd.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-b1EvcsrZ.js";import l from"./Help.stories-CMYmzeZD.js";import c from"./RadioButton.stories-BYtcj6H-.js";import{F as d}from"./FieldGroup-8jZVyfe2.js";import{C as k,a as u}from"./CheckboxPanel.stories-B6J1lxOs.js";import{RadioPanel as g}from"./RadioPanel.stories-D_T0ZDt9.js";import{C as h}from"./Checkbox-dwd-YWcg.js";import{R as b}from"./RadioPanel-BmXVvbNE.js";import{H as x}from"./Help-BxnfhKNy.js";import{R as C}from"./RadioButton-Cr78qZxx.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DxweAVmT.js";import"./BaseRadioButton-B6tm2bHZ.js";import"./clsx-B-dksMZM.js";import"./useId-DAUDHsqE.js";import"./Label-BpTTiVkP.js";import"./SupportLabel-L83g5-SA.js";import"./SuccessIcon-DQUNTgcv.js";import"./Icon-BVIS_Vx6.js";import"./WarningIcon-iIGXusYK.js";import"./InputPanel-CbDN0Lb6.js";import"./Flex-9j1X-9YZ.js";import"./SlotComponent-HBdcWKcD.js";import"./mergeRefs-DSsyqhDR.js";import"./Button-e_9QnJMi.js";import"./usePreviousValue-DgGg-LzB.js";import"./Loader-77IGHsEM.js";import"./useDelayedRender-CAGGGkmA.js";import"./Title-DqpaysQx.js";import"./Card-ROlkSO9V.js";import"./Text-4a88Qov5.js";import"./Tag-B68n5Tj3.js";import"./ExpandablePanel-C_YUlZ3i.js";import"./useAnimatedHeightBetween-DFVN0HbD.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DhMO8oTN.js";import"./Expander-DPu1LLOx.js";import"./ChevronDownIcon-QM9PvZcT.js";import"./ChevronUpIcon-BPjvPXvn.js";import"./ListItem-CqXoEHSa.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
