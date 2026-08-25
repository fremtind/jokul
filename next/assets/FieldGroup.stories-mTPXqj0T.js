import{r as n,j as i}from"./iframe-COEku1Tw.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BVKCWlAf.js";import l from"./Help.stories-Bqu-Xnpw.js";import c from"./RadioButton.stories-DXZ6q2F1.js";import{F as d}from"./FieldGroup-vFepKaes.js";import{C as k,a as u}from"./CheckboxPanel.stories-CFXWmBeP.js";import{RadioPanel as g}from"./RadioPanel.stories-CPEyFFe2.js";import{C as h}from"./Checkbox-BCl2ZHj2.js";import{R as b}from"./RadioPanel-DnoT12RA.js";import{H as x}from"./Help-SBItB6h1.js";import{R as C}from"./RadioButton-CUIbDnN3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dc6HvOfk.js";import"./Label-BkkLkEGx.js";import"./SupportLabel-ZMAIqxcF.js";import"./SuccessIcon-CeLjg8aZ.js";import"./Icon-D0BTFuCW.js";import"./WarningIcon-yrxZOEmI.js";import"./BaseRadioButton.stories-BZh-Nnex.js";import"./BaseRadioButton-C1ak9ENt.js";import"./InputPanel-LeB8i2B8.js";import"./Flex-BvU5ODif.js";import"./SlotComponent-B1aILqeN.js";import"./mergeRefs-FV_7BwMq.js";import"./Button-0oRwMcWT.js";import"./usePreviousValue-MOpvNKjt.js";import"./Loader-B-6EQSBI.js";import"./useDelayedRender-C5VaYVvi.js";import"./Title-CPS2NWu2.js";import"./Card-DAhmWXt2.js";import"./Text-CMwCpGLJ.js";import"./Tag-lhcqeyED.js";import"./ExpandablePanel-DWDiK2nR.js";import"./useAnimatedHeightBetween-C7--S4Fw.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DLrGLnoD.js";import"./Expander-CmOKNxg_.js";import"./ChevronUpIcon-kUdnNNSf.js";import"./ListItem-BZKvvbEC.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
