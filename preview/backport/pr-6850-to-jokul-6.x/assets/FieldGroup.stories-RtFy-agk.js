import{r as n,j as i}from"./iframe-DtW-9sqb.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories--4KXyND0.js";import{CheckboxStory as c}from"./Checkbox.stories-0CPfYW19.js";import d from"./Help.stories-Dcs8EXiL.js";import k from"./RadioButton.stories-DtsKPdq4.js";import{RadioPanel as u}from"./RadioPanel.stories-DuStfLBf.js";import{F as g}from"./FieldGroup-ChRuRpZY.js";import{C as h}from"./Checkbox-C9Rkffbe.js";import{R as b}from"./RadioPanel--JGZoxXg.js";import{H as x}from"./Help-BEc1ni-J.js";import{R as C}from"./RadioButton-AmB1Hbcc.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Du82BPnT.js";import"./clsx-B-dksMZM.js";import"./Flex-DNPfvKWh.js";import"./SlotComponent-CS8MsJlf.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Nkv-p6dA.js";import"./usePreviousValue-Cri8f6EZ.js";import"./Loader-BiTqj7ic.js";import"./useDelayedRender-OjIHkTBj.js";import"./useId-D1wItdsp.js";import"./Label-WUj5foir.js";import"./SupportLabel-783_B6i6.js";import"./SuccessIcon-CbxBfvp_.js";import"./Icon-duu7qSjq.js";import"./WarningIcon-D7jXHdNB.js";import"./BaseRadioButton.stories-UKRi00NB.js";import"./BaseRadioButton-CPmT4qro.js";import"./Title-CGL4XQ7H.js";import"./Card-D3xjfWqQ.js";import"./Text-mKeTMiAy.js";import"./Tag-yfA-q5Br.js";import"./ExpandablePanel-B-n4JML4.js";import"./useAnimatedHeightBetween-DanVHCTv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bdbjh0cT.js";import"./Expander-Cjmie8Fe.js";import"./ChevronUpIcon-DGdofZOS.js";import"./ListItem-Bybk9JxF.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
