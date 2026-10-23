import{r as n,j as i}from"./iframe-CojrUSGT.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C4aLTOr9.js";import{CheckboxStory as c}from"./Checkbox.stories-CE2NGvyq.js";import d from"./Help.stories-D86UVAEH.js";import k from"./RadioButton.stories-C6m2YWXx.js";import{RadioPanel as u}from"./RadioPanel.stories-C9GIF7Jt.js";import{F as g}from"./FieldGroup-CQ53nc0y.js";import{C as h}from"./Checkbox-ChdEPEQy.js";import{R as b}from"./RadioPanel-CxrHw4hV.js";import{H as x}from"./Help-B22HaQk1.js";import{R as C}from"./RadioButton-Duh30_9X.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-rS_hYUSO.js";import"./clsx-B-dksMZM.js";import"./Flex-Bab51KFz.js";import"./SlotComponent-BUEAyghz.js";import"./mergeRefs-SVScEcvK.js";import"./Button-C78HIcaC.js";import"./usePreviousValue-B0Idk8nI.js";import"./Loader-BkxCXTIh.js";import"./useDelayedRender-Cr3HQDBu.js";import"./useId-Br0SqQb6.js";import"./Label-DbkJ6Prk.js";import"./SupportLabel-BPWe7_Y2.js";import"./SuccessIcon-Dmft2l8F.js";import"./Icon-1BTzykdB.js";import"./WarningIcon-OPuQDt20.js";import"./BaseRadioButton.stories-CKLqETcV.js";import"./BaseRadioButton-ByJ9O8S9.js";import"./Title-tEy59JK0.js";import"./Card-zbH6Nnyu.js";import"./Text-DUY_eln3.js";import"./Tag-BUkykm74.js";import"./ExpandablePanel-DIJEwkop.js";import"./useAnimatedHeightBetween-Cq1vnqMa.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D52SUKCu.js";import"./Expander-BicdHxMq.js";import"./ChevronUpIcon-WCfbQAko.js";import"./ListItem-Cox5Xs_7.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
