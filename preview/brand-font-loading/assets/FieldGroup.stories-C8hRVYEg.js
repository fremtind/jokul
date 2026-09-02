import{r as n,j as i}from"./iframe-CZGuvWz9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-xCqTWoOF.js";import l from"./Help.stories-D7xj9-jy.js";import c from"./RadioButton.stories-B_ibQbbu.js";import{F as d}from"./FieldGroup-ftoCr09m.js";import{C as k,a as u}from"./CheckboxPanel.stories-B19BZ4-W.js";import{RadioPanel as g}from"./RadioPanel.stories-D0gNnz6L.js";import{C as h}from"./Checkbox-DqMstbDo.js";import{R as b}from"./RadioPanel-Cg68Wshw.js";import{H as x}from"./Help-lX3zP8l9.js";import{R as C}from"./RadioButton-CwWaHN7M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BXnQ38d8.js";import"./Label-D4OwJwTQ.js";import"./SupportLabel-BjPrZoWM.js";import"./SuccessIcon-D53BCjs3.js";import"./Icon-BUgVbsfK.js";import"./WarningIcon-Gsp5750W.js";import"./BaseRadioButton.stories-DUL8fd5K.js";import"./BaseRadioButton-BjNrrzhv.js";import"./InputPanel-wsQ_vFbp.js";import"./Flex-BPTlQpPV.js";import"./SlotComponent-DPeoQ6O-.js";import"./mergeRefs-Cw9DO2Ch.js";import"./Button-u8DDX69H.js";import"./usePreviousValue-UdSFGDlk.js";import"./Loader-C4HDQSss.js";import"./useDelayedRender-CNwVi-ZM.js";import"./Title-evbYkkal.js";import"./Card-BQnTwpzm.js";import"./Text-bJPFqlqB.js";import"./Tag-Skm73Z2m.js";import"./ExpandablePanel-DJk6sT-_.js";import"./useAnimatedHeightBetween-UfSBVUzE.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cl2tXgLC.js";import"./Expander-BbD55i9h.js";import"./ChevronUpIcon-pTv6xhFm.js";import"./ListItem-Bkh7m-9c.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
