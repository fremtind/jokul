import{r as n,j as i}from"./iframe-BBQ_8FxR.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BpDSKvcR.js";import{CheckboxStory as c}from"./Checkbox.stories-BBx6nnhD.js";import d from"./Help.stories-Cpb7CCHU.js";import k from"./RadioButton.stories-u87aH-WA.js";import{RadioPanel as u}from"./RadioPanel.stories-BT_toKAa.js";import{F as g}from"./FieldGroup-SEZUIA5P.js";import{C as h}from"./Checkbox-BiSYFBYP.js";import{R as b}from"./RadioPanel-flUuwJkL.js";import{H as x}from"./Help-D6oIXff0.js";import{R as C}from"./RadioButton-DPoPptAs.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CV8aPiwO.js";import"./clsx-B-dksMZM.js";import"./Flex-C--ZzOFS.js";import"./SlotComponent-Bbh2VytA.js";import"./mergeRefs-CJYIewL-.js";import"./Button-CycWb-4D.js";import"./usePreviousValue-DqFrnf_p.js";import"./Loader-DPjWdjdn.js";import"./useDelayedRender-D9lBpN70.js";import"./useId-DIXol0A3.js";import"./Label-9hYeBLUz.js";import"./SupportLabel-BUdnrLLA.js";import"./SuccessIcon-Ca5m4NCE.js";import"./Icon-PfIlFl4q.js";import"./WarningIcon-C5fVS7Qy.js";import"./BaseRadioButton.stories-D4sglGru.js";import"./BaseRadioButton-Dug0ZHey.js";import"./Title-CmyvkLL6.js";import"./Card-Bg1186HF.js";import"./Text-D7Yv_EgN.js";import"./Tag-Dq3MOsnq.js";import"./ExpandablePanel-DYiVhU05.js";import"./useAnimatedHeightBetween-YxPsP4vK.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BtDI1g6o.js";import"./Expander-DQyz05ac.js";import"./ChevronUpIcon-DrOEKaZn.js";import"./ListItem-OcRRLDKH.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
